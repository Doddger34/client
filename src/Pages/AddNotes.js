import React, { useState, useEffect } from "react";

import { useMutation } from "@apollo/client";
import { CreateNot, GetNotesQuery } from "../queries/index";
import "../Style/AddNote.css";
import ListLesson from "../components/ListLesson";
import ListClass from "../components/ListClass";
import { useHistory } from "react-router";
import auth from "../components/User/auth";
import { Modal } from "react-bootstrap";

const ShowConverts = (props) => {
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
						Notumu nasıl pdf çeviririm ?
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div>
						<div className="brb mb-2">
							<div className="hpmd ">
								<ul>
									<li>
										<div className="cmpf">
											Notları pdf haline dönüştürmek için{" "}
											<a
												href="https://bit.ly/2R0yWBu"
												target="_blank"
												rel="noopener noreferrer"
											>
												tıklayın.
											</a>
										</div>
									</li>
									<li>
										Elde ettiğiniz pdf'i{" "}
										<a href="https://www.google.com.tr/drive/about.html">
											Google Driver
										</a>
										' a yükleyin.
									</li>
									<li>
										Yüklediğiniz notun üzerine tıklayıp sağ
										üst köşedeki üç noktaya tıklayın.
									</li>
									<li>
										Daha sonra bağlantıyı alın diyin ve
										bağlantıyı kopyalayın yapınız.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</Modal.Body>
			</Modal>
		</div>
	);
};
// GetLesson function değilde mutation içine yazmaya çılış;

const AddNot = ({ session }) => {
	const [createNot, { loading, error }] = useMutation(CreateNot);
	const [userId, SetUserId] = useState("");
	const [lessonId, SetlessonId] = useState("");
	const [ClassId, SetClassId] = useState("");
	const [Link, SetLink] = useState("");
	const [Name, SetName] = useState("");
	let history = useHistory();
	const [modalShow, setModalShow] = useState(false);
	useEffect(() => {
		if (session && session.activeUser) {
			SetUserId(session.activeUser.id);
		}
	}, [session]);
	const onSubmit = (e) => {
		e.preventDefault();
		//Herhangi bir input boş ise notu yüklemicek;
		if (
			userId !== "" &&
			lessonId !== "" &&
			ClassId !== "" &&
			Link !== "" &&
			Name !== ""
		) {
			createNot({
				variables: { userId, Link, Name, lessonId, classId: ClassId },
				refetchQueries: { query: GetNotesQuery }, //notlar sayfasına notun gitmesi
			}).then(() => {
				history.push("/Notlar");
			});
		}
	};
	if (error) return <div>Başarısız yükleme</div>;
	return (
		<div className="container contact-form">
			<form onSubmit={onSubmit}>
				<h3 className="card-title text-center">
					Notlarım'a not ekleyiniz.
				</h3>
				<div className="row">
					<div className="col-md-6">
						<div className="form-group mt-3">
							<input
								type="text"
								name="txtEmail"
								className="form-control"
								placeholder="Not ismi"
								value={Name}
								required
								onChange={(e) => SetName(e.target.value)}
							/>
						</div>
						<ListLesson SetlessonId={SetlessonId} />
						<ListClass SetClassId={SetClassId} />
					</div>
					<div className="col-md-6">
						<div className="form-group mt-3">
							<textarea
								name="txtMsg"
								className="form-control txtMsg"
								placeholder="Pdf olarak link ekleyiniz..."
								style={{ width: "100%", height: "150px" }}
								value={Link}
								required
								onChange={(e) => SetLink(e.target.value)}
							></textarea>
						</div>
						<div className="convertpdf">
							Notlarımızı nasıl pdf'e çevirizi görmek için{" "}
							<span onClick={() => setModalShow(true)}>
								tıklayınız
							</span>
							.
						</div>
					</div>
					<ShowConverts
						show={modalShow}
						onHide={() => setModalShow(false)}
					/>
					<div className="form-group ml-3 mt-3">
						<button className="btn btn-danger btn-block ">
							{loading ? (
								<div>Yükleniyor...</div>
							) : (
								<div>Notu paylaş</div>
							)}
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default auth((session) => session && session.activeUser)(AddNot);
