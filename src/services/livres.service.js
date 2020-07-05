
 export const books = [
   {id :"1",
    //Code-barres EAN
    EAN:9782714411501,
    libelle:"Les oiseaux se cachent pour mourir", 
    auteur:"Colleen McCullough",
    edition:2010,
    nbExemplaires:21,
    // etat d'un livre ---arch = archivé ou ---actv = active 
    //pour archiver un livre il suffit changer l'attribut etat
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
    }
  ] 


  // const getlibelle = (id) =>{
  //   for (let i = 0; i <books.length; i++) {
  //     if(books[i].id === id){
  //      return books[i].libelle
  //     }
  //   }
  // }
  // const getEAN = (id) =>{
  //   for (let i = 0; i <books.length; i++) {
  //     if(books[i].id === id){
  //      return books[i].EAN
  //     }
  //   }
  // }
  // const getauteur = (id) =>{
  //   for (let i = 0; i <books.length; i++) {
  //     if(books[i].id === id){
  //      return books[i].auteur
  //     }
  //   }
  // }
  // const getedition = (id) =>{
  //   for (let i = 0; i <books.length; i++) {
  //     if(books[i].id === id){
  //      return books[i].edition
  //     }
  //   }
  // }
  // const getnbExemplaires = (id) =>{
  //   for (let i = 0; i <books.length; i++) {
  //     if(books[i].id === id){
  //      return books[i].nbExemplaires
  //     }
  //   }
  // }
  // const getetat = (id) =>{
  //   for (let i = 0; i <books.length; i++) {
  //     if(books[i].id === id){
  //      return books[i].etat
  //     }
  //   }
  // }
  // const setlibelle = (id,libelle) =>{
  //   for (let i = 0; i < books.length; i++) {
  //     if(books[i].id === id){
  //       books[i].libelle =libelle
  //     }
  //   }
  // }
  // const setEAN = (id,EAN) =>{
  //   for (let i = 0; i <books.length; i++) {
  //     if(books[i].id === id){
  //       books[i].EAN =EAN
  //     }
  //   }
  // }
  // const setauteur = (id,auteur) =>{
  //   for (let i = 0; i <books.length; i++) {
  //     if(books[i].id === id){
  //       books[i].auteur =auteur
  //     }
  //   }
  // }
  // const setedition = (id,edition) =>{
  //   for (let i = 0; i <books.length; i++) {
  //     if(books[i].id === id){
  //      books[i].edition =edition
  //     }
  //   }
  // }
 export const setnbExemplaires = (id,nbExemplaires) =>{

  if (typeof (nbExemplaires) === "number") {
    if (nbExemplaires > 0) {
      books.forEach((book) => {
        if (book.id=== id) {
          book.nbExemplaires=nbExemplaires
         }
      }) 

    } else {
        throw new Error('le nombre d exemplaire est negatif !');
    }
} else {
    throw new Error('le type est different de number !');
}

  }

  export const addBook = function (EAN, libelle,auteur,edition,nbExemplaires) {


    if (typeof (EAN) === "number" && typeof (edition) === "number" && typeof (nbExemplaires) === "number"  ) {
      if (nbExemplaires > 0 && edition>0 && EAN>0) {
        
    books.push({ id: (books.length + 1).toString(), EAN : Number(EAN), libelle,auteur,edition : Number(edition),nbExemplaires: Number(nbExemplaires),etat:"actv" });
    console.log('book added successfully !!');

      }   else {
        throw new Error("le nombre est negatif !");
      }
  } else {
      throw new Error('le type est different de number !');
  
  }

    
   }
  export const updateBook = function (id,EAN, libelle,auteur,edition,nbExemplaires) {
    if (typeof (EAN) === "number" && typeof (edition) === "number" && typeof (nbExemplaires) === "number"  ) {
      if (nbExemplaires > 0 &&edition>0&&EAN>0) {
        
        books.forEach((book) => {
          if (book.id=== id) {
            book.EAN=EAN
            book.libelle=libelle
            book.auteur=auteur
            book.edition=edition
            book.nbExemplaires=nbExemplaires
        }
      
      })
      }   else {
        throw new Error("le nombre est negatif !");
    }
  } else {
      throw new Error('le type est different de number !');
  
  }

  // books.map(book => book.id ===id ? ({id,EAN, libelle,auteur,edition,nbExemplaires,"actv"}):book)
    }
  export const archiveBook = function (id) {
    books.forEach((book) => {
      if (book.id=== id) {
       book.etat="arch"
      }
    })
    console.log('book is Archived !!!')
    }

  // function delay(ms) {
  //   return new Promise(resolve => setTimeout(resolve, ms))
  // }  
  export const fetchBookById= (livreId)=>{
    //await delay(1000)
    return books.find(book => book.id===livreId)
  }

  export const fetchBooks =  searchValue => {
    //await delay(3000)
    // recherche book par libelle et par nom d'auteur
    return books.filter(book =>book.etat==="actv" &&(book.libelle.includes(searchValue)|| book.auteur.includes(searchValue)))
  }
  export const fetchbooksActive = () => {
    return books.filter(book => book.etat==="actv")
 }
 export const fetchbooksArchive =  () => {
  return books.filter(book => book.etat==="arch")
}
export const fetchbooks = () => {
   return books
  //return tasks.filter(task => task.title.includes(searchValue))
}
