import React from "react"
// useCallback,
import Adherent from "../../adherent/Adherent"
import "./listebanni.css"
function ListeBanni({banniAdherents,deleteMember ,ModifierMember, ActiverMember}) {


  
  return (
    
    <div className="adherents-list" >
      <h1  className="Titre">Liste des Adhérents Bannis </h1>
      <div> <table  className="entete-tab">

      <thead>
      <tr >
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
            deleteMember={deleteMember}
            ModifierMember={ModifierMember}
            ActiverMember={ActiverMember}
     />
        
      })}
    </div>
  </div>
)
}

export default  ListeBanni