const { books,
    updateBook,
    addBook,
    archiveBook,
    fetchbooksActive,
   
  } = require("../services/livres.service")
  
  

  
  
  describe("test add new book ", ()=>{
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
         console.log(books)
         expect(books).toStrictEqual(expected);
         
         
     })
 
      test("should the EAN be a number", ()=>{
  
        const  EAN="anndb",
        libelle= "test EAN failed is not a number ", 
        auteur="auteur1",
        edition=2013,
        nbExemplaires=25;
         
           expect(()=>addBook(EAN,libelle,auteur,edition,nbExemplaires)).toThrowError(/Ean is not number/gi);
      })
     
        test("should the edition be a number", ()=>{
    
          const  EAN=9144522654455,
          libelle= "test edition failed is not a number", 
          auteur="auteur2",
          edition="tyujks",
          nbExemplaires=25;
           
             expect(()=>addBook(EAN,libelle,auteur,edition,nbExemplaires)).toThrowError(/Edition is not number/gi);
        })
  
    
  
          
      
  
    
  
  
  })
  
   