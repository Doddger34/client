import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
//import "../Style/Card.css";
class Les_Card extends Component {
  render() {
    return (
      <div className="card Ls" style={{ width: "18rem" }}>
        <div className="card-body Ls_body">
          <h5 className="card-title Ls_body-tittle">{this.props.Name}</h5>
          <Link to={`${this.props.Name}`} className="btn btn-quaternary">
            Notları Göster
          </Link>
        </div>
        <style jsx="true">{`.Ls{
          margin:50px 0px 10px 20px;
          display: inline-flex;
      }
      .Nt{
          margin:50px 0px 10px 20px;
          display: inline-flex;
      }`}</style>
      </div>
    );
  }
}
Les_Card.prototypes = {
  Name: PropTypes.string.isRequired
};

export default Les_Card;
