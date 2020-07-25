import React, { useState, useEffect,useCallback } from "react"
// useCallback,
import ListeActive from "./listeActive/ListeActive"
import ListeArchive from "./listeArchive/ListeArchive"
import { addBook } from '../../../services/livres.service'

import {fetchbooksActive,fetchbooksArchive ,fetchBooks ,updateBook, archiveBook} from '../../../services/livres.service'


import "./ListeLivres.css"




function ListeLivres() {

  const[modeAdmin,setModeAdmin]=useState(false)
  const [activeBooks,  setActiveBooks] = useState([])
  const [archivedBooks, setArchivedBooks] = useState([])

  const [searchValue, setSearchValue] = useState("")


  useEffect(()=>{
    let user = localStorage.getItem('user')
    if(user ==="admin"){
        setModeAdmin(true)
    }

  },[])
  //livres actives 

  useEffect(() => {
    const fetchData =  () => {
      const result = fetchbooksActive()
      setActiveBooks(result)
    }
    //console.log("useEffect: fetch active books")
  
    fetchData()
  }, [])

  // livres archives

  useEffect(() => {
    const fetchData =  () => {
      //setLoading(true)
      const result =  fetchbooksArchive()
      setArchivedBooks(result)
      //setLoading(false)
    }
    console.log("useEffect")

    fetchData()
  }, [])
//recherche
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
    setActiveBooks(previousActiveBooks=> [...previousActiveBooks,{id:previousActiveBooks.length+3,EAN, libelle,auteur,edition,nbExemplaires}])

  }
  const memoizedCallbackAjoutBook = useCallback(AjouterLivre, [])

  const MiseAjourLivre =(id,EAN, libelle,auteur,edition,nbExemplaires)=>{
    updateBook(id,parseInt(EAN), libelle,auteur,parseInt(edition),parseInt(nbExemplaires))
    const newActiveBooks = activeBooks.map(book =>book.id===id ? ({id,EAN, libelle,auteur,edition,nbExemplaires}):book)
    setActiveBooks(newActiveBooks)
  }
  const ArchiverLivre =(id)=>{
    archiveBook(id)
    const newActiveBooks = activeBooks.filter(book =>book.etat==="actv")
    setActiveBooks(newActiveBooks)
    const newArchivedBooks =  fetchbooksArchive()
    setArchivedBooks(newArchivedBooks)
  }

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

        <ListeActive booksActive={activeBooks} deleteBook={deleteActiveBook} AjouterLivre={memoizedCallbackAjoutBook} MiseAjourLivre={MiseAjourLivre} ArchiverLivre={ArchiverLivre} /> 
        
        {modeAdmin &&(  
          <ListeArchive booksArchived={archivedBooks} deleteBook={deleteActiveBook}  MiseAjourLivre={MiseAjourLivre}/>              
        )}
        </div>

         <div className="homepage"></div>


    </div>
 
)
}

export default ListeLivres

