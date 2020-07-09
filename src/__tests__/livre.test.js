import React from "react"
import { render, fireEvent } from "@testing-library/react"
import Livre from "../components/gestionLivres/livre/Livre"

import user from "@testing-library/user-event"
import { Router } from "react-router-dom"
import { createMemoryHistory } from "history"
import {
  updateBook as mockupdateBook
} from "../services/livres.service"
jest.mock("../services/livres.service" )
describe("test add book", () => {
  const mockBook = {
    id: "1",
   
      libelle: "Les oiseaux se cachent pour mourir",
      auteur: "Colleen McCullough",
      edition:2010,
      nbExemplaires:21,
      EAN:9782714411501,
      etat:"actv"
  }
  test("should render a book data with admin privileges", () => {
    const  mockdeleteBook = jest.fn()

    localStorage.setItem("user","admin")
    var liste="active"

    const history = createMemoryHistory({ initialEntries: ["/"] })
    const { debug, getByLabelText, getByTestId, getByText} = render( <Router history={history}>
      <Livre
        id={mockBook.id}
        deleteBook={mockdeleteBook}
        libelle={mockBook.libelle}
        auteur={mockBook.auteur}
       edition={mockBook.edition}
        nbExemplaires={mockBook.nbExemplaires}
        EAN={mockBook.EAN}
        liste={liste}
        />
        </Router> )
    
  //  debug()
     const Libelleitem = getByTestId('libelle')
  
    expect(Libelleitem).toHaveTextContent(
        mockBook.libelle 
    )
    const auteuritem = getByTestId('auteur')
  
    expect(auteuritem).toHaveTextContent(
        mockBook.auteur
    )
    const  DeleteBookButton = getByTestId("deleteBook")
    user.click(DeleteBookButton)

    expect(mockdeleteBook).toHaveBeenCalled()
    const  ModifierBookButton = getByTestId("updateBook")
    user.click(ModifierBookButton)

    //const  ArchiverBookButton = getByTestId("archiverBook")
    //user.click(ArchiverBookButton)
    //fireEvent.click(ArchiverBookButton)

  
     
  })
  
  test("should render a book data with member privileges", () => {
    const  mockdeleteBook = jest.fn()
    // window.alert genere bug donc on doit le mocker 
    window.alert = jest.fn();

    localStorage.setItem("user",JSON.stringify({"id":"2","cin":"07480700","nom":"Intissar","prenom":"Chrigui","dateNaissance":"1995-02-08","email":"intissarchrigui@gmail.com","etat":"active"}))
    var liste="active"

    const history = createMemoryHistory({ initialEntries: ["/"] })
    const { debug, getByLabelText, getByTestId, getByText} = render( <Router history={history}><Livre
        id={mockBook.id}
        deleteBook={mockdeleteBook}
        libelle={mockBook.libelle}
        auteur={mockBook.auteur}
       edition={mockBook.edition}
        nbExemplaires={mockBook.nbExemplaires}
        EAN={mockBook.EAN}
        /></Router> )
    
  //  debug()
     const Libelleitem = getByTestId('libelle')
  
    expect(Libelleitem).toHaveTextContent(
        mockBook.libelle 
    )
    const auteuritem = getByTestId('auteur')
  
    expect(auteuritem).toHaveTextContent(
        mockBook.auteur
    )
    const  EmprunterBookButton = getByTestId("Emprunter")
    user.click(EmprunterBookButton)

    const  RetournerBookButton = getByTestId("Retourner")
    user.click(RetournerBookButton)



     
  })
  

})
