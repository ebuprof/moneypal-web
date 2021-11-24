import React from "react";
import ItemsList from "./itemsList";
import "./style.scss";
import { Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";

const Landing = () => {
  return (
    <Fragment>
      <div className="header">
        <Link className="logo-container" to="/">
          <h3>MoneyPal</h3>
        </Link>
        <div className="options">
          <Link className="option" to="/login">
            {" "}
            Sign In{" "}
          </Link>
        </div>
      </div>
      <div className="homepage">
        <ItemsList />
      </div>
    </Fragment>
  );
};

export default Landing;
