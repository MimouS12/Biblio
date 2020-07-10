import React, { useState, useEffect,useCallback } from "react"
// useCallback,
import ListeActive from "./listeActive/ListeActive"
import ListeArchive from "./listeArchive/ListeArchive"
import { addBook } from '../../../services/livres.service'

import {fetchbooksActive ,fetchBooks } from '../../../services/livres.service'

import "./ListeLivres.css"




function ListeLivres() {

  const[modeAdmin,setModeAdmin]=useState(false)
  const [activeBooks,  setActiveBooks] = useState([])
  const [searchValue, setSearchValue] = useState("")


  useEffect(()=>{
    let user = localStorage.getItem('user')
    if(user ==="admin"){
        setModeAdmin(true)
    }

  },[])
  useEffect(() => {
    const fetchData =  () => {
      const result = fetchbooksActive()
      setActiveBooks(result)
    }
    //console.log("useEffect: fetch active books")
  
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
    fetchData()
    return () => {
      //console.log("cleanup: ", searchValue)
      didCancel = true
    }

  }, [searchValue])
  const deleteActiveBook= id => {
    const newbooks  = activeBooks.filter( book =>  book.id !== id)
    setActiveBooks(newbooks)
  }
  const AjouterLivre =(EAN, libelle,auteur,edition,nbExemplaires)=>{
    addBook(parseInt(EAN), libelle,auteur,parseInt(edition),parseInt(nbExemplaires))

    setActiveBooks(previousActiveBooks=> [...previousActiveBooks,{id:previousActiveBooks.length+1 ,EAN, libelle,auteur,edition,nbExemplaires}])

  }
  const memoizedCallbackAjoutBook = useCallback(AjouterLivre, [])

  
  
     
  
  
  return (
 
    <div className='P'>
        <div className="homepage"></div>
        
        <div className="page" >
        <div className="search">
          <input
            type="search"
            name="search"
            placeholder=" titre/nom auteur"
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
          />
        </div>

        <ListeActive booksActive={activeBooks} deleteBook={deleteActiveBook} AjouterLivre={memoizedCallbackAjoutBook} /> 
        {modeAdmin &&(  
              <ListeArchive />              
        )}
        </div>

         <div className="homepage"></div>


    </div>
 
)
}

export default ListeLivres

