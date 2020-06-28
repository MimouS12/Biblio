const adherents = [
    {id :"1",
    cin:"07480781",
    nom:"Maryem",
    prenom:"Souayah",
    dateNaissance:"1996-12-12", 
    //on peut utiliser email comme username w cin comme mot de passe pour login
    email:"maryemsouayah3@gmail.com",
    //etat du compte adherent active ou banni
    etat :"active"
    },
    {id :"2",
    cin:"07480700",
    nom:"Intissar",
    prenom:"Chrigui",
    dateNaissance:"1995-02-08",  
    email:"intissarchrigui@gmail.com",
    etat :"active"
    },
    {id :"3",
    cin:"07480701",
    nom:"Eslem",
    prenom:"khemiri",
    dateNaissance:"1996-12-23", 
    email:"eslemkhmiri@gmail.com",
    etat :"banni"
    },
    {id :"4",
    cin:"07480808",
    nom:"Rania",
    prenom:"Arbi",
    dateNaissance:"1996-08-05", 
    email:"raniabelarbi@gmail.com",
    etat :"active"
    },
    {id :"5",
    cin:"07480810",
    nom:"Khouloud",
    prenom:"Yaakoubi",
    dateNaissance:"1996-05-04", 
    email:"khouloudyaakoubi@gmail.com",
    etat :"active"
    },
    {id :"6",
    cin:"07480702",
    nom:"Marwa",
    prenom:"Chrigui",
    dateNaissance:"1993-06-15", 
    email:"marwachrigui@gmail.com",
    etat :"banni"
    }
  ]

  export const addMember = function (cin,nom,prenom, date,email) {
    adherents.push({ id: (adherents.length + 1).toString(),cin, nom,prenom,date,email,etat:"active"});
    console.log('member added successfully !!');
   }
  //exemple ta3 s'authentifier ylawj 3la email w cin tda5elhom fl liste elli aandna 
  //3ayetlha fl login 
  
  export const fetchMemberByemailCIN=async(email , cin)=>{
      return adherents.find(ad => ad.email===email && ad.cin===cin)
    
  }
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
  export const fetchadherentsActive =  () => {
     return adherents.filter(adherent => adherent.etat==="active")
  }
  export const fetchadherentsBanni =  () => {
    return adherents.filter(adherent => adherent.etat==="banni")
 }
  export const fetchadherent = async searchValue => {
    await delay(200)
     return adherents
    //return tasks.filter(task => task.title.includes(searchValue))
  }
  export const fetchadherents = async searchValue => {
    await delay(3000)
    // recherche book par libelle et par nom d'auteur
    return adherents.filter(adherent =>adherent.etat==="active" &&(adherent.nom.includes(searchValue)|| adherent.prenom.includes(searchValue)))
  }

  export const fetchAdherentById=(adherentId)=>{
    //await delay(200)
    return adherents.find(adherent => adherent.id===adherentId)
  }
  const setetat = (id,etat) =>{
    for (let i = 0; i <adherents.length; i++) {
      if(adherents[i].id === id){
      adherents[i].etat =etat
      }
    }
  }
  export const bannirAdherent = function (id) {
    setetat(id,"banni")
    console.log('Adherent is banni !!!');
      } 
      export const activerAdherent = function (id) {
        setetat(id,"active")
        console.log('Adherent is active !!!');
          } 
        
      
          const setcin = (id,cin) =>{
            for (let i = 0; i < adherents.length; i++) {
              if(adherents[i].id === id){
                adherents[i].cin =cin
              }
            }
          }
          const setnom = (id,nom ) =>{
            for (let i = 0; i <adherents.length; i++) {
              if(adherents[i].id === id){
                adherents[i].nom  =nom 
              }
            }
          }
          const setprenom = (id,prenom) =>{
            for (let i = 0; i <adherents.length; i++) {
              if(adherents[i].id === id){
                adherents[i].prenom =prenom
              }
            }
          }
      
   export const updateAdherent = function (id,cin,nom,prenom) {
    setcin(id,cin)
    setnom(id,nom)
    setprenom (id,prenom)
  console.log('member is Updated !!!');
    }