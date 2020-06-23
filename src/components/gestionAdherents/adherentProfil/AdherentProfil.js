import React, { useEffect, useState } from "react"
import { fetchAdherentById } from "../../../services/adherents.service"
import { useParams } from "react-router-dom"
import ListeEmpruntAdh from "../../gestionEmprunts/ListeEmpruntAdh/ListeEmpruntAdh"
import './AdherentProfil.css'

function AdherentProfil() {
  const [loading, setLoading] = useState(false)
  const [adherent, setAdherent] = useState({})
 
 
  const { adherentId } = useParams()
  console.log("useParams():",useParams());

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const result =  fetchAdherentById(adherentId)
        setAdherent(result)
        setLoading(false)

    }
    fetchData()
  }, [adherentId])

  return (
    <div className="adherent-details">
      <div className="header">Adherent Profil</div>  
      {loading ? (
        <div>Loading ... </div>
      ) : (
        <>
          <div className="title">Cin</div>
          <div className="value">{adherent.cin}</div>

          <div className="title">Nom</div>
          <div className="value">{adherent.nom}</div>

          <div className="title">Prenom</div>
          <div className="value">{adherent.prenom}</div>

          <div className="title">Date Naissance</div>
          <div className="value">{adherent.dateNaissance}</div>
          <div className="title">Email</div>
          <div className="value">{adherent.email}</div>
          <ListeEmpruntAdh/>
        </>
      )}
    </div>
  )
}

export default AdherentProfil
