import React from "react"
//, { useState } 
import PropTypes from "prop-types"
//import { Table, Space } from 'antd';
import { Link } from 'react-router-dom'

import './Adherent.css';

;

export default function Adherent({
 id,
  nom,
  prenom,
  cin,

}) {
//const [adherent, setAdherent]=useState('')
  // const handleClick=(adherentId)=>{
  //   setAdherent(adherentId)
  //   // or 
  //   // push(`/tasks/${taskId}`)
  // }
  return (
   /*  <div className="task">
      <div>
        <div className="title">
          {cin} {nom} {prenom} {dateNaissance} 
        </div>
      </div>
     {/*  <div className="actions">
        <div>
          /*<button onClick={() => details(id)}>details</button>
         // <button>update</button>
        </div>
      </div> */
      <div className="adherenttable">
     
      <div className="adherent">
        
      <table >
    
      <tr>
        <td>{nom}</td>
        <td>{prenom}</td>
         <td>{cin}</td>

         {/* bech yet5dmou modifier w bannir 
         modifier test7a9 formulaire wala popup w bannir fl service w n3aytoulha wakahaw 
         **bannir just bech tbaddel el statu ta3 l'adherent
         onClick={fnctModifier}
         onClick={fnctBannir} */}
         <td>
         <button className="button" style={{background:"grey"}}>
            Modifier
          </button>
           
            </td>
         <td>
         <button className="button" style={{background:"pink"}}>
            Bannir 
          </button>
            </td>
                 
         <Link to={`/adminPage/ListeAdherents/${id}`}> <td >details</td></Link> 
         
         </tr>
     
    </table>
    </div>
    </div>
      
   
      )
  
}
Adherent.propTypes = {
  cin: PropTypes.string.isRequired,
  nom: PropTypes.string.isRequired,
  prenom: PropTypes.string.isRequired,
  dateNaissance: PropTypes.string.isRequired,
}
