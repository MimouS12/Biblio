import React, { useState, useRef, memo, useEffect } from "react"
//import './FormAdd.css'
//import { addBook, fetchBooks } from '../../../services/livres.service'

function BookForm( {addBook }) {
  const [books, setbooks] = useState([])
  const [libelle, setlibelle] = useState("")
  const [auteur, setauteur] = useState("")

  
   const inputlibelle = useRef(null)
  const handleAddBook = () => {
      addBook ( libelle,auteur)
    inputlibelle.current.focus()
    setlibelle("")
    setauteur("")
   
  } 
 /*  useEffect(() => {
    document.libelle =libelle

    // setTitle("hello"+ Math.random())
  })
 */

 
  return (
    <div className="task-form">
      <input
        type="text"
        name="libelle"
        value={libelle}
        ref={inputlibelle}
        onChange= {e => setlibelle(e.target.value)}
      />
      <input
        type="text"
        value={auteur}
        name="auteur"
        onChange={e => setauteur(e.target.value)}
      />
      <button className="button" onClick={handleAddBook}>
        Ajouter
      </button>
    </div>
  )
}
export default memo(BookForm)