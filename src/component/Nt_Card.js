import React from "react";
import PropTypes from "prop-types";

import "../Style/Card.css";

const Nt_Card = ({ Name, Ders, Class, UserName, Link,Onclick,length }) => {
  return (
    <div className="card Nt" style={{ width: "400px" }}>
      <div className="card-body">
        <h4 className="card-title">{ Name }</h4>
        <div className="ml-1">{ Ders }</div>
        <div className="ml-1">Sınıf: { Class }</div>
        <div className="ml-1">Paylaşan: { UserName } </div>
        <a href={ Link } target="_blank" rel="noopener noreferrer" className="btn btn-quaternary mt-2 ">
          Not
        </a>
      </div>
    </div>
  );
}
Nt_Card.prototypes = {
  Name: PropTypes.string.isRequired,
};

export default Nt_Card;
