import React from "react"
// useCallback,

import Livre from "../../livre/Livre"

function ListeArchive({booksArchived,deleteBook,MiseAjourLivre}) {
  //const [loading, setLoading] = useState(false)
 //const [searchValue, setSearchValue] = useState("")

 // const [isVisible, setIsVisible] = useState(true)



  
  return (
    
    <div className="adherents-list" >
      <h1 className="Titre1">Liste des livres archivées</h1>
      <div> <table  className="entete-tab">
        <tbody>
      <tr >
        <th>Libelle</th>
        <th></th><th></th><th></th><th></th><th></th><th></th><th></th>
        <th>auteur</th>
        <th></th>
      </tr>
      </tbody>
      </table>
      </div>
      
  
    <div>
      {booksArchived.map(book => {
         return  <Livre
         key={book.id}
          id={book.id}
          libelle={book.libelle}
          auteur={book.auteur}
          liste="archive"
          deleteBook={deleteBook}
          MiseAjourLivre={MiseAjourLivre}
     />
        
      })}
    </div>
  </div>
)
}

export default ListeArchive

