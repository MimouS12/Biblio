const { 
    DemanderInscription,
    AccepterDemande,
    RefuserDemande,
  } = require("../services/demandes.service")
  const { 
    fetchadherent
  } = require("../services/adherents.service")

describe("test demande", () => {
    test(" test setting demande correctly (inscription)", ()=>{
        const values = {
            nom :"demande",
            prenom:"test",
            email : "demandetest@gmail.com",
            cin :11873652,
            'date-picker': '2010-02-06'
            }; 
        var expected = [{
            id: 0 ,
            nom:values["nom"],
            prenom:values["prenom"],
            email : values["email"],
            cin :values["cin"],
            date:values["date-picker"]
           }];

           DemanderInscription(values)

           var demandesEnregistrés = JSON.parse(localStorage.getItem('demandes'))

       
         expect(demandesEnregistrés).toStrictEqual(expected);
       })
    test(" test ajouter demande (accepter demande) à la liste des adherents", ()=>{
           //accepter la demande ajouté dans le test précedent 
        AccepterDemande(0)
        const Adherents =fetchadherent()
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
            cin:"11873652",
            nom:"demande",
            prenom:"test",
            dateNaissance:"2010-02-06", 
            email:"demandetest@gmail.com",
            etat :"active"
            }]
         expect(Adherents).toStrictEqual(expected);
         var demandesEnregistrés = JSON.parse(localStorage.getItem('demandes'))
         expect(demandesEnregistrés).toStrictEqual([])

       })
       test(" test Refuser demande ", ()=>{

        const values = {
            nom :"demandeRefuse",
            prenom:"testRefuse",
            email : "demandetestREFUSE@gmail.com",
            cin :2222222,
            'date-picker': '2012-02-06'
            }; 
           //pour ajouter une nouvelle demande pour la refuser
        DemanderInscription(values)

        RefuserDemande(0)
        const expected=[]

      var demandesEnregistrés = JSON.parse(localStorage.getItem('demandes'))
      //console.log("aaaaaaaaaaaaaaaaaaaaa"+demandesEnregistrés[0])
      expect(demandesEnregistrés).toStrictEqual(expected)

    })
})
