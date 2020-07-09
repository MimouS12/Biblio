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
    cin:"07480808",
    nom:"Rania",
    prenom:"Arbi",
    dateNaissance:"1996-08-05", 
    email:"raniabelarbi@gmail.com",
    etat :"active"
    },
    {id :"4",
    cin:"07480810",
    nom:"Khouloud",
    prenom:"Yaakoubi",
    dateNaissance:"1996-05-04", 
    email:"khouloudyaakoubi@gmail.com",
    etat :"active"
    },
    {id :"5",
    cin:"07480702",
    nom:"Marwa",
    prenom:"Chrigui",
    dateNaissance:"1993-06-15", 
    email:"marwachrigui@gmail.com",
    etat :"banni"
    },
    {id :"6",
    cin:"07480701",
    nom:"Eslem",
    prenom:"khemiri",
    dateNaissance:"1996-12-23", 
    email:"eslemkhmiri@gmail.com",
    etat :"banni"
    }
  ]

  export const fetchMemberByemailCIN=(email , cin)=>{
    return adherents.find(ad => ad.email===email && ad.cin===cin)
  
}

  // function delay(ms) {
  //   return new Promise(resolve => setTimeout(resolve, ms))
  // }
  export const fetchadherentsActive =  () => {
     return adherents.filter(adherent => adherent.etat==="active")
  }
  export const fetchadherentsBanni =  () => {
    return adherents.filter(adherent => adherent.etat==="banni")
 }
  export const fetchadherents =  searchValue => {
    //await delay(3000)
    // recherche book par libelle et par nom d'auteur
    return adherents.filter(adherent =>adherent.etat==="active" &&(adherent.nom.includes(searchValue)|| adherent.prenom.includes(searchValue)))
  }

  export const fetchAdherentById=(adherentId)=>{
    //await delay(200)
    return adherents.find(adherent => adherent.id===adherentId)
  }
  

  export const bannirAdherent = function (id) {
    adherents.forEach((adh) => {
      if (adh.id=== id) {
       adh.etat="banni"
      }
    })
    console.log('Adherent is banni !!!');
      } 
      export const activerAdherent = function (id) {
        adherents.forEach((adh) => {
          if (adh.id=== id) {
           adh.etat="active"
          }
        })
        console.log('Adherent is active !!!');
          } 
        
      
   export const updateAdherent = function (id,cin,nom,prenom,dateNaissance,email) {
    adherents.forEach((adh) => {
      if (adh.id=== id) {
        adh.cin=cin
        adh.nom=nom
        adh.prenom=prenom
        adh.dateNaissance=dateNaissance
        adh.email=email
      }
    })

  console.log('member is Updated !!!');

    }
    export const addMember = function (cin,nom,prenom, dateNaissance,email) {
      adherents.push({ id: (adherents.length + 1).toString(),cin :(cin).toString(), nom,prenom,dateNaissance,email,etat:"active"});
      console.log('member added successfully !!');
     }
     export const fetchadherent =  () => {
        return adherents
     }