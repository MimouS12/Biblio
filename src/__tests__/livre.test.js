import React from "react"
import { render, fireEvent } from "@testing-library/react"
import Livre from "../components/gestionLivres/livre/Livre"
//import user from "@testing-library/user-event"
import { Router } from "react-router-dom"
import { createMemoryHistory } from "history"
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
  test("should render a book data", () => {
    const  mockdeleteBook = jest.fn()
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
     const item = getByTestId('libelle')
  
    expect(item).toHaveTextContent(
        mockBook.libelle 
    )
    const item2 = getByTestId('auteur')
  
    expect(item2).toHaveTextContent(
        mockBook.auteur
    )
     
     
  })

})
