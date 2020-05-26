import React, { useState, useEffect } from "react"
// useCallback,
import "./ListeAd.css"

//import adherentPage from "./adherentPage/adherentPage"
import {fetchadherents } from '../../../services/adherents.service'
import Adherent from "../adherent/Adherent"

function ListeAdherents() {
  const [adherents, setadherents] = useState([])
  //const [loading, setLoading] = useState(false)
 //const [searchValue, setSearchValue] = useState("")

 // const [isVisible, setIsVisible] = useState(true)

   useEffect(() => {
     const fetchData = async () => {
       //setLoading(true)
       const result = await fetchadherents ()
       setadherents(result)
       //setLoading(false)
     }
     console.log("useEffect")

     fetchData()
   }, [])



  
  
  return (
    
    <div className="adherents-list">
      <h1>Liste d'adherents</h1>
      <div> <table className="entete-tab">

      <tr >
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Cin</th>
        <th></th>
      </tr>
      </table>
      </div>
      
    {/* {taskId!=="" && <Redirect to={`/tasks/${taskId}`} />} */}
    <div>
      {adherents.map(adherent => {
        // <Link to={`${path}/${task.id}`}>
        // <div onClick={() => handleClick(task.id)}> 
         return <Adherent
        
             key={adherent.id}
            id={adherent.id}
            cin={adherent.cin}
            nom={adherent.nom}
            prenom={adherent.prenom}
            dateNaissance={adherent.dateNaissance} 
          />
        // </div> 
        // </Link>
      })}
    </div>
  </div>
)
}

export default ListeAdherents

