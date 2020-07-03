import React from "react"
import Emprunt from "../../Emprunts/Emprunts"
import { Empty } from 'antd';
import {fetchListeRetard}from "../../../../services/emprunts.service"

import "./listeretard.css"

function Listeretard () {


  var  empretard=fetchListeRetard()

 
 
  return (
    
    <div className="adherents-list">
        <h1 className="titre4">Liste des emprunts en retard</h1>
        {empretard.length!==0 ?(
          <>
          
      <div> <table className="entete-tab">
        <tbody>
      <tr>
        <th>Libellé  </th>
        <th>Adhérent </th>
        <th>date emprunt</th>
        <th>date Retour</th>
        </tr>
        </tbody>
      </table>
      </div>
      
    <div>
      { empretard.map((emprunt,index)=> {
     
 
         return <Emprunt
         
        
            key={index}
            idLivre={emprunt.idLivre}
            idEmp={emprunt.idEmp}
            titreLivre={emprunt.titreLivre} 
         // idUser={emprunt. idUser}
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
          <Empty description="il n'y pas des emprunts en retard maitenant :) " />

        )}
 </div>
)
}

export default Listeretard