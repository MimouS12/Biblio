import React from "react"
//, { useState, useEffect }
// useCallback,
import { useHistory /*, Redirect*/, useRouteMatch } from "react-router-dom"
import { Link } from 'react-router-dom'
//import adherentPage from "./adherentPage/adherentPage"
import Emprunt from "../../Emprunts/Emprunts"
import "./listeretourne.css"


function Listeretournes() {
  let { path } = useRouteMatch()
  // var emprunts = JSON.parse(localStorage.getItem("emprunts") ||"[]");

  let emprunts = JSON.parse(localStorage.getItem('emprunts'))
  

  emprunts.forEach(function(emprunt) {
    console.log( emprunt.dateEmp);
     var d1 =  (emprunt.dateEmp )
     //var et = (emprunt.etat)
     console.log(emprunt.etat)
     console.log(d1)
     var datemp= new Date (d1)
     console.log(datemp)
     var d2 =  (emprunt.dateRetour)
     console.log(d2)
     var datret= new Date (d2)
     console.log(datret)
     const diffTime = Math.abs(datret -datemp);
const diffDays1 = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    // var diffDays1 =datret.getDate() - datemp.getDate(); 
     console.log(diffDays1)
    var datetoday= new Date().toJSON().slice(0,10).replace(/-/g,'/')
    console.log(datetoday)
    var dattdy= new Date (datetoday)
    const diffTime2 = Math.abs(dattdy-datemp);
    const diffDays2 = Math.ceil(diffTime2 / (1000 * 60 * 60 * 24)); 
    //var diffDays2 =datemp.getDate() -dattdy.getDate(); 

    console.log(diffDays2)
   
     if(diffDays2>15||diffDays1>15){

emprunt.etat ="retard"
console.log(emprunt.etat )
  
     }  
 
  });
  var  empretr=emprunts.filter(emprunt => emprunt.etat==="retourné")
 
  return (
    
    <div className="adherents-list">
              <h1 className="titre5">Liste des emprunts retournés </h1>
      <div> <table className="entete-tab">
      <tr>
        <th>Libellé  </th>
        <th>Adhérent </th>
        <th>Date Emprunt</th>
        <th>Date Retour</th>
        </tr>
      </table>
      </div>
      
    <div>
      { empretr.map(emprunt=> {
     
 
         return <Emprunt
         
      
            key={emprunt.idLivre}
            idLivre={emprunt.idLivre}
            idEmp={emprunt. idEmp}
            titreLivre={emprunt.titreLivre} 
            //idUser={emprunt. idUser}
            Usernom={emprunt. Usernom}
            dateEmp={emprunt. dateEmp}
            dateRetour={emprunt.dateRetour}
         
          
          />
        // </div> 
        // </Link>
      })}
    </div>
  </div>
)
}

export default Listeretournes