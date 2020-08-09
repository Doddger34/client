/* eslint-disable react/prop-types */
import React from 'react';
import HomeUnLogin from '../components/HomeUnLogin';

import '../Style/Home.css';
import { Link } from 'react-router-dom';
const Home = ( { session } ) => {
  
	return (
		<div>
			<div className="udlite-container container">
				<div className="row">
					{session.activeUser ? (
						<div className="welcome-tittle">
							<h5 className="udlite-heading-xxl my-learning-unit--title--3Oy5V col-md-xxs-12 ">
								{session.activeUser.UserName}, öğrenmeye başlayalım
							</h5>
						</div>
					) : null}
				</div>
			</div>
			<hr className="clearfix w-100 " />
			<div className="container">
				<div className="row">
					<div className="col-md-7 col-lg-5 left">
						<p>
              Öğrencilerin kendi notlarını pdf halinde ulaşacağınız tek nokta.
              Oturum açıp kendi notunuzu{' '}
							<Link to="Notekle">paylaşabilirsiniz</Link>. İster başkalarının
              notlarına <Link to="Notlar">göz gezdirebilirsiniz</Link>.
						</p>
					</div>
					<div className="col-md-7 col-lg-5  home-left right">
						<p>
							<Link to="/Dev"> Geliştirici </Link> notlarına gidip site ile
              ilgili gelişmeleri takip edeblirsiniz.
						</p>
						<p>
							<Link to="/Blog"> Blog </Link> sayfasına gidip anlamadığınız veya kafanızı karıştıran
							her soruyu sorabilirsiniz.
						</p>
					</div>
				</div>
			</div>
			<hr />

			{session.activeUser ? null : (
				<HomeUnLogin  />
			)}
		</div>
	);
};

export default Home;
