import React, { Fragment } from "react";
import meals from "../../assets/meals.jpg";
import classes from "./header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={meals} alt="a table full of food" />
      </div>
    </Fragment>
  );
};

export default Header;