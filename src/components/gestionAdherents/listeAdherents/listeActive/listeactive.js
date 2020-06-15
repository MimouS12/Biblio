import React, { useState, useEffect } from "react"
// useCallback,
import {fetchadherentsActive,fetchadherents } from '../../../../services/adherents.service'
//import {updateAdherent   } from '../../../../services/adherents.service'

import Adherent from "../../adherent/Adherent"
import "./listeactive.css"
function ListeActive() {
  const [activeadherents, setActiveAdherents] = useState([])
  const [searchValue, setSearchValue] = useState("")



   useEffect(() => {
     const fetchData =  () => {
       const result =  fetchadherentsActive()
       setActiveAdherents(result)
     }
     console.log("useEffect")

     fetchData()
   }, [])
     
   useEffect(() => {
    let didCancel = false
    const fetchData = async () => {
        const result = await fetchadherents(searchValue)
        console.log("result: ", didCancel)
        if (!didCancel) {
          setActiveAdherents(result)
        }

      
    }
    // console.log("useEffect:", searchValue)
    fetchData()

    return () => {
      console.log("cleanup: ", searchValue)
      didCancel = true
    }

  }, [searchValue])


   const updateAdherent = (id, nom, prenom,cin) => {
    const newadherents = activeadherents.map( adherent =>
      adherent.id === id ? {nom, prenom,cin } : adherent
    )
    setActiveAdherents(newadherents)
  }
  const deleteMember= id => {
    const newadherents  = activeadherents.filter( adherent=>   adherent.id !== id)
    setActiveAdherents(newadherents)
  }

  
  
  return (
   
      <div className="adherents-list" >

      <h1  className="Titre">Liste des Adhérents Actifs</h1>

      <div className="search">
          <input
            type="search"
            name="search"
            placeholder=" nom/ prénom"
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
          />
        </div>

      <div> <table  className="entete-tab">   
      <tr   >
        <th>Firstname</th>
     
        <th>Lastname</th>
        
        <th>Cin</th>
      
        <th></th>
      </tr>
      </table>
     
      </div>
 
    <div>
      {activeadherents.map(adherent => {

         return <Adherent
         key={adherent.id}
         id={adherent.id}
         cin={adherent.cin}
         nom={adherent.nom}
         prenom={adherent.prenom}
         dateNaissance={adherent.dateNaissance} 
                     liste="active"
                     updateAdherent ={updateAdherent }
                     deleteMember={deleteMember}
                />

      })}
    </div>
    </div>
  )}

export default ListeActive
