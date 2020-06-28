import React from "react"
import "./ListeAd.css"
import ListeActive from "./listeActive/listeactive"
import  ListeBanni from "./listeBanni/listebanni"




function ListeAdherents() {
    

  return (
    <div className='P2'>
            
            <div className="homepage"></div>
            <div  className="page">
         <ListeActive />
         <br/>
          <ListeBanni/>     
          </div>       
          <div className="homepage"></div>
  
      

    </div>

)
}

export default ListeAdherents


