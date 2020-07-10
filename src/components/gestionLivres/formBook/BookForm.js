import React, { useState, useRef, memo} from "react"
//import './FormAdd.css'

function BookForm({AjouterLivre,maxExemplaireValue}) {
  //const [books, setbooks] = useState([])
  const [libelle, setlibelle] = useState("")
  const [auteur, setauteur] = useState("")
  const [EAN, setEAN] = useState(9782203135215)
  const [edition, setEdition] = useState(2000)
  const [nbExemplaires, setNbExemplaires] = useState(3)



  //EAN, libelle,auteur,edition,nbExemplaires
  
  const inputlibelle = useRef(null)
  const handleAddBook = () => {
    AjouterLivre(EAN, libelle,auteur,edition,nbExemplaires)
    inputlibelle.current.focus()
    setlibelle("")
    setauteur("")
    setEAN()
    setEdition()
    setNbExemplaires()
   
  } 

 
  return (
    <div className="book-form">
      EAN
        <input
        aria-label="EAN-addbook"
        type="number"
        name="EAN"
        value={EAN}
        onChange= {e => setEAN(e.target.value)}
      />
      Libelle du livre 
      <input
      aria-label="libelle-addbook"
        type="text"
        name="libelle"
        value={libelle}
        ref={inputlibelle}
        onChange= {e => setlibelle(e.target.value)}
      />
      Auteur 
      <input
      aria-label="auteur-addbook"
        type="text"
        value={auteur}
        name="auteur"
        onChange={e => setauteur(e.target.value)}
      />
      Edition
      <input
      aria-label="edition-addbook"
        type="number"
        name="edition"
        value={edition}
        onChange= {e => setEdition(e.target.value)}
        required
      />
      Nombre d'exemplaires 
      <input
     aria-label="NombreExemplaires-addbook"
        type="number"
        name="NombreExemplaires"
        value={nbExemplaires}
        onChange= {e => setNbExemplaires(Number(e.target.value))}
      />
      <button data-testid="submit-book" className="button" onClick={handleAddBook}>
        Ajouter un nouveau livre
      </button>
      {nbExemplaires> maxExemplaireValue && (
        <div data-testid="error-NombreExemplaires" className="error">
          The number of exemplaire must be less than {maxExemplaireValue}
        </div>
      )}
      
    </div>
  )
}
BookForm.defaultProps = {
  maxExemplaireValue: 60,
}
export default memo(BookForm)