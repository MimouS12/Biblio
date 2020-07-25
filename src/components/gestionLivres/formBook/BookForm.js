import React, { useState, useRef, memo} from "react"
import './BookForm.css'

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
      <div className="inputAjoutBook">
      
      <div className="labelinputBook"> EAN</div>  

        <input
        aria-label="EAN-addbook"
        type="number"
        name="EAN"
        value={EAN}
        onChange= {e => setEAN(Number(e.target.value))}
      />
      </div>
<div className="inputAjoutBook">
 
<div className="labelinputBook"> Libelle</div>  

      <input
      aria-label="libelle-addbook"
        type="text"
        name="libelle"
        value={libelle}
        ref={inputlibelle}
        onChange= {e => setlibelle(e.target.value)}
      />
</div>
<div className="inputAjoutBook">
   <div className="labelinputBook"> Auteur</div>  
      <input
      aria-label="auteur-addbook"
        type="text"
        value={auteur}
        name="auteur"
        onChange={e => setauteur(e.target.value)}
      />
</div>
<div className="inputAjoutBook">
   <div className="labelinputBook"> Edition</div>  

      <input
      aria-label="edition-addbook"
        type="number"
        name="edition"
        value={edition}
        onChange= {e => setEdition(Number(e.target.value))}
        required
      />
</div>
<div className="inputAjoutBook">     <div className="labelinputBook">  Nombre d'exemplaires </div>  

      <input
     aria-label="NombreExemplaires-addbook"
        type="number"
        name="NombreExemplaires"
        value={nbExemplaires}
        onChange= {e => setNbExemplaires(Number(e.target.value))}
      /></div>
    
  
      <button data-testid="submit-book" className="buttonAjoutLivre" onClick={handleAddBook}>
       <b>Ajouter</b>  
      </button>

      {nbExemplaires > maxExemplaireValue && (
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