import React ,{useState}from "react"
//, { useState } 
import PropTypes from "prop-types"
import{addMember}from "../../../../services/adherents.service"
import { Alert } from 'antd';

import './Demande.css';



export default function Demande({id,cin,nom,prenom,dateNaissance}) {

    const[memberAdded,setMemberAdded]=useState(false)
    const[memberRefuse,setMemberRefuse]=useState(false)

    let demandes = JSON.parse(localStorage.getItem('demandes'))
   
    const handleAcceptDemande =() =>{
      var i=demandes.findIndex(demande=>demande.id === id);

      addMember(demandes[i]["cin"], demandes[i]["nom"], demandes[i]["prenom"], demandes[i]["date"], demandes[i]["email"] )

     //console.log("id :::::"+id+"cin ::::"+cin)
       console.log(i)
      
       console.log("demande :"+demandes[id]["nom"])
       if(i!==-1){
        demandes.splice(i,1);
       }
       console.log(demandes)
      localStorage.setItem("demandes", JSON.stringify(demandes));
      setMemberAdded(true)


    }
    const handlerefuseDemande =() =>{
        alert("vous supprimerez cette demande d'adhésion")
        var i=demandes.findIndex(demande=>demande.id === id);
        console.log(i)
         if(i!==-1){
          demandes.splice(i,1);
         }
         console.log(demandes)
         
        localStorage.setItem("demandes", JSON.stringify(demandes));
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
