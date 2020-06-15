import React, { useState, useEffect,useRef } from "react"
// useCallback,
import {fetchbooksActive ,fetchBooks } from '../../../../services/livres.service'
import Livre from "../../livre/Livre"
import "./listeActive.css"
import BookForm from "../../formBook/BookForm"

function ListeActive() {
  const [searchValue, setSearchValue] = useState("")
  const [activeBooks,  setActiveBooks] = useState([])
  const [isVisible, setIsVisible] = useState(false)
  const[modeAdmin,setModeAdmin]=useState(false)
 // const [loading, setLoading] = useState(false)
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
        console.log("result: ", didCancel)
        if (!didCancel) {
          setActiveBooks(result)
        }

      
    }
    // console.log("useEffect:", searchValue)
    fetchData()

    return () => {
      console.log("cleanup: ", searchValue)
      didCancel = true
    }

  }, [searchValue])

   const inputlibelle = useRef(null)
   const   addBook = (libelle,auteur) => {
    setActiveBooks(previousbooks => [...previousbooks, { id: previousbooks.length + 1, libelle,auteur}])  
   }
  

 /*  const addBook =  ( libelle,auteur)  => {
   
    setActiveBooks(previousBooks => [
      ...previousBooks,
      { id: previousBooks.length + 1, libelle,auteur}
    ])
  } 
   */

   const updateLivre = (id, libelle,auteur) => {
    const newbooks = activeBooks.map( book =>
      book.id === id ? { libelle,auteur } : book
    )
    setActiveBooks(newbooks)
  } 
  const deleteBook= id => {
    const newbooks  = activeBooks.filter( book =>  book.id !== id)
    setActiveBooks(newbooks)
  }
 /*  const addBook = function (EAN, libelle,auteur,edition,nbExemplaires,etat) {
  const  result=activeBooks.push({ id:activeBooks.length + 1, EAN : Number(EAN), libelle,auteur,edition : Number(edition),nbExemplaires: Number(nbExemplaires),etat });
    console.log('book added successfully !!');
    setActiveBooks( result)
   }
 c onst addBook =  (EAN, libelle,auteur,edition,nbExemplaires,etat)  => {
   
    setActiveBooks(previousBooks => [
      ...previousBooks,
      { id: previousBooks.length + 1,EAN : Number(EAN), libelle,auteur,edition : Number(edition),nbExemplaires: Number(nbExemplaires),etat }
    ])
  } */

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  
  
  return (
    
    <div className="adherents-list">
  
       {modeAdmin &&( 
            <div>
          <div>  <button className="Toggle"onClick={toggleVisibility}>Ajouter livre</button>
            </div> 
           <div>{isVisible && ( <BookForm  addBook ={ addBook } />)} </div>
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
     
      <tr >
        <th>Libelle</th>
        <th></th><th></th><th></th><th></th><th></th><th></th><th></th>

        <th>auteur</th>
        <th></th>
      </tr>
      </table>
      </div>
      
     
    <div>
    
          
      {activeBooks.map(book => {

         return <Livre
                    key={book.id}
                     id={book.id}
                     libelle={book.libelle}
                     auteur={book.auteur}
                     nbExemplaires ={book.nbExemplaires}
                     liste="active"
                    updateLivre={updateLivre}
                    deleteBook={deleteBook}
                    
                />

      })}
    </div>
  </div>
)
}

export default ListeActive

