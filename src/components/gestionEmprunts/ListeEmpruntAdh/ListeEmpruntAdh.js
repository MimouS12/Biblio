import React, {useState,useEffect} from "react"
//, { useState, useEffect }
// useCallback,
import { useHistory /*, Redirect*/, useRouteMatch } from "react-router-dom"
import { Link } from 'react-router-dom'
//import adherentPage from "./adherentPage/adherentPage"
import Emprunt from "../Emprunts/Emprunts"
import "./ListeEmpruntAdh.css"
//import {fetchAdherentById} from "../../../services/adherents.service"
import { fetchAdherentById } from "../../../services/adherents.service"
import { useParams } from "react-router-dom"

function ListeEmpruntAdh () {
  let { path } = useRouteMatch()
  const [adherent, setAdherent] = useState({})

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
  
  const { adherentId } = useParams()
  /* console.log("useParams():",useParams());
  console.log(adherentId)
  useEffect(() => {
    const fetchData = async () => {
     // setLoading(true)
      const result =  fetchAdherentById(adherentId)
        setAdherent(result)
        //console.log(result )
        console.log(adherentId)
       // setLoading(false)

    }
    fetchData()
  }, [adherentId]) */



  var Empadh= emprunts.filter(item => item["idUser"]===adherentId );
  console.log(Empadh)
 

   
  
  return (
    
    <div className="adherents-list">
              <h1 className="titre8">Liste des livres empruntés  </h1>
      <div> <table className="entete-tab">
      <tr>
        <th>Libellé </th>
        <th>Adhérent</th>
       
        <th>Date emprunt</th>
        </tr>
      </table>
      </div>
      
    <div>
      {Empadh.map(emprunt=> {
     
 
         return <Emprunt
         
          /* // <Link to={`${path}/${task
          .id}`}>
        // <div onClick={() => handleClick(task.id)}>  */
            key={emprunt.idLivre}
            idLivre={emprunt.idLivre}
            idEmp={emprunt. idEmp}
            titreLivre={emprunt.titreLivre} 
           idUser={emprunt. idUser}
            Usernom={emprunt. Usernom}
            dateEmp={emprunt. dateEmp}
           
          
          />
        // </div> 
        // </Link>
      })}
    </div>
  </div>
)
}

export default ListeEmpruntAdh