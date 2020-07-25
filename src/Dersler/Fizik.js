import React from 'react';

import NCard from '../component/Nt_Card';
import { useQuery } from '@apollo/client';
import {  GetPhysicsNotesQuery } from '../queries/index';

const Fizik = () => {
	const { loading, data, error } = useQuery(GetPhysicsNotesQuery);
	if (loading) return <p style={{textAlign:'center'}}>Loading...</p>;
	if (error) return <p style={{textAlign:'center'}}>Error...</p>;
	return (
		<div>
			<div className="N_Tittle">
				<span>Fizik</span>
			</div>
			{
				data.Lesson.Not.map( dat => {
					return(
						<NCard 
							key = { dat.id }
							Name = { dat.Name }
							Link = { dat.Link }
							Ders = { dat.Lesson.Name }
							UserName = { dat.User.UserName }
							Class = { dat.Class.ClassName }
						/>
					);
				})
			}
		</div>
	);
};

export default Fizik;
