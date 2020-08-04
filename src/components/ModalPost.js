import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useMutation, useQuery } from "@apollo/client";
import ListClass from "./ListClass";
import { CreatePosts, GetPosts } from "../queries/index";

const ModalPost = ( props ) => {
	const { refetch } = useQuery(GetPosts)
 	const [CreatePost, { loading }] = useMutation(CreatePosts);
	const [content, setContent] = useState('');
	const [classId, SetClassId] = useState('');
	const [userId, SetUserId] = useState('');
	useEffect(() => {
		if (props.session && props.session.activeUser) {
			SetUserId(props.session.activeUser.id);
		}
	}, [props.session]);	
	const SubmitPost = (e) => {
		e.preventDefault();
		CreatePost({
			variables: {  userId:userId, content: content, classId:classId },
		}).then(() => {
			refetch(); //Paylaşım oldutan sonra postları yeniliyor
			props.onHide();
		})
	};

	return (
		<div>
			<Modal
				{...props}
				size="m"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						Gönderi Oluşturun
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form onSubmit={SubmitPost}>
						<div className="brb mb-2">
							<div class="form-group ">
								<textarea
									className=" e2719Ze apn form-control stjowx stjowy vblr7 sbbr4 pbrr3 cbtr8 bck4g arex mwh brn rear fstd lh4t wt1v ws1"
									placeholder="Sorunuz nedir ? "
									required
									id="message-text"
									value={content}
									onChange={(e) => setContent(e.target.value)}
								/>
							</div>
						</div>
						<ListClass ClassId={classId} SetClassId={SetClassId} />
						<div className="bt4vf">
							<button
								type="submit"
								className="btn btn-danger btn-block"
							>
								{loading ? (
									<div>Paylaşılıyor</div>
								) : (
									<div>Paylaş</div>
								)}
							</button>
						</div>
					</form>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default ModalPost;
