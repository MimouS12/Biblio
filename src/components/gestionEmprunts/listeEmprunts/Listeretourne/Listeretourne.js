import React from "react"
//, { useState, useEffect }
// useCallback,
//import { /*useHistory , Redirect,*/ useRouteMatch } from "react-router-dom"
//import { Link } from 'react-router-dom'
//import adherentPage from "./adherentPage/adherentPage"
import Emprunt from "../../Emprunts/Emprunts"
import { Empty } from 'antd';
import {fetchListeRetourne} from "../../../../services/emprunts.service"

import "./listeretourne.css"


function Listeretournes() {

  var  empretr=fetchListeRetourne()
 
  return (
    
    <div className="adherents-list">
        <h1 className="titre5">Liste des emprunts retournés </h1>
        {empretr.length!==0 ?(
           <>
              <div> <table className="entete-tab">
<tbody>
<tr>
<th>Libellé  </th>
<th>Adhérent </th>
<th>Date Emprunt</th>
<th>Date Retour</th>
</tr>
</tbody>
</table>
</div>

              <div>
{ empretr.map((emprunt,index)=> {


 return <Emprunt
 

    key={index}
    idLivre={emprunt.idLivre}
    idEmp={emprunt.idEmp}
    titreLivre={emprunt.titreLivre} 
    //idUser={emprunt. idUser}
    Usernom={emprunt.Usernom}
    dateEmp={emprunt.dateEmp}
    dateRetour={emprunt.dateRetour}
 
  
  />
// </div> 
// </Link>
})}
</div>
</>
        ):(
          <Empty description="il n'y pas des emprunts retournés maitenant :) " />
        )}

  </div>
)
}

export default Listeretournes