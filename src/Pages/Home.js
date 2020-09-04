import React, { useState } from "react";

import HomeUnLogin from "../components/HomeUnLogin";
import HomePageModal from "../components/HomePageModal";
import { Link } from "react-router-dom";
import "../Style/Home.css";

const Home = ({ session }) => {
	const [modalShow, setModalShow] = useState(false);

	return (
		<div>
			<div className="udlite-container container">
				<div className="row">
					{session.activeUser ? (
						<div className="welcome-tittle">
							<h5 className="udlite-heading-xxl my-learning-unit--title--3Oy5V col-md-xxs-12 ">
								{session.activeUser.UserName}, öğrenmeye
								başlayalım
							</h5>
						</div>
					) : null}
				</div>
			</div>
			<hr className="clearfix w-100 " />
			<div className="container">
				<div className="row clg">
					<div className="col-md-7 col-lg-5 left">
						<p>
							Öğrencilerin kendi notlarını pdf halinde
							ulaşacağınız tek nokta. Oturum açıp kendi notunuzu{" "}
							<Link to="Notekle">paylaşabilirsiniz</Link>.
							<p className="mt-3">
								İster başkalarının notlarına{" "}
								<Link to="Notlar">göz gezdirebilirsiniz</Link>.
							</p>
						</p>
					</div>
					<div className="col-md-7 col-lg-5  home-left right">
						<p>
							<Link to="/Dev"> Geliştirici </Link> notlarına gidip
							site ile ilgili gelişmeleri takip edeblirsiniz.
						</p>
						<p data-toggle="modal" data-target="#exampleModal">
							Neden pdf olarak{" "}
							<Link to="#" onClick={() => setModalShow(true)}>
								yüklüyoruz
							</Link>
							?
						</p>
					</div>
					<HomePageModal
						show={modalShow}
						onHide={() => setModalShow(false)}
					/>
				</div>
			</div>
			<hr />
			{session.activeUser ? null : <HomeUnLogin />}
		</div>
	);
};

export default Home;
