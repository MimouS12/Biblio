import React  from "react"


import "./Home.css";
import { Layout } from 'antd';
const { Footer} = Layout;

function Home() {

  return (
    
      <>
      <div className="homepage"></div>
      <div className='homedesc'>
    <h1>Bienvenue à INMA</h1>
    <div className="descBiblio">

   <div> Accédez à notre bibliothèque numérique où que vous soyez. En tant que membre de la bibliothèque numérique INMA , vous disposerez d’une multitude de ressources, que ce soit des ressources d'étude en ligne, des livres électroniques et des livres audios populaires, ou encore des films et des documentaires reconnus.<div>Et ce n'est pas tout : L'adhésion à la bibliothèque numérique vous donne accès à des magazines et des journaux, des bandes dessinées et des romans graphiques provenant du monde entier, ainsi qu’a des ressources d'apprentissage pour développer vos compétences et l'accès à des contenus exclusifs de nos partenaires au Royaume-Uni.</div>
   </div> 
   <div>Toutes les adhésions à la bibliothèque numérique seront gratuites jusqu'au 1er septembre 2020. </div>
          <br/>  
      </div>
             <>
               <div className="homepage"></div>
               </>



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

    {/* <div className="homepage"></div>
    <div className="homepage"></div> */}
     </div>

   </>

  )
}
export default Home