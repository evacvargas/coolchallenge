import React from "react";

const Button = ({
  action, text
}) => (
  <button
    type="button"
    onClick={action}
    className="bg-primary w-56 p-4 h-14 rounded-md text-background hover:bg-hover hover:text-gray text-sm" 
  >
    {text}
  </button>
);
export default Button;
