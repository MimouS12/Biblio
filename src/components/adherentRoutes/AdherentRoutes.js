import React from "react"




import {
 
  Switch,
  Route,
  Redirect,
  useRouteMatch
} from "react-router-dom"
import AdherentLayout from "./adherentLayout/AdherentLayout"
import ListeLivres from "../gestionLivres/listeLivres/ListeLivres"
import AdherentProfil from "../gestionAdherents/adherentProfil/AdherentProfil"
import LivreDetails from "../gestionLivres/livreDetails/LivreDetails"
import Home from "../home/Home"


function AdherentRoutes() {
    let { path } = useRouteMatch()
  return (
    <div className="Biblio-routes">
  
      {/* <Router> */}
      <AdherentLayout>
        <Switch>
          <Route exact path={`${path}/`}>
            <Redirect to={`${path}/`} />
          </Route>
          <Route exact path={`${path}/memberPage`}>
          <Redirect to={`${path}/`} />
          </Route>

          <Route exact path={`${path}/`}>
          <Redirect to={`${path}/memberPage`} />
          </Route>
          <Route exact path={`${path}/listelivres`}>
            <ListeLivres/>
          </Route>
         
          <Route  path={`${path}/listelivres/:livreId`}>
            <LivreDetails />
          </Route> 
          <Route exact path={`${path}/home`}>
          <Home/>
          </Route>
          <Route path={`${path}/:adherentId`}>
            <AdherentProfil/>
          </Route> 

         
        </Switch>
      </AdherentLayout>

      {/* </Router> */}
    </div>
  )
}

export default AdherentRoutes 
