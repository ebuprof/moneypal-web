import React from "react";
import ItemsList from "./itemsList";
import "./style.scss";
import { Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";

const Home = () => {
  const amount = localStorage.getItem("amount");
  return (
    <Fragment>
      <div className="header">
        <Link className="logo-container" to="/">
          <h3>MoneyPal</h3>
        </Link>
        <div className="options">
          <Link className="option" to="/fund">
            {" "}
            Fund Wallet{" "}
          </Link>
          {/* ) : (
          <Link className="option" to="/create-wallet">
            {" "}
            Create wallet{" "}
          </Link>
          ) */}
          <span className="option"> Balance: {amount} </span>
          {/* <div className="option"> Sign Out</div> */}
          <Link className="option" to="/">
            {" "}
            Sign Out{" "}
          </Link>
        </div>
      </div>
      <div className="homepage">
        <ItemsList />
      </div>
    </Fragment>
  );
};

export default Home;
