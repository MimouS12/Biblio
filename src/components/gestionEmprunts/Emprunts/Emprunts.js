import React ,{useState}from "react"
//, { useState } 
import PropTypes from "prop-types"

import { Alert } from 'antd';





export default function Emprunt({titreLivre,idUser, Usernom,dateRetour, dateEmp}) {
 
  return (
      

          <div>
     
           <div className="adherenttable">
                <div className="adherent">
        
      <table >
        <tbody>
    
      <tr>
     {/*  <td>{idEmp}</td>
        <td>{idLivre}</td> */}
        <td>{titreLivre}</td>
        <td>{ idUser}</td>
        <td>{  Usernom}</td>
        <td>{  dateEmp}</td>
        <td>{ dateRetour}</td>
      
         
     
      
     

      </tr>
      </tbody>
    </table>
    </div>
    </div>
    </div>
      
   
      )
  
}
Emprunt.propTypes = {
   
    titreLivre: PropTypes.string.isRequired,
   
//   dateNaissance: PropTypes.string.isRequired,
}
