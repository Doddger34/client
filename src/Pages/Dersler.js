import React from 'react';

import LCard from '../component/Les_Card';
import { useQuery } from '@apollo/client';
import { GetLessonQuery } from '../queries/index';

const Dersler = () => {
	const { loading, error, data } = useQuery(GetLessonQuery);
	if (loading) return <p style={{textAlign:'center'}}>Loading...</p>;
	if (error) return <p style={{textAlign:'center'}}>Error...</p>;
	return(
		<div>
			{
				data.Lessons.map(data => {
					return(
						<LCard 
							key= { data.id }
							Name = { data.Name }
							Link = { data.Link }
						/>
					);
				})
			}
		</div>
	);
}; 
export default Dersler;
