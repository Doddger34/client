import React from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

import "../../../Style/Blog.css"

const BlogPost = (props) => {
	return (
		<div className="sz34e ı9jk ws1 du4w ">
			<div className=" ı9jk du4w ">
				<div className="lszc">
					<div className="j83ag cub4  ">
						<div className="req4s ı9jk du4w m0aut w5w1v  ">
							<div className="ı9jk ws1 j83ag  ">
								<div className="cbtr8 cbtr4 sbbr4 vblr7 stjowy sbc req4s stjowx ı9jk ws1 du4w   ">
									<div className="tw6a twsc4 ">
										<div className="ws1 jkl74 pcbr5 pcb12 pcbb4 pcg6 bb5ci ">
											<div className="n_blog_content_avatar jkl74 ws1 boufo ıı8tl ">
												<Link
													to="#"
													className="jkl74 rz4wb req4s qts1l oygrp dix2s oajt nht ı9jk kvged i1ao9 huck gia5 f1sd abiw an8s r7cf qu0x0 esr5mh e995s phl4 lszc esuyz"
												>
													<div className="ı9jk">
														<img
															height="40"
															width="40"
															className="sf45f emlx bkms sbp7 a8c3"
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
											<div>
												<div className="cxg sj5 tw6a ">
													<div className="jklxs1x nht">
														<span className="cttunfsm cttunfw ">
															{" "}
															{props.userName}
														</span>{" "}
														-{" "}
														<span className="cttur1s bckgctturs fwctts">
															{props.userRole}
														</span>
													</div>
												</div>
											</div>
										</div>
										<div className="cttunfw a5q79 ctmt2x ">
											{props.text}
										</div>
										<div className="bb5ci req4s ctmb8x ">
											<div className=" ctmb2z ctmt2x  ">
												{props.content}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

BlogPost.propTypes = {
	content: PropTypes.string.isRequired,
	userRole: PropTypes.string.isRequired,
	userName: PropTypes.string.isRequired
}

export default BlogPost;
