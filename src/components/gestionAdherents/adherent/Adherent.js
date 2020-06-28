import React ,{useState} from "react"
//, { useState } 
import PropTypes from "prop-types"
//import { Table, Space } from 'antd';
import { Link } from 'react-router-dom'
import { Alert } from 'antd';
import {bannirAdherent ,activerAdherent,  updateAdherent} from "../../../services/adherents.service"
//import {updateAdherent   } from '../../../../services/adherents.service'
import './Adherent.css';

;

export default function Adherent({
 id,
  nom,
  prenom,
  cin,
  liste,
 // updateAdherent ,
  deleteMember

}) {
  const[ Adherentactive, setactiverAdherent]=useState(false)
  const[ Adherentbanni, setbannirAdherent]=useState(false)
  const [updateMode, setUpdateMode] = useState(false)
  const [FnameToUpdate, setFnameToUpdate] = useState(nom)
  const [LnameToUpdate, setLnameToUpdate] = useState(prenom)
  const [cinToUpdate, setcinToUpdate] = useState(cin)
  const Bannir =()=>{
    bannirAdherent(id)
    setbannirAdherent(true)
    alert("you will bannir this member")
   }
   const Activer =()=>{
    activerAdherent(id)
    setactiverAdherent(true)
    alert("you will activer this member")
   }
   const Modifier =()=>{
    updateAdherent (id, FnameToUpdate, LnameToUpdate,cinToUpdate)
    setUpdateMode(false)
   }
  

  return (
  
      <div className="adherenttable">

         {Adherentactive &&(
           <Alert message="Adhérent activé " type="success" showIcon />
           )}
             {Adherentbanni &&(
           <Alert message="Adhérent banni " type="success" showIcon />
           )}
      {!updateMode ? (
        <>
          <div className="adherent">
               

        <table>
          <tbody>
        <tr>
          <td>{nom}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>



          <td>{prenom}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
 
           <td>{cin}</td>
  
           {/* bech yet5dmou modifier w bannir 
           modifier test7a9 formulaire wala popup w bannir fl service w n3aytoulha wakahaw 
           **bannir just bech tbaddel el statu ta3 l'adherent
           onClick={fnctModifier}
           onClick={fnctBannir} */}
           
           <td className="ButtonSection">
           <button className="button" style={{background:"LightSteelBlue"}}onClick={()=>setUpdateMode(true)}>
              Modifier
            </button>
             
   
           <button className="button" style={{background:"Plum"}}onClick={() => deleteMember(id)}>
             Supprimer
            </button>
             
           
        
              {liste ==="active" &&(
                                       
                                       <button className="button" style={{background:"pink"}} onClick={Bannir}>
                                           Bannir
                                       </button>
                                   
             ) }
                   {liste ==="Banni" &&(
                                     
                                       <button className="button" style={{background:"pink"}} onClick={Activer}>
                                          Activer
                                       </button>
                                
  
             ) } 
           <Link to={`/adminPage/ListeAdherents/${id}`}>  Voir profil</Link> 
           </td>
           
           </tr>
           </tbody>
      </table>
      </div>
      </>
      ) : (
        <div>
          <input
            type="text"
            name=" nom"
            value={FnameToUpdate}
            onChange={e => setFnameToUpdate(e.target.value)}
          />
          <input
            type="text"
            value={LnameToUpdate}
            name="prenom"
            onChange={e => setLnameToUpdate(e.target.value)}
          />
          <input
            type="text"
            value={cinToUpdate}
            name="cin"
            onChange={e => setcinToUpdate(e.target.value)}
          />
          <button className="button" style={{background:"grey"}}onClick={Modifier}>
              Modifier adhérent
            </button>
        </div>
      )}
    </div>
  )
}
Adherent.propTypes = {
  cin: PropTypes.string.isRequired,
  nom: PropTypes.string.isRequired,
  prenom: PropTypes.string.isRequired,
  dateNaissance: PropTypes.string.isRequired,
}
