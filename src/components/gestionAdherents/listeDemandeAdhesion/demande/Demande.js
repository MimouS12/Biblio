import React ,{useState}from "react"
//, { useState } 
import PropTypes from "prop-types"
import {AccepterDemande,RefuserDemande} from "../../../../services/demandes.service"
import { Alert } from 'antd';

import './Demande.css';



export default function Demande({id,cin,nom,prenom,dateNaissance}) {

    const[memberAdded,setMemberAdded]=useState(false)
    const[memberRefuse,setMemberRefuse]=useState(false)

    const handleAcceptDemande =() =>{
      AccepterDemande(id)
      setMemberAdded(true)
    }
    const handlerefuseDemande =() =>{
        alert("vous supprimerez cette demande d'adhésion")
        RefuserDemande(id)
        setMemberRefuse(true)

    }

  return (
      

          <div>
          {memberAdded &&(
              <Alert
      message="Adherent ajouté avec succés"
      description="verifier dans la liste des adhérents"
      type="info"
      showIcon
    />)}
          {memberRefuse &&(
                <Alert
                message="demande d'adhésion refusée"
                description=""
                type="warning"
                showIcon
                closable
              />
              
          )}

           <div className="adherenttable">
                <div className="adherent">
        
      <table >
        <tbody>
      <tr>
        <td>{nom}</td>
        <td>{prenom}</td>
         <td>{cin}</td>
         <td>{dateNaissance}</td>
         <td>
         <button className="button" onClick={handleAcceptDemande}>
            accepter
          </button>
         </td>
         <td>
          <button className="button" onClick={handlerefuseDemande}>
            refuser
          </button>

         </td>

      </tr>
      </tbody>
    </table>
    </div>
    </div>
    </div>
      
   
      )
  
}
Demande.propTypes = {
  cin: PropTypes.string.isRequired,
  nom: PropTypes.string.isRequired,
  prenom: PropTypes.string.isRequired,
  dateNaissance: PropTypes.string.isRequired,
}
