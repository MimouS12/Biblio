import React , { useState, useEffect } from "react"
import "./ListeAd.css"
import ListeActive from "./listeActive/listeactive"
import {fetchadherentsActive,fetchadherents , fetchadherentsBanni,bannirAdherent,activerAdherent,updateAdherent } from "../../../services/adherents.service"
import  ListeBanni from "./listeBanni/listebanni"



function ListeAdherents() {

  const [activeadherents, setActiveAdherents] = useState([])
  const [banniAdherents, setBanniAdherents] = useState([])
  const [searchValue, setSearchValue] = useState("")

  //adherents actives
  useEffect(() => {
    const fetchData =  () => {
      const result =  fetchadherentsActive()
      setActiveAdherents(result)
    }
    console.log("useEffect")

    fetchData()
  }, [])

  // adherents bannis
  useEffect(() => {
    const fetchData =  () => {
      //setLoading(true)
      const result =  fetchadherentsBanni()
      setBanniAdherents(result)
      //setLoading(false)
    }
    console.log("useEffect")

    fetchData()
  }, [])

  //recherche
  useEffect(() => {
   let didCancel = false
   const fetchData = async () => {
       const result = await fetchadherents(searchValue)
       console.log("result: ", didCancel)
       if (!didCancel) {
         setActiveAdherents(result)
       }

     
   }
   // console.log("useEffect:", searchValue)
   fetchData()

   return () => {
     console.log("cleanup: ", searchValue)
     didCancel = true
   }

 }, [searchValue])

 const BannirMember =(id)=>{
  bannirAdherent(id)
  alert("you will bannir this member")
  const newActiveAdherents = activeadherents.filter(mem =>mem.etat==="active")
  setActiveAdherents(newActiveAdherents)
  const newBannisAdherents=  fetchadherentsBanni()
  setBanniAdherents(newBannisAdherents)
 }

 const ActiverMember =(id)=>{

  activerAdherent(id)
  alert("you will active this member")
  const newBannisAdherents = banniAdherents.filter(mem =>mem.etat==="banni")
  setBanniAdherents(newBannisAdherents)

  const newActivesAdherents =  fetchadherentsActive()
  setActiveAdherents(newActivesAdherents)
 }

 const ModifierMember =(id,cin,fname,lname,dateN,email)=>{
  updateAdherent (id,cin, fname, lname,dateN,email)
  const newactiveadherents = activeadherents.filter(book =>book.etat==="active")
  setActiveAdherents(newactiveadherents)
 }
//  const ModifierMemberBanni =(id,cin,fname,lname)=>{
//   updateAdherent (id,cin, fname, lname)
//   const newBanniMembrs = banniAdherents.map(mem =>mem.id===id ? ({id,cin,fname,lname}):mem)
//   setBanniAdherents(newBanniMembrs)
//  }

 const deleteMember= (id) => {
   const newadherents = activeadherents.filter( adherent=>   adherent.id !== id)
   setActiveAdherents(newadherents)
 }

 const deleteMemberBanni= (id) => {
  const newadherents = banniAdherents.filter( adherent=>   adherent.id !== id)
  setBanniAdherents(newadherents)
}
  return (
    <div className='P2'>
            
            <div className="homepage"></div>
            <div  className="page">
              
      <div className="search">
          <input
            type="search"
            name="search"
            placeholder=" nom/ prénom"
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
          />
        </div>
         <ListeActive activeadherents={activeadherents} deleteMember={deleteMember}  ModifierMember={ModifierMember} BannirMember={BannirMember}/>
         <br/>
          <ListeBanni banniAdherents={banniAdherents} deleteMember={deleteMemberBanni} ModifierMember={ModifierMember} ActiverMember={ActiverMember}/>     
          </div>       
          <div className="homepage"></div>
  
      

    </div>

)
}

export default ListeAdherents


