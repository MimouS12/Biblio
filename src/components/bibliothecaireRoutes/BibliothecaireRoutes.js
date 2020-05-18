import React from "react"
// import "./App.css"
import ListeAdherents from "../gestionAdherents/listeAdherents/ListeAd"



import {
 
  Switch,
  Route,
  Redirect,
  useRouteMatch
} from "react-router-dom"
import AdherentDetails from "../gestionAdherents/adherentProfil/AdherentProfil"
import AdminLayout from "./bibliothecaireLayout/BibliothecaireLayout"

function BibliothecaireRoutes() {
    let { path } = useRouteMatch()
  return (
    <div className="Biblio-routes">
  
      {/* <Router> */}
      <AdminLayout>
        <Switch>
          <Route exact path={`${path}/`}>
            <Redirect to={`${path}/`} />
          </Route>
          <Route exact path={`${path}/AdminMenu`}>
          <Redirect to={`${path}/`} />
          </Route>

          <Route exact path={`${path}/ListeAdherents`}>
            <ListeAdherents />
          </Route>
        

         <Route  path={`${path}/ListeAdherents/:adherentId`}>
            <AdherentDetails />
          </Route> 

          <Route exact path={`${path}/`}>
          <Redirect to={`${path}/AdminMenu`} />
          </Route>
        </Switch>
      </AdminLayout>

      {/* </Router> */}
    </div>
  )
}

export default BibliothecaireRoutes