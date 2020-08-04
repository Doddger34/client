import React from 'react';
import BlogInput from '../components/BlogInput';
import ListPost from '../components/ListPost';
import auth from '../components/auth';

const Blog = ({ session }) => {
	return (
		<div>
			<BlogInput session={session} />
			<ListPost />
		</div>
	);
};

export default auth( session => session && session.activeUser)(Blog);
