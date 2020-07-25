import React from "react"

import { Empty } from 'antd';
import Emprunt from "../Emprunts/Emprunts"
import{fetchEmpruntBymember}from "../../../services/emprunts.service"
import "./ListeEmpruntAdh.css"

import { useParams } from "react-router-dom"

function ListeEmpruntAdh () {

  let emprunts = JSON.parse(localStorage.getItem('emprunts'));


  
  const { adherentId } = useParams()
  var Empadh= fetchEmpruntBymember(emprunts,adherentId);
  console.log(Empadh)
 
  
  return (
    
    <div className="adherents-list">
          <h1 className="titre8">Liste des livres empruntés  </h1>
      {Empadh.length!==0 ?(
        <>
       <div> <table className="entete-tab">
         <tbody>
       <tr>
         <th>Libelle </th>
         <th></th>
         <th></th>
         <th></th>
         <th></th>
         <th></th>
         <th></th>
         <th></th>
         <th></th>
 
         <th>Date emprunt</th>
         </tr>
         </tbody>
       </table>
       </div>
       
        <div>
       {Empadh.map((emprunt,index)=> {
      
  
          return <Emprunt
 
             key={index}
             idLivre={emprunt.idLivre}
             idEmp={emprunt.idEmp}
             titreLivre={emprunt.titreLivre} 
           //  idUser={emprunt.idUser}
           //   Usernom={emprunt.Usernom}
             dateEmp={emprunt.dateEmp}
            
           
           />

       })}
     </div>
   
</>
      ):(
        <Empty description="Cet adhérent n'a pas d'empruntes" />
      )

      }

  </div>
)
}

export default ListeEmpruntAdh