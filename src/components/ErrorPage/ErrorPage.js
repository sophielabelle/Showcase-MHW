import React from "react";
import { NavLink } from "react-router-dom";
import "./ErrorPage.css";

export const ErrorPage = ({errMessage}) => {
  const errText = errMessage.length ? errMessage : `We're sorry but there was an error and this url does not exist.`
  return (
    <section className="error-page">
      <h2 className="error-title" >{errText}</h2>
      <NavLink to="/">
        <button className="error-btn">Please Return Home</button>
      </NavLink>
    </section>
  );
}