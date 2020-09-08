import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../Style/Card.css";

const Les_Card = (props) => {
	return (
		<div className="card Ls" style={{ width: "18rem" }}>
			<div className="card-body Ls_body">
				<h5 className="card-title Ls_body-tittle">{props.Name}</h5>
				<Link to={`${props.Name}`} className="btn btn-quaternary">
					Notları Göster
				</Link>
			</div>
		</div>
	);
};

Les_Card.prototypes = {
	Name: PropTypes.string.isRequired,
};

export default Les_Card;
