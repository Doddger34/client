import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { CreateUser } from '../queries/index';
import { useHistory } from 'react-router';

import '../Style/SigIn.css';
const SignIn = () => {
	const [createUser, { loading, error }] = useMutation(CreateUser);
	const [UserName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [passwordRepeat, setPasswordRepeat] = useState('');
	let history = useHistory();
	const onSubmit = (e) => {
		e.preventDefault();
		createUser({
			variables: { UserName: UserName, password: password, email: email },
		}).then(async ({ data }) => {
			sessionStorage.setItem('token', data.createUser.token);
			history.push('/');
			window.location.reload(); //sayfayı yenileyip activeUser's datasını alıyoruz
		});
	};
	return (
		<div className="container">
			<div className="row">
				<div className="col-lg-7 col-sm-9 col-md-7 col-xl-5 mx-auto">
					<div className="card card-signin flex-row my-5">
						<div className="card-body">
							<h5 className="card-title text-center">
                Kaydolun ve Öğrenmeye Başlayın!
							</h5>
							<hr />
							{error && (
								<div className="alert alert-danger js-error-alert">
									<div>
										<div>
                      Hesabınız oluştururken bir hata meydana geldi. Böyle bir
                      E-posta vardır.
										</div>
									</div>
								</div>
							)}
							<form className="form-signin" onSubmit={onSubmit}>
								<div className="form-label-group">
									<input
										type="text"
										id="inputUserame"
										className="form-control"
										placeholder="Kullanıcı Adı"
										required
										autoFocus
										value={UserName}
										onChange={(e) => setUserName(e.target.value)}
									/>
									<label htmlFor="inputUserame">Kullanıcı Adı</label>
								</div>
								<div className="form-label-group">
									<input
										type="email"
										id="inputEmail"
										className="form-control"
										placeholder="E-posta"
										required
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
									<label htmlFor="inputEmail">E-posta</label>
								</div>
								<div className="form-label-group">
									<input
										type="password"
										id="inputPassword"
										className="form-control"
										placeholder="Şifre"
										required
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>
									<label htmlFor="inputPassword">Şifre</label>
								</div>

								<div className="form-label-group">
									<input
										type="password"
										id="inputConfirmPassword"
										className="form-control"
										placeholder="Şifre Tekrar"
										required
										value={passwordRepeat}
										onChange={(e) => setPasswordRepeat(e.target.value)}
									/>
									<label htmlFor="inputConfirmPassword">Şifre Tekrar</label>
								</div>
								<button
									className="btn btn-lg btn-primary btn-block text-uppercase hovers"
									type="submit"
									disabled={loading || password !== passwordRepeat}
								>
									{loading ? <div>Yükleniyor...</div> : <div>Kaydol</div>}
								</button>
								<hr />
								<div className="loginbox-v4__footer">
                  Zaten bir hesabınız var mı?
									<Link
										className="sign-link"
										to="/Giris"
										data-purpose="login-link-signup-popup"
									>
                    Oturum Aç
									</Link>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
