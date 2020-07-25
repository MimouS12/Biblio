import React, { useState, useEffect  } from "react"
// useCallback,
import Livre from "../../livre/Livre"
import "./listeActive.css"
import BookForm from "../../formBook/BookForm"
import {
  PlusOutlined
} from '@ant-design/icons';


function ListeActive({booksActive,deleteBook,AjouterLivre,MiseAjourLivre,ArchiverLivre}) {

  const [isVisible, setIsVisible] = useState(false)
  const[modeAdmin,setModeAdmin]=useState(false)
 

  useEffect(()=>{
    let user = localStorage.getItem('user')
    if(user ==="admin"){
        setModeAdmin(true)
    }}, [])



 

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

 
 
  return (
    
    <div className="adherents-list">
  
       {modeAdmin &&( 
            <div>
          <div> <br/> <button className="Toggle" data-testid ="OnclickAjouter" onClick={toggleVisibility}> <PlusOutlined /> <b>Ajouter livre</b></button>
            </div> <br/>
           <div> {isVisible && (
                <BookForm AjouterLivre={AjouterLivre}/>
             )}</div>
           </div>
        )} 
      <h1 className="Titre1">Liste des livres </h1>

         {booksActive.length !==0 ?(
                <> 
      <div> <table className="entete-tab">
     <tbody>
      <tr >
        <th>Libelle</th>
        <th></th><th></th><th></th><th></th><th></th><th></th><th></th>

        <th>auteur</th>
        <th></th>
      </tr>
      </tbody>
      </table>
      </div>
      
     
    <div>
 
  
      {booksActive.map((book) => {

         return <Livre
                    key={book.id}
                     id={book.id}
                     libelle={book.libelle}
                     auteur={book.auteur}
                     EAN ={book.EAN}
                     edition={book.edition}
                     nbExemplaires ={book.nbExemplaires}
                     liste="active"
                    deleteBook={deleteBook}
                    MiseAjourLivre={MiseAjourLivre}
                    ArchiverLivre={ArchiverLivre}
                   
                />
      })}
               
             
      
 
    </div>
    </>
              ):(
                <div > la liste des livres actives est vide </div>
              )}
  </div>
)
}

export default ListeActive

