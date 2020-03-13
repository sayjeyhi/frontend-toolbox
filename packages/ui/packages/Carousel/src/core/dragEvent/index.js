import { dragAction, dragEnd, dragStart } from './partial';

export default class DragEvent {
  /**
   * @name constructor
   * @description sets the core to access to the core instance methods without inheritance, initializes the drag events handlers
   * @param params
   */
  constructor(params) {
    const { core } = params;
    this.setCore(core);
    this.initialize();
  }

  /**
   * @name setCore
   * @param core
   */
  setCore(core) {
    this.core = core;
  }

  /**
   * @name getCore
   * @return {object}
   */
  getCore() {
    return this.core;
  }

  /**
   * @name initialize
   * @description gets the config from core, initializes the drag action events, and attaches to the slider
   */
  initialize() {
    const {
      config: {
        infinite, responsive, threshold, rtl,
      },
      getSliderItems,
      setPosInitial,
      setPosX1,
      getPosX1,
      setPosX2,
      getPosX2,
      getSlider,
      getPerSlide,
      getSlidesLength,
      getIndex,
      getSlideSize,
      getSliderMainWidth,
      setIndex,
      setPosFinal,
      getPosFinal,
      setAllowShift,
      transitionendWatcherCall,
    } = this.core;

    /**
     * @name dragEndCall
     * @description handles the drag end event by passing the config and end point of the dragging to the dragEnd method
     */
    const dragEndCall = () => {
      const dragStartParams = {
        sliderItems: getSliderItems(),
        slidesLength: getSlidesLength(),
        slideSize: getSlideSize(),
        sliderMainWidth: getSliderMainWidth(),
        slider: getSlider(),
        posFinal: getPosFinal(),
        threshold,
        responsive,
        infinite,
        rtl,
        setIndex,
        setPosFinal,
        transitionendWatcherCall,
        dragAction,
        setPosInitial,
        setPosX1,
        setAllowShift,
        index: getIndex(),
      };
      dragEnd(dragStartParams);
    };

    /**
     * @name dragActionCall
     * @description handles the dragging event by passing the config and current drag point to the dragAction method
     * @param e
     */
    const dragActionCall = (e) => {
      const dragActionParams = {
        e,
        getPosX1,
        setPosX1,
        setPosX2,
        setPosInitial,
        getSliderItems,
        threshold,
        rtl,
        getPosX2,
        getSlidesLength,
        getPerSlide,
        responsive,
        getSlider,
        infinite,
        getSlideSize,
        getSliderMainWidth,
      };
      dragAction(dragActionParams);
    };

    /**
     * @name dragStartCall
     * @description handles the drag start event by passing config and start point of drag event to the dragStart method
     * @param e
     */
    const dragStartCall = (e) => {
      const dragStartParams = {
        e,
        sliderItems: getSliderItems(),
        setPosInitial,
        setPosX1,
        dragEndCall,
        dragActionCall: (event) => dragActionCall(event), // there was a conflict for naming parameters, changed it to event.
        sliderMainWidth: getSliderMainWidth(),
        rtl,
      };
      dragStart(dragStartParams);
    };

    // Mouse events
    getSliderItems().onmousedown = dragStartCall;
    // Touch events
    getSliderItems().addEventListener('touchstart', dragStartCall);
    getSliderItems().addEventListener('touchend', dragEndCall);
    getSliderItems().addEventListener('touchmove', dragActionCall);
  }
}
