const { 
    updateBook,
    fetchbooks,
    setnbExemplaires,
    archiveBook
  } = require("../services/livres.service")
  
  
  describe("test pour la fonction update book ", () => {
      test("modifier un livre avec succés ", () => {
      const id ="2" ,NewEAN = 9144522654455,
      Newlibelle= "updated libelle", 
      Newauteur="updated auteur",
      Newedition=2013,
      NewnbExemplaires=25;
      //id,EAN, libelle,auteur,edition,nbExemplaires
      updateBook(id,NewEAN,Newlibelle,Newauteur,Newedition,NewnbExemplaires)
      
      const expected=[
        {id :"1",
         EAN:9782714411501,
         libelle:"Les oiseaux se cachent pour mourir", 
         auteur:"Colleen McCullough",
         edition:2010,
         nbExemplaires:21,
         etat:"arch"
         },
         {id :"2",
         EAN:NewEAN,
         libelle:Newlibelle, 
         auteur:Newauteur,
         edition:Newedition,
         nbExemplaires:NewnbExemplaires,
         etat:"actv"
         },
         {id :"3",
         EAN:9782352876113,
         libelle:"Jane Eyre", 
         auteur:"Charlotte Brontë",
         edition:2015,
         nbExemplaires:10,
         etat:"actv"
         }
         ,
         {id :"4",
         EAN:9782266107532,
         libelle:"La cité de la joie", 
         auteur:"Dominique Lapierre",
         edition:2015,
         nbExemplaires:10,
         etat:"actv"
         },
         {id :"5",
         EAN:9782253005018,
         libelle:"Le meilleur des Mondes", 
         auteur:"Aldous Huxley",
         edition:2017,
         nbExemplaires:7,
         etat:"actv"
         },
         {id :"6",
         EAN:9782070360024,
         libelle:"L'étranger", 
         auteur:"Albert Camus",
         edition:2001,
         nbExemplaires:11,
         etat:"actv"
         },
         {id :"7",
         EAN:9782203135215,
         libelle:"Les malheurs de Sophie", 
         auteur:"Comtesse de Ségur",
         edition:2004,
         nbExemplaires:18,
         etat:"actv"
         },
         {id :"8",
         EAN:9782070413119,
         libelle:"Madame Bovary", 
         auteur:"Gustave Flaubert",
         edition:2006,
         nbExemplaires:25,
         etat:"actv"
         },
         {id :"9",
         EAN:9782253006220,
         libelle:"La Mère", 
         auteur:"Pearl Buck",
         edition:2007,
         nbExemplaires:9,
         etat:"actv"
         }
         ,
         {id :"10",
         EAN:9782290231241,
         libelle:"Racines", 
         auteur:"Alex Haley",
         edition:2011,
         nbExemplaires:17,
         etat:"arch"
         }
       ] 
       const livs =fetchbooks()
       
       expect(livs).toStrictEqual(expected);
  
    });
      test("should the EAN be a number", ()=>{

        const  id ="3",EAN="ErrorEan",
        libelle= "test EAN failed is not a number ", 
        auteur="auteur1",
        edition=2013,
        nbExemplaires=25;
         
           expect(()=>updateBook(id,EAN,libelle,auteur,edition,nbExemplaires)).toThrowError(/le type est different de number !/gi);
      })
      test("test EAN < 0", ()=>{
  
        const id="5", EAN=-200,
        libelle= "test EAN < 0 ", 
        auteur="auteur1",
        edition=2013,
        nbExemplaires=25;
         
           expect(()=>updateBook(id,EAN,libelle,auteur,edition,nbExemplaires)).toThrowError(/le nombre est negatif !/gi);
      })
       test("should the edition be a number", ()=>{
    
          const id="1", EAN=9144522654455,
          libelle= "test edition failed is not a number", 
          auteur="auteur2",
          edition="errorEdition",
          nbExemplaires=25;
           
             expect(()=>updateBook(id,EAN,libelle,auteur,edition,nbExemplaires)).toThrowError(/le type est different de number !/gi);
        })
        test("test edition < 0", ()=>{
    
          const id="6", EAN=9144522654455,
          libelle= "test edition < 0", 
          auteur="auteur2",
          edition=-1991,
          nbExemplaires=25;
           
             expect(()=>updateBook(id,EAN,libelle,auteur,edition,nbExemplaires)).toThrowError(/le nombre est negatif !/gi);
        })
        test("should the Nombre d'exemplaire be a number", ()=>{
    
          const id="4", EAN=9144522654455,
          libelle= "test Nb exemplaire failed is not a number", 
          auteur="auteur2",
          edition=2015,
          nbExemplaires="ErrorNbExemplaire";
           
             expect(()=>updateBook(id,EAN,libelle,auteur,edition,nbExemplaires)).toThrowError(/le type est different de number !/gi);
        })
        test("test Nb exemplaire< 0", ()=>{
    
          const id ="7", EAN=9144522654455,
          libelle= "test Nb exemplaire < 0", 
          auteur="auteur2",
          edition=2015,
          nbExemplaires=-10;
           
             expect(()=>updateBook(id,EAN,libelle,auteur,edition,nbExemplaires)).toThrowError(/le nombre est negatif !/gi);
        })
  
  });
  
describe("test pour la fonction set exemplaire ", ()=>{

    test("modifier exemplaire fonction setExemplaire avec succés", () => {
        const id ="3" ,
        NewnbExemplaires=40;
        setnbExemplaires(id,NewnbExemplaires)
        const expected=[
          {id :"1",
          EAN:9782714411501,
          libelle:"Les oiseaux se cachent pour mourir", 
          auteur:"Colleen McCullough",
          edition:2010,
          nbExemplaires:21,
          etat:"arch"
           }, {
               id :"2",
               EAN:9144522654455,
               libelle:"updated libelle", 
               auteur:"updated auteur",
               edition:2013,
               nbExemplaires:25,
               etat:"actv"
           },
           {id :"3",
           EAN:9782352876113,
           libelle:"Jane Eyre", 
           auteur:"Charlotte Brontë",
           edition:2015,
           nbExemplaires:NewnbExemplaires,
           etat:"actv"
           }
           ,
           {id :"4",
           EAN:9782266107532,
           libelle:"La cité de la joie", 
           auteur:"Dominique Lapierre",
           edition:2015,
           nbExemplaires:10,
           etat:"actv"
           },
           {id :"5",
           EAN:9782253005018,
           libelle:"Le meilleur des Mondes", 
           auteur:"Aldous Huxley",
           edition:2017,
           nbExemplaires:7,
           etat:"actv"
           },
           {id :"6",
           EAN:9782070360024,
           libelle:"L'étranger", 
           auteur:"Albert Camus",
           edition:2001,
           nbExemplaires:11,
           etat:"actv"
           },
           {id :"7",
           EAN:9782203135215,
           libelle:"Les malheurs de Sophie", 
           auteur:"Comtesse de Ségur",
           edition:2004,
           nbExemplaires:18,
           etat:"actv"
           },
           {id :"8",
           EAN:9782070413119,
           libelle:"Madame Bovary", 
           auteur:"Gustave Flaubert",
           edition:2006,
           nbExemplaires:25,
           etat:"actv"
           },
           {id :"9",
           EAN:9782253006220,
           libelle:"La Mère", 
           auteur:"Pearl Buck",
           edition:2007,
           nbExemplaires:9,
           etat:"actv"
           }
           ,
           {id :"10",
           EAN:9782290231241,
           libelle:"Racines", 
           auteur:"Alex Haley",
           edition:2011,
           nbExemplaires:17,
           etat:"arch"
           }
         ] 
         const livs =fetchbooks()
         
         expect(livs).toStrictEqual(expected);
    
      });

      test("Nombre d'exemplaire is not a number ", () => {
        const id ="3" ,NewnbExemplaires= "errorNbExpl";         
         expect(()=>setnbExemplaires(id,NewnbExemplaires)).toThrowError(/le type est different de number !/gi);
    
      });
      test("Nombre d'exemplaire < 0 ", () => {
        const id ="3" , NewnbExemplaires=-20;
         expect(()=>setnbExemplaires(id,NewnbExemplaires)).toThrowError(/le nombre d exemplaire est negatif !/gi);
    
      });

})
describe("test pour la fonction Archiver ", ()=>{
      test("Archiver un livre avec succés ", () => {

        const id ="3" ,
        etatArch="arch";
        archiveBook(id)
        const expected=[
          {id :"1",
          EAN:9782714411501,
          libelle:"Les oiseaux se cachent pour mourir", 
          auteur:"Colleen McCullough",
          edition:2010,
          nbExemplaires:21,
          etat:"arch"
           }, {
               id :"2",
               EAN:9144522654455,
               libelle:"updated libelle", 
               auteur:"updated auteur",
               edition:2013,
               nbExemplaires:25,
               etat:"actv"
           },
           {id :"3",
           EAN:9782352876113,
           libelle:"Jane Eyre", 
           auteur:"Charlotte Brontë",
           edition:2015,
           nbExemplaires:40,
           etat:etatArch
           }
           ,
           {id :"4",
           EAN:9782266107532,
           libelle:"La cité de la joie", 
           auteur:"Dominique Lapierre",
           edition:2015,
           nbExemplaires:10,
           etat:"actv"
           },
           {id :"5",
           EAN:9782253005018,
           libelle:"Le meilleur des Mondes", 
           auteur:"Aldous Huxley",
           edition:2017,
           nbExemplaires:7,
           etat:"actv"
           },
           {id :"6",
           EAN:9782070360024,
           libelle:"L'étranger", 
           auteur:"Albert Camus",
           edition:2001,
           nbExemplaires:11,
           etat:"actv"
           },
           {id :"7",
           EAN:9782203135215,
           libelle:"Les malheurs de Sophie", 
           auteur:"Comtesse de Ségur",
           edition:2004,
           nbExemplaires:18,
           etat:"actv"
           },
           {id :"8",
           EAN:9782070413119,
           libelle:"Madame Bovary", 
           auteur:"Gustave Flaubert",
           edition:2006,
           nbExemplaires:25,
           etat:"actv"
           },
           {id :"9",
           EAN:9782253006220,
           libelle:"La Mère", 
           auteur:"Pearl Buck",
           edition:2007,
           nbExemplaires:9,
           etat:"actv"
           }
           ,
           {id :"10",
           EAN:9782290231241,
           libelle:"Racines", 
           auteur:"Alex Haley",
           edition:2011,
           nbExemplaires:17,
           etat:"arch"
           }
         ] 
         const livres =fetchbooks()
         
         expect(livres).toStrictEqual(expected);
    
      });
})