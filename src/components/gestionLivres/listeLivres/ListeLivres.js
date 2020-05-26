import React, { useState, useEffect } from "react"
// useCallback,
import ListeActive from "./listeActive/ListeActive"
import ListeArchive from "./listeArchive/ListeArchive"
import FormAdd from "../formBook/FormAdd"
import "./ListeLivres.css"



function ListeLivres() {
    

  const[modeAdmin,setModeAdmin]=useState(false)

  useEffect(()=>{
    let user = localStorage.getItem('user')
    if(user ==="admin"){
        setModeAdmin(true)
    }

  },[])


  

  return (
    <div>
        {modeAdmin &&(
            //hne just n7adher fi blast el ajouterr eli bch n3aytoulha naamlou link walla popup walla elli huwa hhhh :p 
         
                             <FormAdd titre="Ajouter un livre"/>
        )}

         <ListeActive /> 
        {modeAdmin &&(  
              <ListeArchive/>              
        )}

    </div>

)
}

export default ListeLivres

