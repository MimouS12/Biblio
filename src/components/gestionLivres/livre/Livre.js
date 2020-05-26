import React ,{useState,useEffect} from "react"
//, { useState } 

import { Link  } from 'react-router-dom'

import { Alert } from 'antd';
import FormAdd from "../formBook/FormAdd"

import {archiveBook , setnbExemplaires} from "../../../services/livres.service"

import './Livre.css';

;

export default function Livre({ id, libelle, auteur ,liste ,nbExemplaires}) {
  const[modeAdmin,setModeAdmin]=useState(false)
  const[modeMember,setModeMember]=useState(false)
  const[bookArchive, setBookArchive]=useState(false)
  const[bookBorrowed, setBookBorrowed]=useState(false)


  useEffect(()=>{
    let user = localStorage.getItem('user')
    if(user ==="admin"){
        setModeAdmin(true)
    }else{
        setModeMember(true)
    }

  },[])
  const Archiver =()=>{
   archiveBook(id)
   setBookArchive(true)
   alert("you will archive this book")
  }
  const Emprunter =()=>{
    if(nbExemplaires > 0){
      let userEm = JSON.parse(localStorage.getItem('user'))
      var emprunts = JSON.parse(localStorage.getItem("emprunts") || "[]");
       //console.log("length "+emprunts.length)
        var emprunt = {
          idEmp: emprunts.length ,
          idLivre:id ,
          titreLivre : libelle,
          idUser: userEm["id"],
          //etat pour tester si le livre est retourné ou l'emprunt reste en cours
          etat:"encours",
          //date of today
          dateEmp : new Date().toJSON().slice(0,10).replace(/-/g,'/'),

          // si cette date est vide lezem nzidou 3la dateEmp 15 jours w nchufouha tji b date lyoum wala 
          //hatta akther mn date lyoum yaani nombre de jours ynajjm ykoun akther wala hatta f chHar eli ba3ed


          dateRetour:""
         };
         emprunts.push(emprunt);
         var sameUserEmp = []
        sameUserEmp = emprunts.filter(item => item["idUser"]=== userEm["id"]);
        // console.log("lengttttth :::"+sameUserEmp.length)
        // console.log("user emp "+Object.values(sameUserEmp[0]))
         if(sameUserEmp.length < 3){
            // nbExemplaires=nbExemplaires--
             setnbExemplaires(id,nbExemplaires-1)
             localStorage.setItem("emprunts", JSON.stringify(emprunts));
             setBookBorrowed(true)
  
             //console.log("you emprunted this book , and the number of copies now is : "+nbExemplaires-1)
             alert("you just emprunted book ["+libelle+"]")

      }else{
        alert("you cannot emprunt more then 2 books !")
      }

    }else{
      alert("The number of copies of this book has expired , you can't emprunt it")
    }

    
  }
  const Retourner =()=>{
    let userRet = JSON.parse(localStorage.getItem('user'))
    var emprunts = JSON.parse(localStorage.getItem("emprunts"));
    var sameUserSamebook = []
    sameUserSamebook = emprunts.find(item => item["idUser"]=== userRet["id"] && item["idLivre"]===id);
    //emprunts.splice(emprunts["idEmp"],1);
    //console.log("this is "+ Object.values(sameUserSamebook))
    sameUserSamebook["etat"] ="retourné"

    //a lire fl affichage des empruntes 

    //kif yarja3 lkteb nda5lou date fi variable dateRetour fl local storage 
    //wa9tHa l'emprunt lahy encours lahy en retard yaani meme pas ntestiw 3al retard lenna
    //najjmou nzidou liste des empruntes retournés

    sameUserSamebook["dateRetour"]=new Date().toJSON().slice(0,10).replace(/-/g,'/')

    //console.log("this is "+ Object.values(sameUserSamebook))
    //to update we delete ligne elli ken w npushiw line jdid b les updates 
    emprunts.splice(emprunts["idEmp"],1);
    emprunts.push(sameUserSamebook);
    localStorage.setItem("emprunts", JSON.stringify(emprunts));

    //incrementer nb d'exemplaire
    setnbExemplaires(id,nbExemplaires++)
    setBookBorrowed(false)
    alert("this book "+libelle+"is returned")

  }
  return (
      <div>
        {bookArchive &&(
           <Alert message="Livre archivé " type="success" showIcon />
           )}
    <div className="adherenttable">
     
     <div className="adherent" >
       
     <table >
   
     <tr>
       <td>{libelle}</td>
       <td></td>
       <td></td>
     
       <td></td>
       <td></td>
       <td></td>
       <td></td>
       <td></td>
       <td></td>

       <td>{auteur}</td>
     
           {modeAdmin  &&(

             <>
                      <Link to={`/adminPage/listelivres/${id}`}> <td >details</td></Link> 

                       <td>
                          {/* <button className="button" style={{background:"limegreen"}}>
                              Modifier */}
                              <FormAdd titre="Modifier"/>

                          {/* </button> */}
                        </td>

           {liste ==="active" &&(
                                     <td>
                                     <button className="button" style={{background:"orange"}} onClick={Archiver}>
                                          Archiver
                                     </button>
                                 </td>

           ) }

             </>
           )}

        {modeMember &&(
          
         <>
             <Link to={`/memberPage/listelivres/${id}`}> <td >details</td></Link> 
             {bookBorrowed &&(
               <td>
                     <button className="button" style={{background:"yellow"}} onClick={Retourner}>
                       retourner
                     </button>
               </td>

             )}
             {!bookBorrowed &&(
               <td>
               <button className="button" style={{background:"blue"}} onClick={Emprunter}>
                  Emprunter
                </button>
                 
                  </td>

             )}
                  
         </>

       )}       
        </tr>
    
   </table>
   </div>
   </div>
     
  

      </div>
  
      )
  
}

