import React, { Component, Fragment } from 'react';

import Home from "./Pages/Home";
import Dersler from "./Pages/Dersler";
import Notlar from "./Pages/Notlar";
import Biyoloji from "./Dersler/Biyoloji";
import Kimya from "./Dersler/Kimya";
import Edebiyat from "./Dersler/Edebiyat";
import Inglizce from "./Dersler/İnglizce";
import Inglizce from "./Dersler/tyt.js";
import Fizik from "./Dersler/Fizik";
import Felsefe from "./Dersler/Felsefe";
import Dın from "./Dersler/Din";
import Cografya from "./Dersler/Cografya";
import Tarih from "./Dersler/Tarih";
import Matematik from "./Dersler/Matematik";
import Hakkımız from "./Pages/Hakkımız";
import Profil from "./Pages/profile";
import Login from "./Pages/Login";
import SigIn from "./Pages/SignIn";
import AddNote from "./Pages/AddNotes";
import Dev from "./Pages/Dev";
import Blog from './Pages/Blog';

import sessionWrapperHOC from './components/User/SessionWrapperHOC';
import Navbar from "./components/container/Navbar";
import Footer from "./components/container/Footer";

import {
  BrowserRouter as Router ,
  Route,
  Switch,
} from "react-router-dom";
import PageNotFound from './Pages/404page';

const Root = props => (
  <Router>
    <Fragment>
      <Navbar session={props.session} />
      <Switch>
        <Route exact path='/'  render={ () => <Home session={props.session} />} />
        <Route exact path='/Dersler'  render={ () => <Dersler session={props.session} />} />
        <Route exact path='/Notlar'  render={ () => <Notlar  />} />
        <Route exact path='/Biyoloji'  render={ () => <Biyoloji  />}/>
        <Route exact path='/Felsefe'  render={ () => <Felsefe  />}/>
        <Route exact path='/Tarih'  render={ () => <Tarih  />}/>
        <Route exact path='/Din Kültürü'  render={ () => <Dın  />}/>
        <Route exact path='/Coğrafya'  render={ () => <Cografya  />}/>
        <Route exact path='/Kimya'  render={ () => <Kimya  />}/>
        <Route exact path='/Edebiyat'  render={ () => <Edebiyat  />} />
        <Route exact path='/İngilizce'  render={ () => <tyt/>} />
        <Route exact path='/İngilizce'  render={ () => <Inglizce  />} />  
        <Route exact path='/Matematik'  render={ () => <Matematik  />}/>
        <Route exact path='/Fizik'  render={ () => <Fizik  />} />
        <Route exact path='/Hakkımızda'  render={ () => <Hakkımız  />} />
        <Route exact path='/Profil'  render={ () => <Profil session={props.session} refetch={props.refetch} />} />
        <Route exact path='/Notekle'  render={ () => <AddNote session={props.session}  />} />
        <Route exact path='/Kaydol' render={ () => <SigIn refetch={props.refetch} /> } />
        <Route exact path='/Giris'  render={ () => <Login refetch={props.refetch} /> } />
        <Route exact path='/Dev'  render={ () => <Dev /> } />
        <Route exact path='/Blog'  render={ () => <Blog session={props.session} /> } />
        <PageNotFound />
      </Switch>
      <Footer session = {props.session} />
    </Fragment>
  </Router>
);

const RootWithSessionWrapper = sessionWrapperHOC(Root);

class App extends Component{
  render(){
    return(
      <div>
        <RootWithSessionWrapper />
      </div>
    )
  }
}

export default App;
