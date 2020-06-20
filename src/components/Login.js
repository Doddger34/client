import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { SıgınUser, GET_USER } from "../queries/index";
import { useHistory } from "react-router";
import { Link } from 'react-router-dom';
import '../Style/Login.css';

const Login = () =>  {
  const [ signIn , { loading, error }] = useMutation(SıgınUser);
  const [ password, setPassword ] = useState("");
  const [ UserName, setUserName ] = useState("");
  let history = useHistory();
  const onSubmit = e => {
    e.preventDefault();
    signIn({
      variables: { UserName, password },
      refetchQueries: { query: GET_USER }
    }).then(({ data }) => {
      localStorage.setItem('token', data.signIn.token);
      history.push('/');
      window.location.reload(); //sayfayı yenileyip activeUser's datasını alıyoruz
    });
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin mt-5">
              <div className="card-body">
                <h5 className="card-title text-center">Oturum Aç</h5>
                <hr/>
                {
                  error && <div className="alert alert-danger js-error-alert">
                    <div>
                      <div>
                        Oturum açılırken bir sorun oluştu. Kullanıcı adınızı adresinizi ve şifrenizi kontrol edin veya bir
                        hesap oluşturun.
                      </div>
                    </div>
                  </div>
                }
                <form className="form-signin" onSubmit={onSubmit}>
                  <div className="form-label-group">
                    <input
                        type="text"
                        id="inputUserName"
                        className="form-control"
                        placeholder="Kullanıcı Adı"
                        required
                        onChange={ e => setUserName(e.target.value) }
                        value={UserName}
                    />
                    <label htmlFor="inputUserName">Kullanıcı Adı</label>
                  </div>

                  <div className="form-label-group">
                    <input
                        type="password"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Şifre"
                        required
                        onChange={ e => setPassword(e.target.value) }
                        value={password}
                    />
                      <label htmlFor="inputPassword">Şifre</label>
                  </div>
                  <button
                      className="btn btn-lg btn-primary btn-block text-uppercase "
                      type="submit"
                      disabled={ loading }
                  >
                    {
                      loading ? <div>Yükleniyor...</div> : <div>Oturum Aç</div>
                    }
                  </button>
                  <hr />
                  <div className="loginbox-v4__footer">
                    Hesabınız yok mu?
                    <Link
                        className="sign-link"
                        to="/Kaydol"
                        data-purpose="login-link-signup-popup"
                    >
                      Kaydol
                    </Link>
                  </div>
                  </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
