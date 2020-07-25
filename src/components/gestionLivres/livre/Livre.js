import React ,{useState,useEffect} from "react"
import PropTypes from "prop-types"
import { Link} from 'react-router-dom'
import "./Livre.css"
import { Alert } from 'antd';
import {
  DeleteOutlined,EditOutlined,ScissorOutlined,FileSearchOutlined,PlusOutlined,MinusOutlined
} from '@ant-design/icons';
//import BookForm from "../../formBook/BookForm"
import {setnbExemplaires } from "../../../services/livres.service"
import {Emprunter ,RetounerLivre} from "../../../services/emprunts.service"

import './Livre.css';


export default function Livre({ id, libelle, auteur ,EAN,edition ,nbExemplaires,liste,deleteBook,MiseAjourLivre, ArchiverLivre}) {
  const[modeAdmin,setModeAdmin]=useState(false)
  const[modeMember,setModeMember]=useState(false)
  const[bookArchive, setBookArchive]=useState(false)
  const[bookBorrowed, setBookBorrowed]=useState(false)

  const [updateMode, setUpdateMode] = useState(false)
  const [libelleToUpdate, setlibelleToUpdate] = useState(libelle)
  const [auteurToUpdate, setauteurToUpdate] = useState( auteur)
  const [EANToUpdate, setEANToUpdate] = useState(EAN)
  const [editionToUpdate, seteditionToUpdate] = useState(edition)
  const [nbExemplairesToUpdate, setnbExemplairesToUpdate] = useState(nbExemplaires)

 
  useEffect(()=>{
    var user = localStorage.getItem('user')

    if(user ==="admin"){
        setModeAdmin(true)
    }else{
      
        setModeMember(true)
        //car le membre est enregistrer sous forme de objet donc il faut faire json.parse pour pouvoir acceder aux champs
        var member = JSON.parse(user)
        var emprunts = JSON.parse(localStorage.getItem('emprunts'))

        //emprunts could be null that make error while connecting 
        if(emprunts){
          var  empEnCours=emprunts.find(emprunt =>emprunt.idLivre===id && (emprunt.etat==="encours" || emprunt.etat==="EnCoursRetard") && emprunt.idUser===member["id"])
          if(empEnCours){
            setBookBorrowed(true)    
          }
    
        }
    }

  },[id])
   const Modifier =()=>{
    MiseAjourLivre(id,EANToUpdate,libelleToUpdate, auteurToUpdate,editionToUpdate,nbExemplairesToUpdate)
    setUpdateMode(false)
   }
  const Archiver =()=>{
    setBookArchive(true)
    alert("you will archive this book")
    ArchiverLivre(id)

  }
  const Emprunterlivre =()=>{
   var resltEmprunter= Emprunter(id ,libelle,nbExemplaires)
   if(resltEmprunter===1){
      setnbExemplaires(id,nbExemplaires-1)
      setBookBorrowed(true)
      alert("you just emprunted book ["+libelle+"]")

   }else if (resltEmprunter ===2){
    alert("you cannot emprunt more then 2 books !")
   }else{
    alert("The number of copies of this book has expired , you can't emprunt it")
   }
  }
  const Retourner =()=>{
    //appelle du fonction retourner livre depuis service
    var emprunts = JSON.parse(localStorage.getItem("emprunts"));
    RetounerLivre(id,emprunts)
    //incrementer nb d'exemplaire
    setnbExemplaires(id,nbExemplaires+1)
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
       
        <div className="libelle" aria-label='libelle' data-testid='libelle'>
          {libelle} 
        </div>
       
        <div className="auteur" data-testid="auteur">
          {auteur} 
        </div>
     
       <div className="ButtonSection">
       
      
     
           {modeAdmin  &&(
             <>
                  <div>   
              
              <button data-testid='updateBook' className="button" style={{background:"lightsteelblue"}} onClick={()=>setUpdateMode(true)}>
              <EditOutlined style={{ fontSize: '18px' }} />
               </button>
               <button data-testid="deleteBook" className="button" style={{background:"indianred"}} onClick={() => deleteBook(id)}>
               <DeleteOutlined style={{ fontSize: '18px' }}/>
                      </button> 
             
               </div>
               

                     
                      <div> 

           {liste ==="active" &&(
                                    
                                     <button data-testid="archiverBook" className="button" style={{background:"sandybrown"}} onClick={Archiver}>
                                         <ScissorOutlined style={{ fontSize: '18px' }} /> <b>Archiver</b>
                                     </button>
                                
                                    ) }
                            </div>
                     
                          <div className='link'>    
                          <Link to={`/adminPage/listelivres/${id}`}> <FileSearchOutlined style={{ fontSize: '25px' }} /></Link>
                          </div> 
             </>
             
           )}
 
        {modeMember &&(
          
         <>

             {bookBorrowed &&(
              <div>
                     <button data-testid ="Retourner"className="button" style={{background:"darkkhaki"}} onClick={Retourner}>
                     <MinusOutlined style={{ fontSize: '20px' }} /> <b>Retourner</b>
                     </button>
                     </div>

             )}
             {!bookBorrowed &&(
               <div>
                <button data-testid ="Emprunter"  style={{background:"khaki"}} onClick={Emprunterlivre}>
                <PlusOutlined style={{ fontSize: '20px' }}/><b>Emprunter</b>
                </button>
                </div>
             )}
           
             <div> 
             <Link to={`/memberPage/listelivres/${id}`} className="linkColor"><FileSearchOutlined style={{ fontSize: '30px' }} /></Link>
             </div>  
           
         </>

       )}  
       </div>
   
   
  
   </>
   
  
      ) : (
        <div>
        <input
          type="number"
          name=" EAN"
          value={EANToUpdate}
          onChange={e => setEANToUpdate(e.target.value)}
          required
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
          name="edition"           required="required"

          onChange={e => seteditionToUpdate(e.target.value)}
        />
        <input
          type="number"
          value={nbExemplairesToUpdate}
          name="nbExemplaires"
          onChange={e => setnbExemplairesToUpdate(e.target.value)}
        />
        <button data-testid='ModifierLivre' className="button" style={{background:"grey"}} onClick={Modifier}>
            Modifier Livre
          </button>
      </div>




      )}
   </div>
     
  

      </div>
     
  
      )
  
}

 Livre.propTypes = {
  libelle: PropTypes.string.isRequired,
  auteur: PropTypes.string.isRequired,
} 
