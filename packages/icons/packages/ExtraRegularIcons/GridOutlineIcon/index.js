import * as React from 'react';
import PropTypes from 'prop-types';

const GridOutlineIcon = ({ className, size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 400 400"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill={color}
  >
    <defs />
    <path
      d="M48.456 26.239c-8.572 2.331-16.969 9.58-20.959 18.095l-2.106 4.494v109.375l2.293 4.688c2.933 5.992 9.683 12.742 15.675 15.675l4.688 2.293h109.375l4.494-2.106c5.229-2.45 12.196-8.741 15.023-13.565 4.334-7.395 4.384-8.174 4.142-64.14l-.222-51.439-2.506-5.292c-3.293-6.952-9.468-13.127-16.42-16.42l-5.292-2.506-51.953-.158c-43.921-.133-52.615.023-56.232 1.006m192.822.247c-8.434 2.723-16.176 9.62-20.031 17.848l-2.106 4.494v109.375l2.293 4.688c2.933 5.992 9.683 12.742 15.675 15.675l4.688 2.293 53.516.219c59.607.244 57.132.438 65.518-5.129 4.997-3.317 10.345-10.241 12.349-15.989 1.331-3.818 1.429-7.762 1.429-57.226V49.609l-2.506-5.292c-3.293-6.952-9.468-13.127-16.42-16.42l-5.292-2.506-52.344-.167c-48.842-.156-52.64-.071-56.769 1.262m-89.289 27.775l1.917 1.918v47.154c0 46.043-.036 47.193-1.559 48.827-2.388 2.564-3.57 2.618-51.74 2.37l-45.096-.233-1.779-1.779-1.779-1.779-.229-45.096c-.243-47.647-.168-49.386 2.226-51.78 1.471-1.471 3.013-1.519 48.82-1.519h47.301l1.918 1.917m193.75 0l1.917 1.918v47.215c0 45.323-.06 47.288-1.493 49.059l-1.494 1.844H249.262l-1.779-1.779-1.78-1.779-.229-45.096c-.243-47.647-.168-49.386 2.226-51.78 1.471-1.471 3.013-1.519 48.82-1.519h47.301l1.918 1.917M47.528 220.236c-8.434 2.723-16.176 9.62-20.031 17.848l-2.106 4.494v109.375l2.293 4.688c2.933 5.992 9.683 12.742 15.675 15.675l4.688 2.293h109.375l4.494-2.106c5.229-2.45 12.196-8.741 15.023-13.565 4.334-7.395 4.384-8.174 4.142-64.14l-.222-51.439-2.506-5.292c-3.293-6.952-9.468-13.127-16.42-16.42l-5.292-2.506-52.344-.167c-48.842-.156-52.64-.071-56.769 1.262m193.75 0c-8.434 2.723-16.176 9.62-20.031 17.848l-2.106 4.494v109.375l2.293 4.688c2.933 5.992 9.683 12.742 15.675 15.675l4.688 2.293 53.516.219c59.607.244 57.132.438 65.518-5.129 4.997-3.317 10.345-10.241 12.349-15.989 1.331-3.818 1.429-7.762 1.429-57.226v-53.125l-2.506-5.292c-3.293-6.952-9.468-13.127-16.42-16.42l-5.292-2.506-52.344-.167c-48.842-.156-52.64-.071-56.769 1.262m-89.289 27.775l1.917 1.918v47.154c0 46.043-.036 47.193-1.559 48.827-2.388 2.564-3.57 2.618-51.74 2.37l-45.096-.233-1.779-1.779-1.779-1.779-.229-45.096c-.243-47.647-.168-49.386 2.226-51.78 1.471-1.471 3.013-1.519 48.82-1.519h47.301l1.918 1.917m193.75 0l1.917 1.918v47.215c0 45.323-.06 47.288-1.493 49.059l-1.494 1.844H249.262l-1.779-1.779-1.78-1.779-.229-45.096c-.243-47.647-.168-49.386 2.226-51.78 1.471-1.471 3.013-1.519 48.82-1.519h47.301l1.918 1.917"
    />
  </svg>
);

GridOutlineIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};

GridOutlineIcon.defaultProps = {
  size: 1.5,
  color: '#000000',
};
export default GridOutlineIcon;
