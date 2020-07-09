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
        <br/>
        
        {activeadherents.length!==0 ?(
                <> 
      <div> <table className="entete-tab">   
      <thead>
      <tr>
        <th>Nom</th>
        <th></th><th></th><th></th><th></th><th></th><th></th><th></th>


        <th>Prénom</th>
        <th></th><th></th><th></th><th></th><th></th><th></th><th></th>

        <th>CIN</th>
      
        <th></th>
      </tr>
      </thead>
      </table>
     
      </div>
 
    <div >

    
        {activeadherents.map(adherent => {
          return <Adherent
          key={adherent.id} id={adherent.id} cin={adherent.cin} nom={adherent.nom} prenom={adherent.prenom} dateNaissance={adherent.dateNaissance} 
            liste="active"
            deleteMember={deleteMember}
            />
          })}
                   
                 
          
     
        </div>
        </>
                  ):(
                    <div > la liste des livres actives est vide </div>
                  )}
      </div>
    )
    }
    
    export default ListeActive