import React from "react"
//import { Link, NavLink, useRouteMatch } from "react-router-dom"
import './BibliothecaireMenu.css'
function BibliothecaireMenu({children}) {
   // let { path } = useRouteMatch()

  return (
    <ul>
      <li>
        {/* <NavLink to={`${path}/courses`} activeClassName="active">
          My courses
        </NavLink> */}
        {children}
        this is admin Bibliothécaire Menu 
      </li>
    </ul>
  )
}

export default BibliothecaireMenu