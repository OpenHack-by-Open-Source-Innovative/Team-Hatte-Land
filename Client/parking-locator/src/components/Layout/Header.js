import { Fragment } from "react";
import classes from "./Header.module.css";

import parkImg from "../../assets/car_park_1.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Parking Locator</h1>
      </header>
      <div className={classes["main-image"]}>
        <img src={parkImg} alt="a car park!"></img>
      </div>
    </Fragment>
  );
};

export default Header;
