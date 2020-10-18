import { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

// This of course could've been more streamlined with internal state instead of
// refs, but then host hooks / components could not opt out of renders.
// This could've been exported to its own module, but the current build doesn't
// seem to work with module imports and I had no more time to spend on this...
function useResolvedElement(subscriber, refOrElement) {
  // The default ref has to be non-conditionally declared here whether or not
  // it'll be used as that's how hooks work.
  // @see https://reactjs.org/docs/hooks-rules.html#explanation
  let ref = useRef(null); // Default ref
  const refElement = useRef(null);
  const callbackRefElement = useRef(null);
  const callbackRef = useCallback(element => {
    callbackRefElement.current = element;
    callSubscriber();
  }, []);
  const lastReportedElementRef = useRef(null);
  const cleanupRef = useRef();
  const callSubscriber = () => {
    let element = null;
    if (callbackRefElement.current) {
      element = callbackRefElement.current;
    } else if (refElement.current) {
      element = refElement.current;ب
    } else if (refOrElement instanceof HTMLElement) {
      element = refOrElement;
    }
    if (lastReportedElementRef.current === element) {
      return;
    }
    if (cleanupRef.current) {
      cleanupRef.current();
    }
    lastReportedElementRef.current = element;
    // Only calling the subscriber, if there's an actual element to report.
    if (element) {
      cleanupRef.current = subscriber(element);
    }
  };
  if (refOrElement && !(refOrElement instanceof HTMLElement)) {
    // Overriding the default ref with the given one
    ref = refOrElement;
  }
  // On each render, we check whether a ref changed, or if we got a new raw
  // element.
  useEffect(() => {
    // Note that this does not mean that "element" will necessarily be whatever
    // the ref currently holds. It'll simply "update" `element` each render to
    // the current ref value, but there's no guarantee that the ref value will
    // not change later without a render.
    // This may or may not be a problem depending on the specific use case.
    refElement.current = ref.current;
    callSubscriber();
  }, [ref, ref.current, refOrElement]);
  return {
    ref,
    callbackRef,
  };
}
function useResizeObserver(opts = {}) {
  // Saving the callback as a ref. With this, I don't need to put onResize in the
  // effect dep array, and just passing in an anonymous function without memoising
  // will not reinstantiate the hook's ResizeObserver
  const onResize = opts.onResize;
  const onResizeRef = useRef(undefined);
  onResizeRef.current = onResize;
  // Using a single instance throughout the hook's lifetime
  const resizeObserverRef = useRef();
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });
  // In certain edge cases the RO might want to report a size change just after
  // the component unmounted.
  const didUnmount = useRef(false);
  useEffect(() => {
    return () => {
      didUnmount.current = true;
    };
  }, []);
  // Using a ref to track the previous width / height to avoid unnecessary renders
  const previous = useRef({
    width: undefined,
    height: undefined,
  });
  // This block is kinda like a useEffect, only it's called whenever a new
  // element could be resolved based on the ref option. It also has a cleanup
  // function.
  const { ref, callbackRef } = useResolvedElement(element => {
    // Initialising the RO instance
    if (!resizeObserverRef.current) {
      // Saving a single instance, used by the hook from this point on.
      resizeObserverRef.current = new ResizeObserver(entries => {
        if (!Array.isArray(entries)) {
          return;
        }
        // Since we only observe the one element, we don't need to loop over the
        // array
        if (!entries.length) {
          return;
        }
        const entry = entries[0];
        // `Math.round` is in line with how CSS resolves sub-pixel values
        const newWidth = Math.round(entry.contentRect.width);
        const newHeight = Math.round(entry.contentRect.height);
        if (
          previous.current.width !== newWidth ||
          previous.current.height !== newHeight
        ) {
          const newSize = { width: newWidth, height: newHeight };
          if (onResizeRef.current) {
            onResizeRef.current(newSize);
          } else {
            previous.current.width = newWidth;
            previous.current.height = newHeight;
            if (!didUnmount.current) {
              setSize(newSize);
            }
          }
        }
      });
    }
    resizeObserverRef.current.observe(element);
    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.unobserve(element);
      }
    };
  }, opts.ref);
  return useMemo(
    () => ({ ref, callbackRef, width: size.width, height: size.height }),
    [ref, callbackRef, size ? size.width : null, size ? size.height : null],
  );
}
export default useResizeObserver;
