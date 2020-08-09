import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Style/Footer.css";
class Footer extends Component {
   render() {
     const session = this.props.session;
    return (
      <footer className="page-footer font-small stylish-color-dark pt-4 F_footer">
        <div className="container text-center text-md-left">
          <div className="row">
            <div className="col-md-4 mx-auto text-justify">
              <p>
                Notlarm.com olarak öğrencilerin sınav notlarını yükseltmek için
                öğrencilerin kendi elleri ile yazmış oluduğu notları sizin
                huzurunuza sunmak için elimizden geleni yapıyoruz.
              </p>
            </div>
            {
              session.activeUser ? null:<div className="clearfix w-100 d-md-none"> 
              <hr className="clearfix w-100 d-md-none" /> <button className="clearfix d-md-none btn btn btn-outline-secondary m-auto">
              <Link to="/Kaydol" style={{textDecoration:"none"}}>Oturum aç / Kaydol</Link>
            </button>
              </div>
            }  
          </div>
        </div>
        <hr />
        <ul className="list-unstyled list-inline text-center">
          <li className="list-inline-item">
            <Link to="#" className="btn-floating btn-fb mx-1">
              <i className="fab fa-facebook-f" aria-hidden="true">
                {" "}
              </i>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#" className="btn-floating btn-tw mx-1">
              <i className="fab fa-twitter" aria-hidden="true"></i>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#" className="btn-floating btn-gplus mx-1">
              <i className="fab fa-google-plus-g" aria-hidden="true">
                {" "}
              </i>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#" className="btn-floating btn-li mx-1">
              <i className="fab fa-linkedin-in" aria-hidden="true"></i>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#" className="btn-floating btn-dribbble mx-1">
              <i className="fab fa-dribbble" aria-hidden="true"></i>
            </Link>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
