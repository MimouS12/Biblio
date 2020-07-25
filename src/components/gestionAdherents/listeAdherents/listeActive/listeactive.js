import React from "react"
// useCallback,
import Adherent from "../../adherent/Adherent"
import "./listeactive.css"
function ListeActive({activeadherents,deleteMember,ModifierMember,BannirMember}) {




  
  
  return (
   
      <div className="adherents-list" >

      <h1  className="Titre">Liste des Adhérents Actifs</h1>

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
          key={adherent.id} 
          id={adherent.id} 
          cin={adherent.cin} 
          nom={adherent.nom} 
          prenom={adherent.prenom} 
          dateNaissance={adherent.dateNaissance} 
          email={adherent.email}
          liste="active"
          deleteMember={deleteMember}
          ModifierMember={ModifierMember}
          BannirMember={BannirMember}
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