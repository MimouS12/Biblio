import React from "react"
// import ReactDOM from "react-dom"
// import App from "./App"
import ListeActive from "../components/gestionLivres/listeLivres/listeActive/ListeActive"
import { render,fireEvent, act, waitForElementToBeRemoved,
  cleanup,
  waitForElement,
  waitForDomChange } from "@testing-library/react"
import user from "@testing-library/user-event"
import { Router } from "react-router-dom"
import { createMemoryHistory } from "history"
import Livre from "../components/gestionLivres/livre/Livre"
import ListeLivres from "../components/gestionLivres/listeLivres/ListeLivres"
import { ApolloMockedProvider } from "./test-utils/providers";

import {
    updateBook as mockupdateBook,
    fetchBooks as mockFetchbooks,
   fetchbooksActive as mockfetchbooksActive,
  } from "../services/livres.service"
jest.mock("../services/livres.service" )
 //jest.spyOn(livres, 'fetchbooksActive')

 

describe("test todo app", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  
  // test("test d'integration de liste livres avec mocking", async () => {
  //   const mockdeleteBook = jest.fn()
  //   const mockBooksWithOneBook = [
  //     {id :"2",
  //     EAN:9782266308472,
  //     libelle:"Jamais sans ma fille", 
  //     auteur:"Betty Mahmoody",
  //     edition:2003,
  //     nbExemplaires:1,
  //     etat:"actv"
  //     },
  //     ]

  //     mockfetchbooksActive.mockResolvedValue(mockBooksWithOneBook)
  //   const promise = Promise.resolve({
  //     success: true,
  //   })
  //  const history = createMemoryHistory({ initialEntries: ["/"] })

  //   const { getByTestId, debug, container, findByTestId, getByText } = render(
  //     <Router history={history}>
  //       <ListeLivres/> 
  //     </Router>
  //   )
  //   setTimeout (()=> {
  //     expect(mockfetchbooksActive).toBeCalledTimes(1)
  //     done();
  //   })
  //    const libelle =  getByTestId ("libelle")

  //    expect(libelle).toHaveTextContent("Jamais sans ma fille")

  //    await act(() => promise)
  // })

test("test the integration of Booklist and Book",() => {
const mockdeleteBook = jest.fn()
const mockBooksWithOneBooks = [
  {id :"2",
  EAN:9782266308472,
  libelle:"Jamais sans ma fille", 
  auteur:"Betty Mahmoody",
  edition:2003,
  nbExemplaires:1,
  etat:"actv"
  },
]
const history = createMemoryHistory({ initialEntries: ["/"] })
const {getByTestId, getByText} = render(
  <Router history={history}> <ListeActive booksActive={mockBooksWithOneBooks} deleteTask={mockdeleteBook} /></Router>
)
mockfetchbooksActive.mockResolvedValue(mockBooksWithOneBooks)
const promise = Promise.resolve({
  success: true,
})

//expect(mockfetchbooksActive).toBeCalledTimes(1)
const  DeleteBookButton = getByTestId("deleteBook")
//const  DeleteBookButton = getByText(/Supprimer/i)
 user.click(DeleteBookButton)
//fireEvent.click(DeleteBookButton)
expect(mockdeleteBook).toHaveBeenCalled()
//expect(mockdeleteBook).toHaveBeenCalledTimes(1)
//await act(() => promise)
})
test("integration of  BookForm et Booklist",() => {


  })

afterEach(cleanup);

// test("make sure I can submit a todo", async () => {
//   const { getByPlaceholderText, getByTestId, getByText } = render(
//     <ApolloMockedProvider
//       customResolvers={{
//         Mutation: () => ({
//           addTodo: () => ({ id: 1, type: "go to the store" })
//         })
//       }}
//     >
//       <App />
//     </ApolloMockedProvider>
//   );
//   const inputEAN = getByLabelText(/EAN/i)
//   const inputlibelle= getByLabelText(/libelle/i)
//   const inputauteur = getByLabelText(/auteur/i)
//   const inputedition = getByLabelText(/edition/i)
//   const inputNombreExemplaires= getByLabelText(/NombreExemplaires/i)
//   const submitButton = getByTestId("submit");
//   fireEvent.click(submitButton);

//   await waitForDomChange();

//   getByText("required");

//   fireEvent.change(input, { target: { value: 12345678 } })
//   fireEvent.change(inputauteur, { target: { value: "auteur 1" } });
//   fireEvent.change(inputlibelle, { target: { value: "Libelle 1" } });
//   ireEvent.change(inputedition, { target: { value: 2000} })
//   fireEvent.change(inputNombreExemplaires, { target: { value: 12 } })
//   fireEvent.click(submitButton);

//   await waitForElement(() => getByText( 12345678));
//   await waitForElement(() => getByText("auteur 1"));
//   await waitForElement(() => getByText("Libelle 1"));
//   await waitForElement(() => getByText(2000));
//   await waitForElement(() => getByText(12 ));
// })
 })
