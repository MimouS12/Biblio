import React, { useState, useRef, memo, useEffect } from "react"
//import './FormAdd.css'
import { addBook } from '../../../services/livres.service'

function BookForm() {
  const [books, setbooks] = useState([])
  const [libelle, setlibelle] = useState("")
  const [auteur, setauteur] = useState("")
  const [EAN, setEAN] = useState(9782203135215)
  const [edition, setEdition] = useState(2000)
  const [nbExemplaires, setNbExemplaires] = useState(3)



  //EAN, libelle,auteur,edition,nbExemplaires
  
  const inputlibelle = useRef(null)
  const handleAddBook = () => {
      addBook(EAN, libelle,auteur,edition,nbExemplaires)
    inputlibelle.current.focus()
    setlibelle("")
    setauteur("")
    setEAN(9782203135215)
    setEdition(2000)
    setNbExemplaires(3)
   
  } 

 
  return (
    <div className="task-form">
      EAN
        <input
        type="number"
        name="EAN"
        value={EAN}
        onChange= {e => setEAN(e.target.value)}
      />
      Libelle du livre 
      <input
        type="text"
        name="libelle"
        value={libelle}
        ref={inputlibelle}
        onChange= {e => setlibelle(e.target.value)}
      />
      Auteur 
      <input
        type="text"
        value={auteur}
        name="auteur"
        onChange={e => setauteur(e.target.value)}
      />
      Edition
      <input
        type="number"
        name="edition"
        value={edition}
        onChange= {e => setEdition(e.target.value)}
      />
      Nombre d'exemplaires 
      <input
        type="number"
        name="NombreExemplaires"
        value={nbExemplaires}
        onChange= {e => setNbExemplaires(e.target.value)}
      />
      <button className="button" onClick={handleAddBook}>
        Ajouter un nouveau livre
      </button>
    </div>
  )
}
export default memo(BookForm)