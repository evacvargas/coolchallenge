import React from "react";
import classnames from 'classnames';

const Button = ({
  action, text, size, bgColor, textColor
}) => (
  <button
    type="button"
    onClick={action}
    className={classnames(`bg-${bgColor} text-${textColor} font-bold py-2 px-4 rounded`, {
      "text-xs": size === 'sm',
      "text-xl": size === 'lg'
      })}>
    {text}
  </button>
);

export default Button;
