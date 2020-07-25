import React, { Component, Fragment } from 'react';

import Home from "./Pages/Home";
import Dersler from "./Pages/Dersler";
import Notlar from "./Pages/Notlar";
import Biyoloji from "./Dersler/Biyoloji";
import Kimya from "./Dersler/Kimya";
import Edebiyat from "./Dersler/Edebiyat";
import Inglizce from "./Dersler/İnglizce";
import Fizik from "./Dersler/Fizik";
import Matematik from "./Dersler/Matematik";
import Hakkımız from "./Pages/Hakkımız";
import Profil from "./Pages/profile";
import Login from "./Pages/Login";
import SigIn from "./Pages/SignIn";
import AddNote from "./Pages/AddNotes";

import sessionWrapperHOC from './components/SessionWrapperHOC';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import {
  BrowserRouter as Router ,
  Route,
  Switch,
} from "react-router-dom";
import PageNotFound from './Pages/404page';

const Root = ({ session, refetch }) => (
  <Router>
    <Fragment>
      <Navbar session={session} />
      <Switch>
        <Route exact path='/'  render={ () => <Home session={session} />} />
        <Route exact path='/Dersler'  render={ () => <Dersler session={session} />} />
        <Route exact path='/Notlar'  render={ () => <Notlar  />} />
        <Route exact path='/Biyoloji'  render={ () => <Biyoloji  />}/>
        <Route exact path='/Kimya'  render={ () => <Kimya  />}/>
        <Route exact path='/Edebiyat'  render={ () => <Edebiyat  />} />
        <Route exact path='/İngilizce'  render={ () => <Inglizce  />} />
        <Route exact path='/Matematik'  render={ () => <Matematik  />}/>
        <Route exact path='/Fizik'  render={ () => <Fizik  />} />
        <Route exact path='/Hakkımızda'  render={ () => <Hakkımız  />} />
        <Route exact path='/Profil'  render={ () => <Profil session={session} refetch={refetch} />} />
        <Route exact path='/Notekle'  render={ () => <AddNote session={session}  />} />
        <Route exact path='/Kaydol' render={ () => <SigIn /> } />
        <Route exact path='/Giris'  render={ () => <Login /> } />
        <PageNotFound />
      </Switch>
      <Footer />
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
