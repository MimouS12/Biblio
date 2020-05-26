import React, { useState, useEffect } from "react"
// useCallback,
import {fetchbooksActive ,fetchBooks } from '../../../../services/livres.service'
import Livre from "../../livre/Livre"

function ListeActive() {
  const [activeBooks, setActiveBooks] = useState([])
  const [searchValue, setSearchValue] = useState("")



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




  
  
  return (
    
    <div className="adherents-list">
      <h1>Liste des livres </h1>
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
                />

      })}
    </div>
  </div>
)
}

export default ListeActive

