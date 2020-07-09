const { fetchMemberByemailCIN,
    fetchadherentsActive,
    fetchadherentsBanni,
    fetchadherents,
    fetchAdherentById,bannirAdherent,fetchadherent,
    activerAdherent,
    addMember,
    updateAdherent
  } = require("../services/adherents.service")

  describe("test fetch Member par email and CIN pour  login ", () => {

    test("recherche  adherent par email et CIN avec succés ", ()=>{
      const email="maryemsouayah3@gmail.com" , CIN="07480781"
      const expected =     {id :"1",
      cin:"07480781",
      nom:"Maryem",
      prenom:"Souayah",
      dateNaissance:"1996-12-12", 
      email:"maryemsouayah3@gmail.com",
      etat :"active"
      }
       expect(fetchMemberByemailCIN(email,CIN)).toStrictEqual(expected);
         
     })
     test("recherche  adherent  inexsitant par email et CIN  ", ()=>{
        const email="inexistant@gmail.com" , CIN="00000000"
        const expected =undefined
         expect(fetchMemberByemailCIN(email,CIN)).toStrictEqual(expected);
           
       })
  })
  describe("test fetch Active Members & banned Members", () => {

    test("recherche des adherents actives avec succés ", ()=>{
      const expected=[ 
          {id :"1",
      cin:"07480781",
      nom:"Maryem",
      prenom:"Souayah",
      dateNaissance:"1996-12-12", 
      email:"maryemsouayah3@gmail.com",
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
      }

      ]
      expect(fetchadherentsActive()).toStrictEqual(expected);
     
     })

     test("recherche des livres bannis avec succés ", ()=>{
      const expected=[
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
      expect(fetchadherentsBanni()).toStrictEqual(expected);
     
     })
  })
  describe("test fetch  par nom /prenom", () => {
    
    test("recherche par nom avec succés renvoie un seule adherent", ()=>{
      const expected = [ {id :"3",
      cin:"07480808",
      nom:"Rania",
      prenom:"Arbi",
      dateNaissance:"1996-08-05", 
      email:"raniabelarbi@gmail.com",
      etat :"active"
      }]
       expect(fetchadherents("Ran")).toStrictEqual(expected);
    })

    test("recherche par prénom avec succés renvoie un seule adherent", ()=>{
      const expected = [    
          {id :"4",
          cin:"07480810",
          nom:"Khouloud",
          prenom:"Yaakoubi",
          dateNaissance:"1996-05-04", 
          email:"khouloudyaakoubi@gmail.com",
          etat :"active"
      }]
       expect(fetchadherents("Yaak")).toStrictEqual(expected);
    })
    test("recherche par nom/ prenom inexistants avec succés *tableau vide*", ()=>{
      const expected = []
       expect(fetchadherents("Memberinexistant")).toStrictEqual(expected);
    })


  })
  describe("test fetch by id du Member ", () => {

    test("recherche par id avec succés ", ()=>{
      const expected ={id :"5",
      cin:"07480702",
      nom:"Marwa",
      prenom:"Chrigui",
      dateNaissance:"1993-06-15", 
      email:"marwachrigui@gmail.com",
      etat :"banni"
      }
      //console.log("the book is "+fetchBookById("10")["libelle"])
       expect(fetchAdherentById("5")).toStrictEqual(expected);
         
     })
  })

  describe("test pour la fonction Bannir et Activer Member ", ()=>{
    test("Bannir un adherent avec succés ", () => {

      const id ="3" ,
      etatBanni="banni";
      bannirAdherent(id)
      const expected= [
        {id :"1",
        cin:"07480781",
        nom:"Maryem",
        prenom:"Souayah",
        dateNaissance:"1996-12-12", 
        email:"maryemsouayah3@gmail.com",
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
        etat :etatBanni
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
       const adhs =fetchadherent()
       
       expect(adhs).toStrictEqual(expected);
  
    });
    test("Activer un adherent avec succés ", () => {

        const id ="3" ,
        etatActive="active";
        activerAdherent(id)
        const expected= [
          {id :"1",
          cin:"07480781",
          nom:"Maryem",
          prenom:"Souayah",
          dateNaissance:"1996-12-12", 
          email:"maryemsouayah3@gmail.com",
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
          etat :etatActive
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
         const adhs =fetchadherent()
         
         expect(adhs).toStrictEqual(expected);
    
      });
})
describe("test  pour la fonction ajouter/Modifier adherent ", ()=>{

    test("L'adherent est ajoutée avec succés ", ()=>{
      const CIN ="1111111",
          Nom= "NomTest", 
         Prenom="PrenomTest",
         Date="1912-12-12",
         Email ="Test@gmail.com";
         addMember(CIN,Nom,Prenom,Date,Email)
         const   expected= [
        {id :"1",
        cin:"07480781",
        nom:"Maryem",
        prenom:"Souayah",
        dateNaissance:"1996-12-12", 
        email:"maryemsouayah3@gmail.com",
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
        },{
          id:"7",
          cin:CIN,
          nom : Nom ,
          prenom : Prenom ,
          dateNaissance : Date,
          email :Email,
          etat:"active"
        }
             ]
         const Adhs =fetchadherent()
         expect(Adhs).toStrictEqual(expected);
         
     })    
     test("Modifier Adherent avec succés", ()=>{
        const id="7",CINUpdate ="2222222",
            NomUpdated= "NomUpdated", 
           PrenomUpdated="PrenomUpdated",
           DateUpdated="1995-12-12",
           EmailUpdated="TestUpdated@gmail.com";
           updateAdherent(id,CINUpdate,NomUpdated,PrenomUpdated,DateUpdated,EmailUpdated)
           const   expected= [
          {id :"1",
          cin:"07480781",
          nom:"Maryem",
          prenom:"Souayah",
          dateNaissance:"1996-12-12", 
          email:"maryemsouayah3@gmail.com",
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
          },{
            id:"7",
            cin:CINUpdate,
            nom : NomUpdated ,
            prenom : PrenomUpdated ,
            dateNaissance : DateUpdated,
            email :EmailUpdated,
            etat:"active"
          }
               ]
           const Adhs =fetchadherent()
           expect(Adhs).toStrictEqual(expected);
           
       })
     //id,cin,nom,prenom

    })