import React from "react"
// import ReactDOM from "react-dom"
// import App from "./App"
import ListeActive from "../components/gestionLivres/listeLivres/listeActive/ListeActive"
import BookForm from "../components/gestionLivres/formBook/BookForm"
import { render,fireEvent, act, waitForElementToBeRemoved,
  cleanup,
  waitForElement,
  waitFor,
  waitForDomChange } from "@testing-library/react"
import user from "@testing-library/user-event"
import { Router } from "react-router-dom"
import { createMemoryHistory } from "history"
import Livre from "../components/gestionLivres/livre/Livre"
import ListeLivres from "../components/gestionLivres/listeLivres/ListeLivres"


import {
  addBook as mockaddBook,
    updateBook as mockupdateBook,
    fetchBooks as mockFetchbooks,
   fetchbooksActive as mockfetchbooksActive,
  } from "../services/livres.service"
jest.mock("../services/livres.service" )
 //jest.spyOn(livres, 'fetchbooksActive')

 

describe("test todo app", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  //   var store = {};

  // jest.spyOn(localStorage, 'getItem').andCallFake(function (key) {
  //   return store[key];
  // });
  // jest.spyOn(localStorage, 'setItem').andCallFake(function (key, value) {
  //   return store[key] = value + '';
  // });
  // jest.spyOn(localStorage, 'clear').andCallFake(function () {
  //     store = {};
  // });
  })

  
  // test("test d'integration de liste livres avec mocking", async () => {
  //   //const mockdeleteBook = jest.fn()
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
localStorage.setItem("user","admin")
//console.log("aaaaaaaaaaaa "+ localStorage.getItem("user"))
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
  <Router history={history}> <ListeActive booksActive={mockBooksWithOneBooks} deleteBook={mockdeleteBook} /></Router>
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


afterEach(cleanup);

test("test integration formulaire add book with list book ", async () => {
  const mockdeleteBook = jest.fn()
  const mockAjouter = jest.fn()

localStorage.setItem("user","admin")
//console.log("aaaaaaaaaaaa "+ localStorage.getItem("user"))
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
    const {debug, getByPlaceholderText, getByTestId, getByText ,getByLabelText} = render(
      <Router history={history}> <ListeActive  booksActive={mockBooksWithOneBooks} deleteBook={mockdeleteBook} AjouterLivre={mockAjouter} />
  
      </Router>)

     expect(getByTestId("OnclickAjouter")).toBeTruthy()
     expect(getByText(/Ajouter livre/i)).toBeTruthy()
     const submiAjoutVisibleButton = getByTestId("OnclickAjouter");
     fireEvent.click(submiAjoutVisibleButton);
  const inputEAN = getByLabelText(/EAN-addbook/i)
  const inputlibelle= getByLabelText(/libelle-addbook/i)
  const inputauteur = getByLabelText(/auteur-addbook/i)
  const inputedition = getByLabelText(/edition-addbook/i)
  const inputNombreExemplaires= getByLabelText(/NombreExemplaires-addbook/i)


  //await waitForDomChange();

 // getByText("required");

 
  fireEvent.change(inputEAN, { target: { value: 12345678 } })
  debug(inputEAN) 
  fireEvent.change(inputauteur, { target: { value: "auteur 1" } });
  debug(inputauteur) 
  fireEvent.change(inputlibelle, { target: { value: "Libelle 1" } }); 
  debug(inputlibelle) 
  fireEvent.change(inputedition, { target: { value: 2000} })
  debug(inputedition) 

  fireEvent.change(inputNombreExemplaires, { target: { value: 12 } })
  debug(inputNombreExemplaires) 
  const submitBook = getByTestId("submit-book");

  fireEvent.click(submitBook);

//debug()
await expect(getByTestId("submit-book")).toBeTruthy()
await expect(getByText(/Ajouter un nouveau livre/i)).toBeTruthy()
 
expect(mockAjouter).toHaveBeenCalled()
expect(mockAjouter).toHaveBeenCalledTimes(1) 
//debug()
})
 })
