import React from "react"
// import "./App.css"
import ListeAdherents from "../gestionAdherents/listeAdherents/ListeAd"
import ListeDemande from "../gestionAdherents/listeDemandeAdhesion/ListeDemande"
import ListeLivres from "../gestionLivres/listeLivres/ListeLivres"
import LivreDetails from "../gestionLivres/livreDetails/LivreDetails"

import ListeEmpruntAdh from "../gestionEmprunts/ListeEmpruntAdh/ListeEmpruntAdh"
import ListeEmprunts from "../gestionEmprunts/listeEmprunts/listeEmprunts"

import {
 
  Switch,
  Route,
  Redirect,
  useRouteMatch
} from "react-router-dom"
import AdherentProfil from "../gestionAdherents/adherentProfil/AdherentProfil"
import BibliothecaireLayout from "./bibliothecaireLayout/BibliothecaireLayout"

function BibliothecaireRoutes() {
    let { path } = useRouteMatch()
  return (
    <div className="Biblio-routes">
  
      {/* <Router> */}
      <BibliothecaireLayout>
        <Switch>
          <Route exact path={`${path}/`}>
            <Redirect to={`${path}/`} />
          </Route>
          <Route exact path={`${path}/adminPage`}>
          <Redirect to={`${path}/`} />
          </Route>

          <Route exact path={`${path}/ListeAdherents`}>
            <ListeAdherents/>
          </Route>
          <Route  path={`${path}/emprunts/:adherentId`}>
            <ListeEmpruntAdh />
          </Route> 
          <Route exact path={`${path}/listelivres`}>
            <ListeLivres/>
          </Route>
         
          <Route  path={`${path}/listelivres/:livreId`}>
            <LivreDetails />
          </Route> 
          <Route exact path={`${path}/ListeAdherents/:adherentId`}>
            <AdherentProfil/>
          </Route>
        
          <Route exact path={`${path}/demandes`}>
            <ListeDemande/>
          </Route>
          <Route exact path={`${path}/emprunts`}>
            <ListeEmprunts/>
          </Route>
          <Route exact path={`${path}/home`}>
            <ListeDemande/>
          </Route>
          <Route exact path={`${path}/`}>
          <Redirect to={`${path}/adminPage`} />
          </Route>
        </Switch>
      </BibliothecaireLayout>

      {/* </Router> */}
    </div>
  )
}

export default BibliothecaireRoutes 
