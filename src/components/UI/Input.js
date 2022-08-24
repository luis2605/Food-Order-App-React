import React from "react";

import classes from "./input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>
        {props.label} <input ref={ref} id={props.input.id} {...props.input} />
      </label>
    </div>
  );
});

export default Input;
