import React, { useState, useEffect } from "react"
// useCallback,

import {fetchbooksArchive } from '../../../../services/livres.service'
import Livre from "../../livre/Livre"

function ListeArchive() {
  const [archivedBooks, setArchivedBooks] = useState([])
  //const [loading, setLoading] = useState(false)
 //const [searchValue, setSearchValue] = useState("")

 // const [isVisible, setIsVisible] = useState(true)

   useEffect(() => {
     const fetchData =  () => {
       //setLoading(true)
       const result =  fetchbooksArchive ()
       setArchivedBooks(result)
       //setLoading(false)
     }
     console.log("useEffect")

     fetchData()
   }, [])

   const updateLivre = (id, libelle,auteur) => {
    const newbooks =archivedBooks.map( book =>
      book.id === id ? { libelle,auteur } : book
    )
    setArchivedBooks(newbooks)
  }

  const deleteBook= id => {
    const newbooks  = archivedBooks.filter( book =>  book.id !== id)
    setArchivedBooks(newbooks)
  }
  
  return (
    
    <div className="adherents-list" >
      <h1 className="Titre1">Liste des livres archivées</h1>
      <div> <table  className="entete-tab">

      <tr >
        <th>Libelle</th>
        <th></th><th></th><th></th><th></th><th></th><th></th><th></th>
        <th>auteur</th>
        <th></th>
      </tr>
      </table>
      </div>
      
  
    <div>
      {archivedBooks.map(book => {
         return  <Livre
         key={book.id}
          id={book.id}
          libelle={book.libelle}
          auteur={book.auteur}
          updateLivre={updateLivre}
          deleteBook={deleteBook}
     />
        
      })}
    </div>
  </div>
)
}

export default ListeArchive

