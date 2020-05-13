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
    }
  ]
  //exemple ta3 s'authentifier ylawj 3la email w cin tda5elhom fl liste elli aandna 
  //3ayetlha fl login 
  export const fetchMemberByemailCIN=async(email , cin)=>{
      return adherents.find(ad => ad.email===email && ad.cin===cin)
    
  }