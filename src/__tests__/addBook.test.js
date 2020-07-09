const { 
    addBook,
    fetchbooks,
    fetchBookById,
    fetchBooks,fetchbooksActive,fetchbooksArchive
   
  } = require("../services/livres.service")
  
  describe("test fetch by id ", () => {

    test("recherche par id avec succés ", ()=>{
      const expected = {id :"10",
      EAN:9782290231241,
      libelle:"Racines", 
      auteur:"Alex Haley",
      edition:2011,
      nbExemplaires:17,
      etat:"arch"
      }
      //console.log("the book is "+fetchBookById("10")["libelle"])
       expect(fetchBookById("10")).toStrictEqual(expected);
         
     })
  })

  describe("test fetchbooks par libelle /auteur", () => {
    
    test("recherche par auteur avec succés renvoie un seule", ()=>{
      const expected = [{id :"4",
      EAN:9782266107532,
      libelle:"La cité de la joie", 
      auteur:"Dominique Lapierre",
      edition:2015,
      nbExemplaires:10,
      etat:"actv"
      }]
       expect(fetchBooks("Dominique")).toStrictEqual(expected);
    })
    test("recherche par auteur avec succés renvoie liste des livres", ()=>{
      const expected = [
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
        }
      ]
       expect(fetchBooks("Al")).toStrictEqual(expected);
    })



    test("recherche par libelle avec succés renvoie un seule livre", ()=>{
      const expected = [ {id :"3",
      EAN:9782352876113,
      libelle:"Jane Eyre", 
      auteur:"Charlotte Brontë",
      edition:2015,
      nbExemplaires:10,
      etat:"actv"
      }]
       expect(fetchBooks("Jane")).toStrictEqual(expected);
    })
    test("recherche par libelle avec succés renvoie liste des livres", ()=>{
      const expected = [
        {id :"5",
      EAN:9782253005018,
      libelle:"Le meilleur des Mondes", 
      auteur:"Aldous Huxley",
      edition:2017,
      nbExemplaires:7,
      etat:"actv"
      },
      {id :"7",
      EAN:9782203135215,
      libelle:"Les malheurs de Sophie", 
      auteur:"Comtesse de Ségur",
      edition:2004,
      nbExemplaires:18,
      etat:"actv"
      }
    ]
       expect(fetchBooks("Le")).toStrictEqual(expected);
    })
    test("recherche par libelle/ auteur inexistants avec succés *tableau vide*", ()=>{
      const expected = []
       expect(fetchBooks("testinexistant")).toStrictEqual(expected);
    })


  })
  describe("test fetch Active books & archived books", () => {

    test("recherche des livres actives avec succés ", ()=>{
      const expected=[ {id :"2",
    EAN:9782266308472,
    libelle:"Jamais sans ma fille", 
    auteur:"Betty Mahmoody",
    edition:2003,
    nbExemplaires:1,
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
      ]
      expect(fetchbooksActive()).toStrictEqual(expected);
     
     })
     test("recherche des livres archivés avec succés ", ()=>{
      const expected=[
        {id :"1",
        EAN:9782714411501,
        libelle:"Les oiseaux se cachent pour mourir", 
        auteur:"Colleen McCullough",
        edition:2010,
        nbExemplaires:21,
        etat:"arch"
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
      expect(fetchbooksArchive()).toStrictEqual(expected);
     
     })
  })

describe("test  pour la fonction ajouter livre ", ()=>{

  test("Le livre est ajoutée avec succés ", ()=>{
    const EAN =9144522654455,
        libelle= "k^pdjâJ", 
       auteur="JJDKL",
       edition=2013,
       nbExemplaires=25;
   const   expected= [
    {id :"1",
     EAN:9782714411501,
     libelle:"Les oiseaux se cachent pour mourir", 
     auteur:"Colleen McCullough",
     edition:2010,
     nbExemplaires:21,
     etat:"arch"
     },
     {id :"2",
     EAN:9782266308472,
     libelle:"Jamais sans ma fille", 
     auteur:"Betty Mahmoody",
     edition:2003,
     nbExemplaires:1,
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
     },
     {id:"11",
     EAN,
     libelle,
     auteur,
     edition,
     nbExemplaires,
     etat:"actv"}
                     ] 
            
       addBook(EAN,libelle,auteur,edition,nbExemplaires)
       //console.log(books)
       const livres = fetchbooks()

       expect(livres).toStrictEqual(expected);
 
       
   })

    test("should the EAN be a number", ()=>{

      const  EAN="anndb",
      libelle= "test EAN failed is not a number ", 
      auteur="auteur1",
      edition=2013,
      nbExemplaires=25;
       
         expect(()=>addBook(EAN,libelle,auteur,edition,nbExemplaires)).toThrowError(/le type est different de number !/gi);
    })
    test("test EAN < 0", ()=>{

      const  EAN=-20000,
      libelle= "test EAN < 0 ", 
      auteur="auteur1",
      edition=2013,
      nbExemplaires=25;
       
         expect(()=>addBook(EAN,libelle,auteur,edition,nbExemplaires)).toThrowError(/le nombre est negatif !/gi);
    })
   
      test("should the edition be a number", ()=>{
  
        const  EAN=9144522654455,
        libelle= "test edition failed is not a number", 
        auteur="auteur2",
        edition="tyujks",
        nbExemplaires=25;
         
           expect(()=>addBook(EAN,libelle,auteur,edition,nbExemplaires)).toThrowError(/le type est different de number !/gi);
      })
      test("test edition < 0", ()=>{
  
        const  EAN=9144522654455,
        libelle= "test edition < 0", 
        auteur="auteur2",
        edition=-2015,
        nbExemplaires=25;
         
           expect(()=>addBook(EAN,libelle,auteur,edition,nbExemplaires)).toThrowError(/le nombre est negatif !/gi);
      })
      test("should the Nombre d'exemplaire be a number", ()=>{
  
        const  EAN=9144522654455,
        libelle= "test Nb exmplaire failed is not a number", 
        auteur="auteur2",
        edition=2015,
        nbExemplaires="testExmpError";
         
           expect(()=>addBook(EAN,libelle,auteur,edition,nbExemplaires)).toThrowError(/le type est different de number !/gi);
      })
      test("test Nb exemplaire< 0", ()=>{
  
        const  EAN=9144522654455,
        libelle= "test Nb exemplaire < 0", 
        auteur="auteur2",
        edition=2015,
        nbExemplaires=-3000;
         
           expect(()=>addBook(EAN,libelle,auteur,edition,nbExemplaires)).toThrowError(/le nombre est negatif !/gi);
      })


})

