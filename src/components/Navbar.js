import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import "../Style/header.css";
import Logout from "./Logout";

class LinksWithLogin extends Component {
  render() {
    const session = this.props.session;
    return (
      <div className="c_header__right-profile mr-2  mt-1">
        <NavLink to="/Notekle" className="c_header__profile-link mr-2">
          Not Ekle
        </NavLink>
        <NavLink to="/profil" className="c_header__profile-link  ">
          {session.activeUser.UserName}
        </NavLink>
        <Logout />
      </div>
    );
  }
}


class LinksWithUnLogin extends Component {
  render() {
    return (
      <Fragment>
        <div className="dropdown dropdown--login ud-component--header-v6--login-button hidden-xs hidden-xxs">
          <div>
            <NavLink
              to="/Giris"
              data-purpose="header-login"
              type="button"
              className="btn btn-quaternary"
            >
              Oturum Aç
            </NavLink>
          </div>
        </div>
        <div
          className="button dropdown dropdown--signup ud-component--header-v6--signup-button hidden-xs hidden-xxs"
          ng-non-bindable=""
        >
          <div>
            <NavLink
              to="/Kaydol"
              data-purpose="header-signup"
              type="button"
              className="btn btn-primary"
            >
              Kaydol
            </NavLink>
          </div>
        </div>
      </Fragment>
    );
  }
}
class Navbar extends Component {
  state = {
    isVisible: false,
  };
  Close = () => {
    this.setState({
      isVisible: false,
    });
  };
  onClick = () => {
    this.setState({
      isVisible: true,
    });
  };
  render() {
    const session = this.props.session;
    const isVisible = this.state.isVisible;
    return (
      <div className="c_header " id="sidebar">
        <div
          className="c_header__inner "
          aria-label="Ana navigasyon"
          role="navigation"
        >
          <div className="ud-component--header-v6--mobile-nav-trigger">
            <button
              className="c_header__mobile-bt btn btn-link"
              tpye="button"
              aria-hidden="true"
              onClick={this.onClick}
            >
              <span className="fas fa-bars" aria-hidden="true"></span>
            </button>
          </div>
          <div className="c_header__logo-container">
            <NavLink to="/" className="c_header__logo-wrap cd navbar-brand">
              Notlarım
            </NavLink>
          </div>
          <div className="c_header__left">
            <div className="c_header__left-links">
              <NavLink className="c_header__left-link" to="/Dersler">
                Dersler
              </NavLink>
            </div>
            <div className="c_header__left-links">
              <NavLink className="c_header__left-link ml-3 " to="/Notlar">
                Notlar
              </NavLink>
            </div>
            {
              session.activeUser ? 
              <div className="c_header__left-links">
                <NavLink className="c_header__left-link ml-3 " to="/Blog">
                  Blog
                </NavLink>
              </div>
              :null
            }
          </div>

          <div className="c_header__right">
            <div className="c_header__right-about">
              <NavLink to="/Hakkımızda" className="c_header__left-link mr-2">
                Hakkımızda
              </NavLink>
            </div>
            {session.activeUser ? (
              <LinksWithLogin session={session} />
            ) : (
              <LinksWithUnLogin />
            )}
          </div>
        </div>
        {isVisible ? (
          <div className="ud-component--header-v6--mobile-nav" id="sidebar">
            <div className="visible-xxs-block visible-xs-block nav-open">
              <div
                className="c_header__overlay overlay--mobile-show"
                data-purpose="mobile-nav-overlay"
                role="presentation"
              >
                <nav className="mobile-nav">
                  <div
                    className="btn btn-link btn-row"
                    style={{ float: "right" }}
                  >
                    <button
                      className="c_header__mobile-bt btn btn-link nav-btn"
                      type="button"
                      onClick={this.Close}
                    >
                      <span className="fas fa-times"></span>
                    </button>
                  </div>
                  <br />
                  <div className="mobil-nav__main" tabIndex="-1">
                    {session.activeUser ? (
                      <div className="c_header__right-profile pl-3 mb-3">
                        <NavLink
                          to="/profil"
                          className="c_header__profile-link  "
                        >
                          {session.activeUser.UserName}
                        </NavLink>
                        <Logout />
                      </div>
                    ) : (
                      <ul className="udlite-block-list mobile-nav--nav-section--Fc5GU">
                        <li>
                          <NavLink
                            to="/Giris"
                            className="udlite-heading-md mobile-nav--nav-item--1hfFJ udlite-block-list-item udlite-block-list-item-large udlite-text-md udlite-block-list-item-link"
                          >
                            <span className="N-block-content">
                              Oturum aç
                            </span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/Kaydol"
                            className="udlite-btn udlite-btn-large udlite-btn-ghost udlite-heading-md mobile-nav--nav-item--1hfFJ udlite-block-list-item udlite-block-list-item-large udlite-text-md udlite-block-list-item-link"
                          >
                            <span className="N-block-content">
                              Kaydol
                            </span>
                          </NavLink>
                        </li>
                      </ul>
                    )}<hr/>
                    <ul className="pb-space-sm">
                      <li className="menu__link menu__link-temporary-spacing">
                        <NavLink
                          to="/Dersler"
                          className="c_header__left-link"
                          tabIndex="0"
                          store="[object Object]"
                        >
                          Dersler
                        </NavLink>
                      </li>
                      <li className="menu__link menu__link-temporary-spacing">
                        <NavLink
                          to="/Notlar"
                          className="c_header__left-link"
                          tabIndex="0"
                        >
                          Notlar
                        </NavLink>
                      </li>
                      {
                        session.activeUser ? <li className="menu__link menu__link-temporary-spacing">
                          <NavLink
                            to="/Notekle"
                            className="c_header__left-link"
                            tabIndex="0"
                          >
                            Not Ekle
                          </NavLink>  
                        </li>:null
                      }
                      <li className="menu__link menu__link-temporary-spacing">
                        <NavLink
                          to="/Hakkımızda"
                          className="c_header__left-link"
                          tabIndex="0"
                        >
                          Hakkımızda
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Navbar;
