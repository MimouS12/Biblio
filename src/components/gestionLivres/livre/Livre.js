import React ,{useState,useEffect} from "react"
//, { useState } 

import { Link  } from 'react-router-dom'
import "./Livre.css"
import { Alert } from 'antd';
//import BookForm from "../../formBook/BookForm"
import {archiveBook , setnbExemplaires ,updateBook} from "../../../services/livres.service"

import './Livre.css';


export default function Livre({ id, libelle, auteur ,EAN,edition ,nbExemplaires,liste,deleteBook}) {
  const[modeAdmin,setModeAdmin]=useState(false)
  const[modeMember,setModeMember]=useState(false)
  const[bookArchive, setBookArchive]=useState(false)
  const[bookBorrowed, setBookBorrowed]=useState(false)

  const [libelleToUpdate, setlibelleToUpdate] = useState(libelle)
  const [auteurToUpdate, setauteurToUpdate] = useState( auteur)
  const [EANToUpdate, setEANToUpdate] = useState(EAN)
  const [editionToUpdate, seteditionToUpdate] = useState( edition)
  const [nbExemplairesToUpdate, setnbExemplairesToUpdate] = useState(nbExemplaires)

  const [updateMode, setUpdateMode] = useState(false)
  //const [isVisible, setIsVisible] = useState(true)
 
  useEffect(()=>{
    var user = localStorage.getItem('user')

    if(user ==="admin"){
        setModeAdmin(true)
    }else{
      
        setModeMember(true)
        //car le membre est enregistrer sous forme de objet donc il faut faire json.parse pour pouvoir acceder aux champs
        var member = JSON.parse(user)
        var emprunts = JSON.parse(localStorage.getItem('emprunts'))
        //emprunts could be null tha make error while connecting 
        if(emprunts){
          var  empEnCours=emprunts.find(emprunt =>emprunt.idLivre===id && emprunt.etat==="encours" &&emprunt.idUser===member["id"])
          if(empEnCours){
            setBookBorrowed(true)    
          }
    
        }
    }

  },[id])
   const Modifier =()=>{
    updateBook(id, EANToUpdate,libelleToUpdate, auteurToUpdate,editionToUpdate,nbExemplairesToUpdate)
    setUpdateMode(false)
   }
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
          Usernom: userEm["nom"],
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
        sameUserEmp = emprunts.filter(item => item["idUser"]=== userEm["id"]&& item["etat"]!=="retourné");
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

    emprunts.splice(sameUserSamebook["idEmp"],1);
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
    {!updateMode ? (
        
        <>
         
     <div className="adherent" >
       
     <table >
       <tbody>
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
       <td className="ButtonSection">
           {modeAdmin  &&(
             <>
                     
              
              <button className="button" style={{background:"limegreen"}}onClick={()=>setUpdateMode(true)}>
                 Modifier
               </button>
                 
                    {/* <button className="button" style={{background:"Gold"}}onClick={() => deleteBook(id)}>
                       Supprimer
                      </button> */}
                  
                 

           {liste ==="active" &&(
                                    
                                     <button className="button" style={{background:"orange"}} onClick={Archiver}>
                                          Archiver
                                     </button>
                                
                                    ) }
                           

       
                          <Link to={`/adminPage/listelivres/${id}`}> Détails</Link>
             </>
           )}

        {modeMember &&(
          
         <>
             
             {bookBorrowed &&(
              
                     <button className="button" style={{background:"yellow"}} onClick={Retourner}>
                       Retourner
                     </button>
      

             )}
             {!bookBorrowed &&(
               
               <button className="button" style={{background:"Goldenrod"}} onClick={Emprunter}>
                  Emprunter
                </button>

             )}
              <Link to={`/memberPage/listelivres/${id}`}> Détails</Link>
                  
         </>

       )}  
       </td>     
        </tr>
        </tbody>
   </table>
   </div>
   </>
      ) : (
        <div>
        <input
          type="number"
          name=" EAN"
          value={EANToUpdate}
          onChange={e => setEANToUpdate(e.target.value)}
        />
        <input
          type="text"
          name=" libelle"
          value={libelleToUpdate}
          onChange={e => setlibelleToUpdate(e.target.value)}
        />
        <input
          type="text"
          value={auteurToUpdate}
          name="auteur"
          onChange={e => setauteurToUpdate(e.target.value)}
        />
        <input
          type="number"
          value={editionToUpdate}
          name="edition"
          onChange={e => seteditionToUpdate(e.target.value)}
        />
        <input
          type="number"
          value={nbExemplairesToUpdate}
          name="edition"
          onChange={e => setnbExemplairesToUpdate(e.target.value)}
        />
        <button className="button" style={{background:"grey"}} onClick={Modifier}>
            Modifier Livre
          </button>
      </div>




      )}
   </div>
     
  

      </div>
     
  
      )
  
}

