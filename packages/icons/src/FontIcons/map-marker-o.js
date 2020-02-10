import React from 'react';
import PropTypes from 'prop-types';

const IconName = ({ className, size }) => (
  <svg
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
  >
    <title>map-marker-o</title>
    <path d="M15.876 31.716c-0.346 0-0.676-0.155-0.903-0.413l-0.335-0.387c-1.105-1.29-10.766-12.774-10.766-18.911 0.009-6.629 5.381-11.999 12.010-12.005h0.001c6.627 0.009 11.996 5.378 12.005 12.004v0.001c0 5.972-8.965 16.795-10.761 18.906l-0.341 0.392c-0.227 0.258-0.557 0.413-0.908 0.413zM15.876 2.4c-5.303 0.006-9.601 4.302-9.61 9.604v0.001c0 4.072 5.987 12.305 9.61 16.666 3.623-4.366 9.615-12.625 9.615-16.666-0.006-5.305-4.305-9.604-9.61-9.61h-0.001zM15.881 16.779c-2.542-0.122-4.557-2.213-4.557-4.774s2.015-4.652 4.546-4.774l0.011-0c2.542 0.122 4.557 2.213 4.557 4.774s-2.015 4.652-4.546 4.774l-0.011 0zM15.881 9.626c-0.033-0.002-0.072-0.003-0.111-0.003-1.317 0-2.385 1.068-2.385 2.385s1.068 2.385 2.385 2.385c0.039 0 0.078-0.001 0.116-0.003l-0.005 0c1.268-0.061 2.274-1.104 2.274-2.382s-1.005-2.321-2.268-2.382l-0.005-0z" />{' '}
  </svg>
);

IconName.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

IconName.defaultProps = {
  size: 1.5,
};

export default IconName;
