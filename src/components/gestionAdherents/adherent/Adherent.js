import React ,{useState} from "react"
//, { useState } 
import PropTypes from "prop-types"
import {
  DeleteOutlined,EditOutlined,CheckOutlined,CloseOutlined,UserOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom'
import { Alert } from 'antd';
import './Adherent.css';

;

export default function Adherent({
 id,
 cin,
  nom,
  prenom,
  dateNaissance,
  email,
  liste,
  deleteMember,
  ModifierMember,
  BannirMember,
  ActiverMember
}) {
  const[ Adherentactive, setactiverAdherent]=useState(false)
  const[ Adherentbanni, setbannirAdherent]=useState(false)
  const [updateMode, setUpdateMode] = useState(false)
  const [FnameToUpdate, setFnameToUpdate] = useState(nom)
  const [LnameToUpdate, setLnameToUpdate] = useState(prenom)
  const [DateNToUpdate, setdateNToUpdate] = useState(dateNaissance)
  const [EmailToUpdate, setemailToUpdate] = useState(email)
  const [cinToUpdate, setcinToUpdate] = useState(cin)
  const Bannir =()=>{
    BannirMember(id)
    setbannirAdherent(true)
   }
   const Activer =()=>{
    ActiverMember(id)
    setactiverAdherent(true)
   }
   const Modifier =()=>{
    ModifierMember (id,cinToUpdate, FnameToUpdate, LnameToUpdate,DateNToUpdate,EmailToUpdate)
    setUpdateMode(false)
   }
  

  return (
  
      <div className="adherenttable">

         {Adherentactive &&(
           <Alert message="Adhérent activé " type="success" showIcon />
           )}
             {Adherentbanni &&(
           <Alert message="Adhérent banni " type="success" showIcon />
           )}
      {!updateMode ? (
        <>
          <div className="adherent">
               

        <table>
          <tbody>
        <tr>
          <td>{nom}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>



          <td>{prenom}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
 
           <td>{cin}</td>

           
           <td className="ButtonSection">
           <button data-testid="UpdateAdh" className="button" style={{background:"LightSteelBlue"}}onClick={()=>setUpdateMode(true)}>
           <EditOutlined style={{ fontSize: '18px' }} />
            </button>
             
   
           <button data-testid="deleteAdh" className="button" style={{background:"Plum"}}onClick={() => deleteMember(id)}>
           <DeleteOutlined style={{ fontSize: '18px' }}/>

            </button>
             
           
        
              {liste ==="active" &&(
                                       
                                       <button  data-testid="BannirAdh" className="button" style={{background:"darksalmon"}} onClick={Bannir}>
                                          <CloseOutlined style={{ fontSize: '18px' }}  /><b>Bannir</b>  
                                       </button>
                                   
             ) }
                   {liste ==="Banni" &&(
                                     
                                       <button data-testid="ActiveAdh" className="button" style={{background:"lightgreen"}} onClick={Activer}>
                                         <CheckOutlined style={{ fontSize: '18px' }} />  <b>Activer</b> 
                                       </button>
                                
  
             ) } 
           <Link to={`/adminPage/ListeAdherents/${id}`}>  <UserOutlined style={{ fontSize: '26px' }} /></Link> 
           </td>
           
           </tr>
           </tbody>
      </table>
      </div>
      </>
      ) : (
        <div>
          <input
            type="text"
            name=" nom"
            value={FnameToUpdate}
            onChange={e => setFnameToUpdate(e.target.value)}
          />
          <input
            type="text"
            value={LnameToUpdate}
            name="prenom"
            onChange={e => setLnameToUpdate(e.target.value)}
          />
          <input
            type="number"
            value={cinToUpdate}
            name="cin"
            onChange={e => setcinToUpdate(e.target.value)}
          />
                     <input
            type="date"
            value={DateNToUpdate}
            name="email"
            onChange={e => setdateNToUpdate(e.target.value)}
          />
          <input
            type="text"
            value={EmailToUpdate}
            name="email"
            onChange={e => setemailToUpdate(e.target.value)}
          />


          <button data-testid="ModifierAdherent" className="button" style={{background:"grey"}}onClick={Modifier}>
              Modifier adhérent
            </button>
        </div>
      )}
    </div>
  )
}
Adherent.propTypes = {
  cin: PropTypes.string.isRequired,
  nom: PropTypes.string.isRequired,
  prenom: PropTypes.string.isRequired,
  dateNaissance: PropTypes.string.isRequired,
}
