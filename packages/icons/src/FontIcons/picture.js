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
    <title>picture</title>
    <path d="M31.483 29.333h-27.733c-0.294 0-0.533-0.239-0.533-0.533v-22.4c0-0.294 0.239-0.533 0.533-0.533h27.733c0.294 0 0.533 0.239 0.533 0.533v22.4c0 0.294-0.239 0.533-0.533 0.533zM4.283 28.267h26.667v-21.333h-26.667zM3.749 26.133h-3.2c-0.294 0-0.533-0.239-0.533-0.533v-22.4c0-0.294 0.239-0.533 0.533-0.533h27.733c0.294 0 0.533 0.239 0.533 0.533v3.2c0 0.294-0.239 0.533-0.533 0.533h-24v18.667c0 0.294-0.239 0.533-0.533 0.533zM1.083 25.067h2.133v-18.667c0-0.294 0.239-0.533 0.533-0.533h24v-2.133h-26.667zM31.483 29.333h-14.282c-0.21 0-0.401-0.123-0.486-0.315s-0.052-0.416 0.088-0.573l8.415-9.467c0.202-0.228 0.595-0.228 0.797 0l5.867 6.6c0.087 0.098 0.134 0.223 0.134 0.355v2.866c0 0.294-0.239 0.533-0.533 0.533zM18.389 28.267h12.561v-2.131l-5.333-6zM17.201 29.333h-13.452c-0.294 0-0.533-0.239-0.533-0.533v-8.867c0-0.131 0.048-0.257 0.135-0.355l6.933-7.8c0.202-0.228 0.595-0.228 0.797 0l10.667 12c0.18 0.202 0.18 0.507 0 0.709l-4.148 4.667c-0.101 0.114-0.246 0.179-0.399 0.179zM4.283 28.267h12.679l3.674-4.133-9.953-11.197-6.4 7.2zM21.883 16c-1.47 0-2.667-1.196-2.667-2.667s1.196-2.667 2.667-2.667 2.667 1.196 2.667 2.667-1.196 2.667-2.667 2.667zM21.883 11.733c-0.882 0-1.6 0.718-1.6 1.6s0.718 1.6 1.6 1.6 1.6-0.718 1.6-1.6-0.718-1.6-1.6-1.6z" />{' '}
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
