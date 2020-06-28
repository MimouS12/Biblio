import React from "react"
import Emprunt from "../../Emprunts/Emprunts"
import { Empty } from 'antd';

import "./listeencours.css"

function Listencours () {

  let emprunts = JSON.parse(localStorage.getItem('emprunts'))

  var  empEncours=emprunts.filter(emprunt => emprunt.etat==="encours")


  return (
    
    <div className="adherents-list">
       <h1 className="titre3">Liste des emprunts en cours</h1>
      {empEncours.length!==0 ?(
                <>
                      <div> <table className="entete-tab">
        <tbody>
      <tr>
        <th>Libellé  </th>
  
        <th>Adhérent </th>
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