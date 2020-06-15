import React,{ useEffect, useState } from "react"
//, { useState, useEffect }
// useCallback,
import { useParams } from "react-router-dom"
//import { fetchempruntsByIduser } from "../../../services/adherents.service"
//import adherentPage from "./adherentPage/adherentPage"
import Emprunt from "../Emprunts/Emprunts"


function ListeEmprunts () {
 
  // var emprunts = JSON.parse(localStorage.getItem("emprunts") ||"[]");
  //const [emprunts,  setEmprunts] = useState({})
 
  const [loading, setLoading] = useState(false)
// const { EmpruntId} = useParams();
let emprunts = JSON.parse(localStorage.getItem('emprunts'))
  /* useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const result =  fetchempruntsByIduser(EmpruntId)
      setEmprunts(result)
        setLoading(false)

    }
    fetchData()
  }, [EmpruntId]) */
   /*  var empreta = []*/
 /*   if(( emprunt. dateRetour-emprunt.dateEmp) >15)
   {
    liste="retard"

} */
 /*empreta= emprunts.filter(emprunt => (emprunt. dateRetour-emprunt.dateEmp) >15)
    console.log(emprunts)
   */
  
  return (
    
    <div className="adherents-list">
              <h1>Liste des emprunts</h1>
      <div> <table className="entete-tab">
      <tr>
        <th>Libellé  </th>
        <th>Adhérent ID</th>
        <th>Adhérent nom</th>
        
        </tr>
      </table>
      </div>
      
    <div>
      {emprunts.map(emprunt=> {
      
 
         return <Emprunt
          /* // <Link to={`${path}/${task.id}`}>
        // <div onClick={() => handleClick(task.id)}>  */
        key={emprunt.idLivre}
        idLivre={emprunt.idLivre}
        idEmp={emprunt. idEmp}
        titreLivre={emprunt.titreLivre} 
        idUser={emprunt. idUser}
        Usernom={emprunt. Usernom}
     
         
           
          
          />
        // </div> 
        // </Link>
      })}
    </div>
  </div>
)
}

export default ListeEmprunts