import React from "react";
import { NavLink } from "react-router-dom";
import "./ErrorPage.css";

export const ErrorPage = ({errorText}) => {
  return (
    <section className="error-page">
      <h2 className="error-title" >We're sorry but there was an error and this url does not exist.</h2>
      <NavLink to="/">
        <button className="error-btn">Please Return Home</button>
      </NavLink>
    </section>
  )
}