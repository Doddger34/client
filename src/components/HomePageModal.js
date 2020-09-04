import React from "react";
import { Modal } from "react-bootstrap";

const HomePageModal = (props) => {
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
						Neden Notlar Pdf ?
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div>
						<div className="brb mb-2">
							<div class="hpmd ">
								<p>
									Bizler sizin sitemizdeki notları erişimini daha
									kolay hale getirmek için notları pdf olarak
									sunuyoruz. {"  "}
									Bunun yanında notlarımızı indirmek için pdf hali
									bize daha uygun geldi. Hemde GoogleDriver'a
									notları kayıt edebilin diye pdf formatında not
									paylaşıyoruz.
								</p>
							</div>
						</div>
					</div>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default HomePageModal;
