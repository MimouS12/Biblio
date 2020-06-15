import React, { useState, useEffect } from "react"
// useCallback,

import {fetchadherentsBanni } from '../../../../services/adherents.service'
import Adherent from "../../adherent/Adherent"
import "./listebanni.css"
function ListeBanni() {
  const [banniAdherents, setBanniAdherents] = useState([])
  //const [loading, setLoading] = useState(false)
 //const [searchValue, setSearchValue] = useState("")

 // const [isVisible, setIsVisible] = useState(true)

   useEffect(() => {
     const fetchData =  () => {
       //setLoading(true)
       const result =  fetchadherentsBanni()
       setBanniAdherents(result)
       //setLoading(false)
     }
     console.log("useEffect")

     fetchData()
   }, [])



   const updateAdherent = (id, nom, prenom,cin) => {
    const newadherents = banniAdherents.map( adherent =>
      adherent.id === id ? {nom, prenom,cin } : adherent
    )
    setBanniAdherents(newadherents)
  }
  const deleteMember= id => {
    const newadherents  = banniAdherents.filter( adherent=>   adherent.id !== id)
    setBanniAdherents(newadherents)
  }
  
  return (
    
    <div className="adherents-list" >
      <h1  className="Titre">Liste des Adhérents Bannis </h1>
      <div> <table  className="entete-tab">

      
      <tr >
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Cin</th>
        <th></th>
      </tr>
      </table>
      </div>
      
  
    <div>
      {banniAdherents.map(adherent => {
         return  <Adherent
         key={adherent.id}
            id={adherent.id}
            cin={adherent.cin}
            nom={adherent.nom}
            prenom={adherent.prenom}
            dateNaissance={adherent.dateNaissance} 
            liste="Banni"
            updateAdherent={updateAdherent}
            deleteMember={deleteMember}
     />
        
      })}
    </div>
  </div>
)
}

export default  ListeBanni