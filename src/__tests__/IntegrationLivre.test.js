import React from "react"
// import ReactDOM from "react-dom"
// import App from "./App"
import ListeActive from "../components/gestionLivres/listeLivres/listeActive/ListeActive"
import { render,fireEvent, cleanup} from "@testing-library/react"
import user from "@testing-library/user-event"
import { Router } from "react-router-dom"
import { createMemoryHistory } from "history"


import {
   fetchbooksActive as mockfetchbooksActive,
  } from "../services/livres.service"
jest.mock("../services/livres.service" )
 //jest.spyOn(livres, 'fetchbooksActive')

 

describe("test integration livre", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })


  test("test the integration of Booklist and Book with delete button ",async () => {
    const mockdeleteBook = jest.fn()
    localStorage.setItem("user","admin")
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
    
    const  DeleteBookButton = getByTestId("deleteBook")
    user.click(DeleteBookButton)
    expect(mockdeleteBook).toHaveBeenCalled()
    
    })

  test("test the integration of Booklist and Book with Archiver button ",async () => {
    const mockArchiverBook = jest.fn()
    localStorage.setItem("user","admin")
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
      <Router history={history}> <ListeActive booksActive={mockBooksWithOneBooks} ArchiverLivre={mockArchiverBook} /></Router>
    )
    mockfetchbooksActive.mockResolvedValue(mockBooksWithOneBooks)
    const promise = Promise.resolve({
      success: true,
    })
    
    const  ArchiverBookButton = getByTestId("archiverBook")
    user.click(ArchiverBookButton)
    expect(mockArchiverBook).toHaveBeenCalled()
    
    })
test("test the integration active book list and update form",async () => {
const mockupdateBook =jest.fn()
localStorage.setItem("user","admin")
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
  <Router history={history}> <ListeActive booksActive={mockBooksWithOneBooks}  MiseAjourLivre={mockupdateBook} /></Router>
)
mockfetchbooksActive.mockResolvedValue(mockBooksWithOneBooks)
const promise = Promise.resolve({
  success: true,
})


expect(getByTestId("updateBook")).toBeTruthy()
const ModifierVisibleButton = getByTestId("updateBook");
fireEvent.click(ModifierVisibleButton);
const  ModifierBookButton = getByTestId("ModifierLivre")
 fireEvent.click(ModifierBookButton);
expect(mockupdateBook).toHaveBeenCalled()


})


afterEach(cleanup);

test("test integration formulaire add book with list book ", async () => {
  const mockdeleteBook = jest.fn()
  const mockAjouter = jest.fn()

localStorage.setItem("user","admin")
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
     const submiAjoutVisibleButton = getByTestId("OnclickAjouter");

     fireEvent.click(submiAjoutVisibleButton);

  const inputEAN = getByLabelText(/EAN-addbook/i)
  const inputlibelle= getByLabelText(/libelle-addbook/i)
  const inputauteur = getByLabelText(/auteur-addbook/i)
  const inputedition = getByLabelText(/edition-addbook/i)
  const inputNombreExemplaires= getByLabelText(/NombreExemplaires-addbook/i)
 
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
 
expect(mockAjouter).toHaveBeenCalled()
expect(mockAjouter).toHaveBeenCalledTimes(1) 
//debug()
})
 })
