import React, { useState, useEffect,useRef } from "react"
// useCallback,
import {fetchbooksActive ,fetchBooks } from '../../../../services/livres.service'
import {addBook } from "../../../../services/livres.service"

import Livre from "../../livre/Livre"
import "./listeActive.css"
import BookForm from "../../formBook/BookForm"

function ListeActive() {
  const [searchValue, setSearchValue] = useState("")
  const [activeBooks,  setActiveBooks] = useState([])
  const [isVisible, setIsVisible] = useState(false)
  const[modeAdmin,setModeAdmin]=useState(false)

  useEffect(()=>{
    let user = localStorage.getItem('user')
    if(user ==="admin"){
        setModeAdmin(true)
    }})
   useEffect(() => {
     const fetchData =  () => {
       const result =  fetchbooksActive()
       setActiveBooks(result)
     }
     console.log("useEffect")

     fetchData()
   }, [])

   useEffect(() => {
    let didCancel = false
    const fetchData = async () => {
        const result = await fetchBooks(searchValue)
        //console.log("result: ", didCancel)
        if (!didCancel) {
          setActiveBooks(result)
        }

      
    }
    fetchData()
    return () => {
      console.log("cleanup: ", searchValue)
      didCancel = true
    }

  }, [searchValue])



  const deleteBook= id => {
    const newbooks  = activeBooks.filter( book =>  book.id !== id)
    setActiveBooks(newbooks)
  }

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  
  
  return (
    
    <div className="adherents-list">
  
       {modeAdmin &&( 
            <div>
          <div>  <button className="Toggle"onClick={toggleVisibility}>Ajouter livre</button>
            </div> 
           <div>{isVisible && ( <BookForm  />)} </div>
           </div>
        )} 
      <h1 className="Titre1">Liste des livres </h1>

      <div className="search">
          <input
            type="search"
            name="search"
            placeholder=" titre/nom auteur"
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
          />
        </div>
       
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
    
      {activeBooks.map(book => {

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
                    
                />

      })}
    </div>
  </div>
)
}

export default ListeActive

