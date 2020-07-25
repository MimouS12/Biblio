
import React from "react"
import "./listeEmprunts.css"
import Listencours from "./Listencours/Listencours"
import Listeretournes from "./Listeretourne/Listeretourne"
import Listeretard from "./Listeretard/Listeretard"



function ListeEmprunts() {
    

  return (
    
    <div className='P3'>
       <div className="homepage"></div>
       <div className="emprunts-list">
         <Listencours /> 
          <Listeretournes/>              
          <Listeretard/>   
          </div>
          <div className="homepage"></div>

    </div>

)
}

export default ListeEmprunts
