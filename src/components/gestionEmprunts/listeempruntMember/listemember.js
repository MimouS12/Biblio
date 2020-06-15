import React, {useState,useEffect} from "react"
//, { useState, useEffect }
// useCallback,
import { useHistory /*, Redirect*/, useRouteMatch } from "react-router-dom"
import { Link } from 'react-router-dom'
//import adherentPage from "./adherentPage/adherentPage"
import Emprunt from "../Emprunts/Emprunts"
//import {fetchAdherentById} from "../../../services/adherents.service"
import { fetchAdherentById } from "../../../services/adherents.service"
import { useParams } from "react-router-dom"

function ListeEmpruntmem () {
  let { path } = useRouteMatch()
  const [adherent, setAdherent] = useState({})
  // var emprunts = JSON.parse(localStorage.getItem("emprunts") ||"[]");

  let emprunts = JSON.parse(localStorage.getItem('emprunts'))
 // var  empreta=emprunts.filter(emprunt => emprunt.etat==="encours")
  //console.log(d1) 
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
//var dateret='dateret'
//et="retard"
//console.log(et)
emprunt.etat ="retard"
console.log(emprunt.etat )
      //emprunt[dateret] = ( emprunt[dateret]+1)
/*       let keys = Object.keys(emprunt);
console.log('Keys ', keys);
let vals = Object.values(emprunt);
console.log('Vals', vals); */
      //emprunt .push(dateret)
     }  
    // console.log(emprunt)
    /*  emprunt.push( diffDays2);
     console.log(diffDays2) */
  });
 
  const { adherentId } = useParams()
  console.log("useParams():",useParams());
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
  }, [adherentId])


 /*  const result =  fetchAdherentById()
 // console.log(adherentId)
  console.log(result ) */
  var Empadh= emprunts.filter(item => item["idUser"]===adherentId);
  console.log(Empadh)
  //console.log(emprunt. idUser)
  emprunts.forEach(function(emprunt) {
    console.log( emprunt.idUser);

    var d1 =  (emprunt. Usernom)
   // if ( emprunt.idUser)
    });
  /*  let userAd = JSON.parse(localStorage.getItem('user'))
   
      var id = userAd["id"]
      var nom = userAd["nom"]+" "+userAd["prenom"]
      var Empmem= emprunts.filter(item => item["idUser"]===id );
 */
  
  return (
    
    <div className="adherents-list">
              <h1>Liste des livres empruntés  </h1>
      <div> <table className="entete-tab">
      <tr>
        <th>Libellé  </th>
        <th>Adhérent ID</th>
        <th>Adhérent nom</th>
        <th>date emprunt</th>
        </tr>
      </table>
      </div>
      
    <div>
      {Empmem.map(emprunt=> {
     
 
         return <Emprunt
         
         
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

export default ListeEmpruntmem