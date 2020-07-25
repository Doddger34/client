import React, { useState, useEffect } from 'react';

import { useMutation } from '@apollo/client';
import { CreateNot, GetNotesQuery } from '../queries/index';
import '../Style/AddNote.css';
import ListLesson from '../components/ListLesson';
import ListClass from '../components/ListClass';
import { useHistory } from 'react-router';
import auth from '../components/auth';

// GetLesson function değilde mutation içine yazmaya çılış;
// eslint-disable-next-line react/prop-types
const AddNot = ( {session} ) => {
	const [createNot, { loading, error }] = useMutation(CreateNot);
	const [userId, SetUserId] = useState('');
	const [lessonId, SetlessonId] = useState('');
	const [ClassId, SetClassId] = useState('');
	const [Link, SetLink] = useState('');
	const [Name, SetName] = useState('');
	let history = useHistory();
	useEffect(() => {
		if (session && session.activeUser) {
			SetUserId(session.activeUser.id);
		}
	},[session]);
	const onSubmit = e => {
		e.preventDefault();
		createNot({
			variables: { userId, Link, Name, lessonId, classId: ClassId },
			refetchQueries: { query: GetNotesQuery } //notlar sayfasına notun gitmesi
		}).then(() => {
			history.push('/Notlar');
		});
	};
	if(error) return <div>Ders yüklenemedi...</div>;
	return (
		<div className="container contact-form">
			<form onSubmit={ onSubmit }>
				<h3 className="card-title text-center" >Notlarım a not ekleyiniz.</h3>
				<div className="row">
					<div className="col-md-6">
						<div className="form-group mt-3">
							<input
								type="text"
								name="txtEmail"
								className="form-control"
								placeholder="Not ismi"
								value={ Name }
								onChange={ e => SetName(e.target.value) }
							/>
						</div>
						<ListLesson lessonId={lessonId} SetlessonId={SetlessonId} />
						<ListClass ClassId={ClassId} SetClassId={SetClassId} />
					</div>
					<div className="col-md-6">
						<div className="form-group mt-3">
							<textarea
								name="txtMsg"
								className="form-control"
								placeholder="Pdf olarak link ekleyiniz..."
								style={{width: '100%',height: '150px'}}
								value={Link}
								onChange={ e => SetLink(e.target.value) }
							></textarea>
						</div>
					</div>
					<div className="form-group ml-3 mt-3">
						<button className="btn btn-danger btn-block " >
							{
								loading ? <div>Yükleniyor...</div> : <div>Notu paylaş</div>
							}
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default auth( session => session && session.activeUser)(AddNot);
