import React, { useEffect, useState } from "react"
import { fetchBookById } from "../../../services/livres.service"
import { useParams } from "react-router-dom"
import './LivreDetails.css'

function LivreDetails() {
  const [loading, setLoading] = useState(false)
  const [book, setBook] = useState({})
 
 
  const {livreId} = useParams()
  console.log("useParams():",useParams());
  
   useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const result = await fetchBookById(livreId)
      if(result){
      setBook(result)
      setLoading(false)
    }
    }
    fetchData()
  }, [livreId])

  return (
    <div >
      <h1>Livre détails </h1>  
      {loading ? (
        <div>Loading ... </div>
      ) : (
        <div>
          <div ><b>Libelle :</b> {book.libelle} </div>

          <div ><b>Auteur :</b> {book.auteur}</div>

          <div ><b>EAN :</b> {book.EAN}</div>

          <div ><b>Edition :</b> {book.edition}</div>
          <div ><b>Nombre d’exemplaires :</b> {book.nbExemplaires}</div>

        </div>
      )}
    </div>
  )
}

export default LivreDetails
