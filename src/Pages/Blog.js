import React from "react";
import BlogInput from "../components/BlogInput";
import ListPost from "../components/ListPost";
import { Link } from "react-router-dom";
import "../Style/Blog.css";

const Blog = ({ session }) => {
	if (!session.activeUser) {
		return (
			<div className="bck whxa1s mas1cdz ">
				<div class="sz34e">
					<div className="rear">
						<div className="fstd">
							<Link to="/Kaydol" >
								Kayıt olup
							</Link>{" "}
							soru sormaya başlayın.
						</div>
					</div>
				</div>
			</div>
		);
	}
	return (
		<div>
			{session.activeUser ? <BlogInput session={session} /> : null}
			<ListPost />
		</div>
	);
};

export default Blog;
