import React from "react"
import Emprunt from "../../Emprunts/Emprunts"
import {fetchListeEnCours} from "../../../../services/emprunts.service"
import { Empty } from 'antd';

import "./listeencours.css"

function Listencours () {

  let emprunts = JSON.parse(localStorage.getItem('emprunts'))
  
  var  empEncours=fetchListeEnCours(emprunts)


  return (
    
    <div className="adherents-list">
       <h1 className="titre3">Liste des emprunts en cours</h1>
       
      {empEncours.length!==0 ?(
                <>
      <div> <table className="entete-tab">
        <tbody>
      <tr>
        <th>Libelle </th>
        <th></th>        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>

        <th>Adherent </th>
        <th>date emprunt</th>
        </tr>
        </tbody>
      </table>
      </div>
      
    <div>
      {empEncours.map((emprunt,index)=> {
     
 
         return <Emprunt
         
         
            key={index}
            idLivre={emprunt.idLivre}
            idEmp={emprunt.idEmp}
            titreLivre={emprunt.titreLivre} 
           // idUser={emprunt. idUser}
            Usernom={emprunt.Usernom}
            dateEmp={emprunt.dateEmp}
           
          
          />
        // </div> 
        // </Link>
      })}
    </div>
                
                </>
              ):(
                <Empty description="il n'y pas des emprunts en cours maitenant :) " />
              )}
 </div>
)
}

export default Listencours 