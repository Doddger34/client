import React, { Component } from "react";
import PropTypes from "prop-types";

import "../Style/Card.css";

class Nt_Card extends Component {
  render() {
    return (
      <div className="card Nt" style={{ width: "400px" }}>
        <div className="card-body">
          <h4 className="card-title">{this.props.Name}</h4>
          <div className="ml-1">{this.props.Ders}</div>
          <div className="ml-1">Sınıf: {this.props.Class}</div>
          <div className="ml-1">Paylaşan: {this.props.UserName} </div>
          <a href={this.props.Link} target="_blank" className="btn btn-quaternary mt-2 ">
            Not
          </a>
        </div>
      </div>
    );
  }
}
Nt_Card.prototypes = {
  Name: PropTypes.string.isRequired,
};

export default Nt_Card;
