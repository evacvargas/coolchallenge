// import PropTypes from 'prop-types';
import React from "react";

const Button = ({
  action, text
}) => (
  <button
    type="button"
    onClick={action}
    className="bg-primary w-44 p-2 h-11 rounded-md text-background font-medium text-xs hover:bg-hover hover:text-gray" 
  >
    {text}
  </button>
);
export default Button;

// Button.defaultProps = {
//   small: false,
//   type: 'primary',
//   onclick: () => {},
// };

// Button.propTypes = {
//   small: PropTypes.bool,
//   type: PropTypes.oneOf(['primary', 'secondary-outline']),
//   children: PropTypes.any.isRequired,
//   onclick: PropTypes.func,
// };