import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useMutation, useQuery } from "@apollo/client";
import { CreatePosts, GetPosts } from "../../../queries/index";

const ModalPost = (props) => {
	const { refetch } = useQuery(GetPosts);
	const [CreatePost, { loading }] = useMutation(CreatePosts);
	const [content, setContent] = useState("");
	const [userId, SetUserId] = useState("");
	const [text, SetText] = useState("");
	useEffect(() => {
		if (props.session && props.session.activeUser) {
			SetUserId(props.session.activeUser.id);
		}
	}, [props.session]);
	const SubmitPost = (e) => {
		e.preventDefault();
		CreatePost({
			variables: { userId, content, text },
		}).then(() => {
			refetch(); //Paylaşım oldutan sonra postları yeniliyor;
			props.onHide(); //Modalı kapatıyor;
		});
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
							<div className="form-group">
								<input
									className="form-control"
									placeholder="Başlık"
									value={text}
									onChange={(e) => SetText(e.target.value)}
								/>
							</div>
							<div className="form-group ">
								<textarea
									className=" e2719Ze apn form-control stjowx stjowy vblr7 sbbr4 pbrr3 cbtr8 bck4g arex mwh brn rear fstd lh4t wt1v ws1"
									placeholder="Düşünceniz nedir ?"
									required
									id="message-text"
									value={content}
									onChange={(e) => setContent(e.target.value)}
								/>
							</div>
						</div>
						<div className="bt4vf">
							<button
								type="submit"
								className="btn btn-danger btn-block"
								disabled={loading}
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
