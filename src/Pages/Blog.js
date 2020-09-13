import React from "react";
import BlogInput from "../components/Blog/Input/BlogInput";
import ListPost from "../components/Blog/Post/ListPost";
import { Link } from "react-router-dom";
import "../Style/Blog.css";

const Blog = ({ session }) => {
	//TODOS activeUser yoksa sadece post atma yeri olmasın postlar listelensin;
	if (!session.activeUser) {
		return (
			<div className="bck whxa1s mas1cdz ">
				<div className="sz34e">
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
