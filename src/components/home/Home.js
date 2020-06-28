import React ,{useState,useEffect} from "react"


import "./Home.css";
import { Layout } from 'antd';
const { Footer} = Layout;

function Home() {
  const[modeAdmin,setModeAdmin]=useState(false)
  const[modeMember,setModeMember]=useState(false)
  useEffect(()=>{
    var user = localStorage.getItem('user')

    if(user ==="admin"){
        setModeAdmin(true)
    }else{
      
        setModeMember(true)
      }}, [])

  return (
    
      <>
      <div className="homepage"></div>
      <div className='homedesc'>
    <h1>Bienvenue à INMA</h1>
    <p className="descBiblio">
   {/*  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
    officia deserunt mollit anim id est laborum.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
    deserunt mollit anim id est laborum */}
   <div> Accédez à notre bibliothèque numérique où que vous soyez. En tant que membre de la bibliothèque numérique INMA , vous disposerez d’une multitude de ressources, que ce soit des ressources d'étude en ligne, des livres électroniques et des livres audios populaires, ou encore des films et des documentaires reconnus.<div>Et ce n'est pas tout : L'adhésion à la bibliothèque numérique vous donne accès à des magazines et des journaux, des bandes dessinées et des romans graphiques provenant du monde entier, ainsi qu’a des ressources d'apprentissage pour développer vos compétences et l'accès à des contenus exclusifs de nos partenaires au Royaume-Uni.</div>
   </div> 
   <div>Toutes les adhésions à la bibliothèque numérique seront gratuites jusqu'au 1er septembre 2020. </div>
    </p>
    {modeAdmin  &&(
             <>
               <div className="homepage"></div>
               </>

)} 
{modeMember &&(
   <>
    <Footer className='footer'  style={{ textAlign: 'center' }}><div>© 2020 INMA</div>
    <div>
    CONTACT:
   INMA@gmail.com
    <br></br>
    Tel: 71125136 /52126460 
  
    <br></br>
    Adresse: 13 Rue Ibn Nadim, 1073 Montplaisir, Tunis
    </div>
     </Footer>
     </>

)}  
    {/* <div className="homepage"></div>
    <div className="homepage"></div> */}
     </div>

   </>

  )
}
export default Home