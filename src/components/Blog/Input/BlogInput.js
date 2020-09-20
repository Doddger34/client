import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalPost from "./ModalPost";

const BlogInput = (props) => {
	const [modalShow, setModalShow] = useState(false);
	return (
		<div className="sz34e btwsd">
			<div className="e7sdg ze3d">
				<div className="n_blog e2719Z ws1 gr5s c7sd ">
					<div className="n_blog_margin c7sd">
						<div className="n_blog_padding">
							<div className=" stjowy stjowx cbtr8 cbtr4 sbbr4 vblr7 req4s e2719Ze sbxfgr bp9bcyr ">
								<div className="pcbr5 pcbl2 pcbb4 pcg6 ıhavf jkl74 ">
									<div className="n_blog_content_avatar jkl74 ws1 boufo ıı8tl ">
										<Link
											to="/profil"
											className="jkl74 rz4wb req4s qts1l oygrp dix2s oajt nht ı9jk kvged i1ao9 huck gia5 f1sd abiw an8s r7cf qu0x0 esr5mh e995s phl4 lszc esuyz"
										>
											<div className="ı9jk">
												<img
													height="40"
													width="40"
													className="sf45f emlx bkms sbp7 a8c3 "
												/>
												<div
													className="sf45f emlx bkms sbp7 pmk7 oaz4 kr520xx j9is"
													style={{
														height: "40px",
														width: "40px",
													}}
												></div>
											</div>
											<div
												className="sf45f emlx bkms sbp7 iq07 nfx kr520xx j9is b5cty hzru pmk7  j9is "
												data-visualcompletion="ignore"
											></div>
										</Link>
									</div>
									<div
										className="n_blog_content_input ttsr tw6a stjowy sj5 req4s oygrp orhub oajt nht ı9jk kvged kbf jifv j83ag idiw i1ao9 huck fmx f1sd emz pcbb4 czk cxm cxg boufo btwsd bp9bcyr b3i9 abiw r7cf qu0x0 e995s phl4 lszc esuyz"
										style={{
											boxShadow: "0 3px 2px #1c1e21",
										}}
									>
										<div className="m9o ws1 jm1 a5q79 ">
											<div
												className="stjowx stjowy ı9jk"
												style={{
													WebkitBoxOrient: "vertical",
													WebkitLineClamp: "2",
													display: "-webkit-box",
												}}
												onClick={() =>
													setModalShow(true)
												}
											>
												Düşünceniz nedir ?
											</div>
											<div
												style={{ borderRadius: "20px" }}
												className="rnr61 qs9y pmk7 ot9 nfx n00s kvged k77z j9is iq07 hzru c5n b5cty art1 arfg  "
											></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ModalPost
				session={props.session}
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
		</div>
	);
};

export default BlogInput;
