import React, { useEffect } from 'react';

import NCard from '../component/Nt_Card';
import { useQuery } from '@apollo/client';
import { GetNotesQuery } from '../queries/index';
import '../Style/Notes.css';

const Notlar = () => {
	const { loading, data, error, refetch } = useQuery(GetNotesQuery);
	useEffect(()=>{
		refetch();
	},[refetch]);
	if (loading) return <p style={{ textAlign: 'center' }}>Loading...</p>;
	if (error) return <p style={{ textAlign: 'center' }}>Error...</p>;
	return ( 
		<div>
			{
				data.Notes.map(data => (
	 				<NCard 	
					key={data.id}
					Name={data.Name}
					Link={data.Link}
					Ders={data.Lesson.Name}
					UserName={data.User.UserName}
					Class={data.Class.ClassName}
					/>
				))
			}
		</div>
	); 
};

export default Notlar;
