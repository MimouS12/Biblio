import React  from "react"
import { Empty } from 'antd';

import "./ListeDemande.css"

//import adherentPage from "./adherentPage/adherentPage"
import Demande from "./demande/Demande"

function ListeDemande() {
    let demandes = JSON.parse(localStorage.getItem('demandes'))

  return (
   
    <div className='P4'>
    <>
                <div className="homepage"></div>

    <div className="adherents-list">
              <h1 className="titre7">Liste des demandes</h1>
              {demandes.length!==0 ?(
                <>
                      <div> <table className="entete-tab">
        <tbody>
      <tr>
        <th>Nom</th>
        <th>Prenom</th>
        <th>CIN</th>
        <th>Date de naissance</th>
        </tr>
        </tbody>
      </table>
      </div>
      
    <div>
      {demandes.map((demande,index) => {
         return <Demande
            key={index}
            id={demande.id}
            cin={demande.cin}
            nom={demande.nom}
            prenom={demande.prenom}
            dateNaissance={demande.date} 
          />

      })}
    </div>
 
                </>
              ):(
                <Empty description="il n'y pas des demandes maitenant" />
              )}

  </div>
  
 
  
  </>
  <div className="homepage"></div>
  <div className="homepage"></div>
   </div>
  
)
}

export default ListeDemande

