import React, { useState, useEffect } from "react"
// useCallback,
import Livre from "../../livre/Livre"
import "./listeActive.css"
import BookForm from "../../formBook/BookForm"

function ListeActive({booksActive,deleteTask}) {

  //const [activeBooks,  setActiveBooks] = useState([])
  const [isVisible, setIsVisible] = useState(false)
  const[modeAdmin,setModeAdmin]=useState(false)
 

  useEffect(()=>{
    let user = localStorage.getItem('user')
    if(user ==="admin"){
        setModeAdmin(true)
    }}, [])
 
// useEffect(() => {
//   const fetchData =  () => {
//     //setLoading(true)
//     const result = fetchbooksActive()
//     setActiveBooks(result)
//     //setLoading(false)
//   }
//   console.log("useEffect")

//   fetchData()
// }, [])



  // const deleteActiveBook= id => {
  //   const newbooks  = activeBooks.filter( book =>  book.id !== id)
  //   setActiveBooks(newbooks)}
     

 

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

 
 
  return (
    
    <div className="adherents-list">
  
       {modeAdmin &&( 
            <div>
          <div>  <button className="Toggle"onClick={toggleVisibility}>Ajouter livre</button>
            </div> 
           <div>{isVisible && ( <BookForm />)} </div>
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
                    deleteBook={deleteTask}
                   
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

