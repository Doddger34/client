import React from "react";
import { Link } from "react-router-dom";
const HomeUnLogin = () => {
	return (
		<div>
			<div className="component-margin">
				<div className="u-component-logged-out-home">
					<div className="component-padding">
						<div className="u-component-text">
							<h3 className="onboarding--title--29uIA advertising-banner--title--2D50e">
								Öğrenmeye başlayın
							</h3>
							<div className="onboarding--subtitle--1pGkW">
								Yapmanız gereken
							</div>
						</div>
						<div className="u-component-button">
							<Link
								to="/Kaydol"
								className="m-auto udlite-btn udlite-btn-large udlite-btn-secondary udlite-heading-md onboarding--button--3wJuJ"
							>
								<span>Kaydol</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeUnLogin;
