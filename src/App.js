import React from 'react';

import Login from './components/forms/loginForm/Login';
import Inscription from './components/forms/inscriptionForm/Inscription';
import ListeLivres from './components/gestionLivres/listeLivres/ListeLivres';
import LivreDetails from './components/gestionLivres/livreDetails/LivreDetails';
import ListeAd from './components/gestionAdherents/listeAdherents/ListeAd';
import AdherentProfil from './components/gestionAdherents/adherentProfil/AdherentProfil';
import BibliothecaireMenu from './components/bibliothecaireRoutes/bibliothecaireMenu/BibliothecaireMenu'
import AdherentMenu from './components/adherentRoutes/adherentMenu/AdherentMenu'
import { Layout } from 'antd';


import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect } from "react-router-dom";
//const { Header, Content, Footer } = Layout;

function App() {

  return (
    <div className="App">
        <Layout >

        <div className="logo" > 
             <img src='book_tracker.png' alt='logo Biblio' className="logoB"/> 
             <div className="titres">
              <div className="nomBiblio"> INMA</div> 
              <div className="sloganBiblio">votre bibliothèque électronique</div>
              </div>
            </div> 
            
    </Layout>
    
    <Router>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
        <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/inscrit">
            <Inscription />
          </Route>
          <Route exact path="/books">
            <ListeLivres/>
          </Route>
          <Route exact path="/AdminMenu">
            <BibliothecaireMenu/>
          </Route>
          <Route exact path="/MemberMenu">
            <AdherentMenu/>
          </Route>
          <Route exact path="/books/:bookId">
            <LivreDetails />
          </Route>
          <Route exact path="/listeAd">
            <ListeAd/>
          </Route>
          <Route exact path="/books/:adProfil">
            <AdherentProfil />
          </Route>

         
        </Switch>
      </Router>

    </div>
  );
}

export default App;
