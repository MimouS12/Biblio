const { 
    fetchListeRetourne,fetchListeEnCours,fetchListeRetard,
    Emprunter,
    RetounerLivre
  } = require("../services/emprunts.service")

describe("test fetch Liste empruntes en cours/ retard/retourné avec succés", () => {

     test(" test fetch Liste empruntes en cours avec retourne liste", ()=>{
        var empruntsTest =[{idEmp:0,
        idLivre:"7",
        titreLivre:"Les malheurs de Sophie",
        idUser:"2",
        Usernom:"Intissar",
        etat:"retourné",
        dateEmp:"2020/07/02",
        dateRetour:"2020/07/02"},
        {idEmp:1,
            idLivre:"7",
            titreLivre:"Les malheurs de Sophie",
            idUser:"1",
            Usernom:"Maryem",
            etat:"encours",
            dateEmp:"2020/07/02",
            dateRetour:"En Cours"},
            {idEmp:3,
                idLivre:"7",
                titreLivre:"Les malheurs de Sophie",
                idUser:"3",
                Usernom:"Rania",
                etat:"EnCoursRetard",
                dateEmp:"2020/06/10",
                dateRetour:"En Cours"}
         ]
         var expected =[{idEmp:1,
            idLivre:"7",
            titreLivre:"Les malheurs de Sophie",
            idUser:"1",
            Usernom:"Maryem",
            etat:"encours",
            dateEmp:"2020/07/02",
            dateRetour:"En Cours"},
            {idEmp:3,
                idLivre:"7",
                titreLivre:"Les malheurs de Sophie",
                idUser:"3",
                Usernom:"Rania",
                etat:"EnCoursRetard",
                dateEmp:"2020/06/10",
                dateRetour:"En Cours"}

         ]
         expect(fetchListeEnCours(empruntsTest)).toStrictEqual(expected);
       })
       test(" test fetch Liste empruntes retourné avec succés", ()=>{
        var empruntsTest =[{idEmp:0,
        idLivre:"7",
        titreLivre:"Les malheurs de Sophie",
        idUser:"2",
        Usernom:"Intissar",
        etat:"retourné",
        dateEmp:"2020/07/02",
        dateRetour:"2020/07/02"},
        {idEmp:1,
            idLivre:"7",
            titreLivre:"Les malheurs de Sophie",
            idUser:"1",
            Usernom:"Maryem",
            etat:"encours",
            dateEmp:"2020/07/02",
            dateRetour:"En Cours"},
            {idEmp:3,
                idLivre:"7",
                titreLivre:"Les malheurs de Sophie",
                idUser:"3",
                Usernom:"Rania",
                etat:"EnCoursRetard",
                dateEmp:"2020/06/10",
                dateRetour:"En Cours"}
         ]
         var expected =[
            {idEmp:0,
                idLivre:"7",
                titreLivre:"Les malheurs de Sophie",
                idUser:"2",
                Usernom:"Intissar",
                etat:"retourné",
                dateEmp:"2020/07/02",
                dateRetour:"2020/07/02"}
         ]
         expect(fetchListeRetourne(empruntsTest)).toStrictEqual(expected);
       })
       test(" test fetch Liste empruntes en retard avec  succés (en cours et retard) ", ()=>{
        var empruntsTest =[{idEmp:0,
        idLivre:"7",
        titreLivre:"Les malheurs de Sophie",
        idUser:"2",
        Usernom:"Intissar",
        etat:"retourné",
        dateEmp:"2020/07/02",
        dateRetour:"2020/07/02"},
        {idEmp:1,
            idLivre:"7",
            titreLivre:"Les malheurs de Sophie",
            idUser:"1",
            Usernom:"Maryem",
            etat:"encours",
            dateEmp:"2020/06/02",
            dateRetour:"En Cours"},
            {
            idEmp:3,
            idLivre:"7",
            titreLivre:"Les malheurs de Sophie",
            idUser:"3",
            Usernom:"Rania",
            etat:"retourné",
            dateEmp:"2020/07/01",
            dateRetour:"En Cours"}
         ]
         var expected =[{idEmp:1,
            idLivre:"7",
            titreLivre:"Les malheurs de Sophie",
            idUser:"1",
            Usernom:"Maryem",
            etat:"EnCoursRetard",
            dateEmp:"2020/06/02",
            dateRetour:"En Cours"}
         ]
         expect(fetchListeRetard(empruntsTest)).toStrictEqual(expected);
       })
       test(" test fetch Liste empruntes en retard avec  succés (retourné mais en retard) ", ()=>{
        var empruntsTest =[{idEmp:0,
        idLivre:"7",
        titreLivre:"Les malheurs de Sophie",
        idUser:"2",
        Usernom:"Intissar",
        etat:"retourné",
        dateEmp:"2020/07/02",
        dateRetour:"2020/07/02"},
        {idEmp:1,
            idLivre:"7",
            titreLivre:"Les malheurs de Sophie",
            idUser:"1",
            Usernom:"Maryem",
            etat:"encours",
            dateEmp:"2020/07/02",
            dateRetour:"En Cours"},
            {
            idEmp:3,
            idLivre:"7",
            titreLivre:"Les malheurs de Sophie",
            idUser:"3",
            Usernom:"Rania",
            etat:"retourné",
            dateEmp:"2020/06/01",
            dateRetour:"2020/06/30"}
         ]
         var expected =[{
            idEmp:3,
            idLivre:"7",
            titreLivre:"Les malheurs de Sophie",
            idUser:"3",
            Usernom:"Rania",
            etat:"RetournerRetard",
            dateEmp:"2020/06/01",
            dateRetour:"2020/06/30"}
         ]
         expect(fetchListeRetard(empruntsTest)).toStrictEqual(expected);
       })
       test(" test fetch Liste empruntes en retard retourne liste vide car il n'y a pas de retard", ()=>{
        var empruntsTest =[{idEmp:0,
            idLivre:"7",
            titreLivre:"Les malheurs de Sophie",
            idUser:"2",
            Usernom:"Intissar",
            etat:"retourné",
            dateEmp:"2020/07/02",
            dateRetour:"2020/07/05"},
            {idEmp:1,
                idLivre:"7",
                titreLivre:"Les malheurs de Sophie",
                idUser:"1",
                Usernom:"Maryem",
                etat:"encours",
                dateEmp:"2020/06/20",
                dateRetour:"En Cours"},
                {
                idEmp:3,
                idLivre:"7",
                titreLivre:"Les malheurs de Sophie",
                idUser:"3",
                Usernom:"Rania",
                etat:"encours",
                dateEmp:"2020/06/30",
                dateRetour:"En Cours"}
             ]
             var expected =[]
             expect(fetchListeRetard(empruntsTest)).toStrictEqual(expected);
       })

       test(" test fetch Liste empruntes en cours Vide", ()=>{
        var empruntsVide =[]
         var expected =[]
         expect(fetchListeEnCours(empruntsVide)).toStrictEqual(expected);
       })
       test(" test fetch Liste empruntes en retard Vide", ()=>{
        var empruntsVide =[]
         var expected =[]
         expect(fetchListeRetard(empruntsVide)).toStrictEqual(expected);
       })
       
       test(" test fetch Liste empruntes retourné Vide", ()=>{
        var empruntsVide =[]
         var expected =[]
         expect(fetchListeRetourne(empruntsVide)).toStrictEqual(expected);
       })
       
  })

  describe("test Emprunter /retourner", () => {

    test(" test emprunter avec succés", ()=>{
        localStorage.setItem("user",JSON.stringify({"id":"2","cin":"07480700","nom":"Intissar","prenom":"Chrigui","dateNaissance":"1995-02-08","email":"intissarchrigui@gmail.com","etat":"active"}))
        const expected =1
        expect(Emprunter("1","Les oiseaux se cachent pour mourir",21)).toStrictEqual(expected);

     })
     test(" test emprunter avec un livre avec nbre d'exmplaire 0 il doit retourner 3 ", ()=>{
        localStorage.setItem("user",JSON.stringify({"id":"2","cin":"07480700","nom":"Intissar","prenom":"Chrigui","dateNaissance":"1995-02-08","email":"intissarchrigui@gmail.com","etat":"active"}))
        const expected =3
        expect(Emprunter("17","tesst",0)).toStrictEqual(expected);

     })
     test(" test emprunter avec un livre avec or l'adherent a déja emprunté 2 livres retourne 2", ()=>{
        localStorage.setItem("user",JSON.stringify({"id":"2","cin":"07480700","nom":"Intissar","prenom":"Chrigui","dateNaissance":"1995-02-08","email":"intissarchrigui@gmail.com","etat":"active"}))
        var empruntsTest =[{idEmp:0,
            idLivre:"7",
            titreLivre:"Les malheurs de Sophie",
            idUser:"2",
            Usernom:"Intissar",
            etat:"encours",
            dateEmp:"2020/07/02",
            dateRetour:"En Cours"},
            {idEmp:1,
                idLivre:"7",
                titreLivre:"Les malheurs de Sophie",
                idUser:"2",
                Usernom:"Intissar",
                etat:"encours",
                dateEmp:"2020/07/02",
                dateRetour:"En Cours"}
             ]
             let resultS=JSON.stringify(empruntsTest)
             localStorage.setItem('emprunts',resultS)
             const expected =2 ;
       expect(Emprunter("17","tesst",15)).toStrictEqual(expected);

     })
     test(" test emprunter avec un livre avec succés où l'adherent a deux emprunts l'une encours et l'autre retourné", ()=>{
        localStorage.setItem("user",JSON.stringify({"id":"2","cin":"07480700","nom":"Intissar","prenom":"Chrigui","dateNaissance":"1995-02-08","email":"intissarchrigui@gmail.com","etat":"active"}))
        var empruntsTest =[{idEmp:0,
            idLivre:"7",
            titreLivre:"Les malheurs de Sophie",
            idUser:"2",
            Usernom:"Intissar",
            etat:"retourné",
            dateEmp:"2020/07/02",
            dateRetour:"2020/07/05"},
            {idEmp:1,
                idLivre:"7",
                titreLivre:"Les malheurs de Sophie",
                idUser:"2",
                Usernom:"Intissar",
                etat:"encours",
                dateEmp:"2020/07/02",
                dateRetour:"En Cours"}
             ]
             let resultS=JSON.stringify(empruntsTest)
             localStorage.setItem('emprunts',resultS)
             const expected = 1 ;
       expect(Emprunter("18","tesst2",15)).toStrictEqual(expected);

     })

  })
