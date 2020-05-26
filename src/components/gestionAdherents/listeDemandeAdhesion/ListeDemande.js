import React from "react"
//, { useState, useEffect }
// useCallback,
import "./ListeDemande.css"

//import adherentPage from "./adherentPage/adherentPage"
import Demande from "./demande/Demande"

function ListeDemande() {
    let demandes = JSON.parse(localStorage.getItem('demandes'))

 
  
  return (
    
    <div className="adherents-list">
              <h1>Liste des demandes</h1>
      <div> <table className="entete-tab">
      <tr>
        <th>Nom</th>
        <th>Prenom</th>
        <th>CIN</th>
        <th>Date de naissance</th>
        </tr>
      </table>
      </div>
      
    <div>
      {demandes.map(demande => {
        // <Link to={`${path}/${task.id}`}>
        // <div onClick={() => handleClick(task.id)}> 
 
         return <Demande
        
            key={demande.id}
            id={demande.id}
            cin={demande.cin}
            nom={demande.nom}
            prenom={demande.prenom}
            dateNaissance={demande.date} 
          />
        // </div> 
        // </Link>
      })}
    </div>
  </div>
)
}

export default ListeDemande

