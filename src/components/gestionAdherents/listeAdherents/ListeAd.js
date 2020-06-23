import React from "react"
import {List}from"antd"
import "./ListeAd.css"
import ListeActive from "./listeActive/listeactive"
import  ListeBanni from "./listeBanni/listebanni"




function ListeAdherents() {
    

  return (
    <div>
            
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


