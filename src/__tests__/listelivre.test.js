import React from "react"
import { render,fireEvent , act, waitForElementToBeRemoved} from "@testing-library/react"
//import TasksList from "./../components/TasksList/TasksList"
import mockBook from "../mock/mockBook"
import user from "@testing-library/user-event"
import { Router } from "react-router-dom"
import ListeActive from "../components/gestionLivres/listeLivres/listeActive/ListeActive"
import { createMemoryHistory } from "history"


describe("test tasks list", () => {
  test("snapshot : should render an array of tasks list", () => {
    const mockdeleteBook = jest.fn()
    const history = createMemoryHistory({ initialEntries: ["/"] })
    const BooksComponent = render(
      <Router history={history}>  <ListeActive  booksActive={mockBook} deleteTask={mockdeleteBook} /></Router>
    )
    expect(BooksComponent).toMatchSnapshot()
    // debug()
  }) 

 

test("should works without crashing", () => {
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
  const { debug } = render(
    <Router history={history}>
    <ListeActive  booksActive={mockBooksWithOneBooks} deleteTask={mockdeleteBook} /> 
  </Router> 
  )
  // debug()
}) 
test('renders "no books" when there are an empty list of books', () => {
  const mockdeleteBook = jest.fn()

  const history = createMemoryHistory({ initialEntries: ["/"] })
  const {debug,getByText} = render(<Router history={history}>
    <ListeActive booksActive={[]} deleteTask={mockdeleteBook}/> 
  </Router>)
// debug()
 const listevide =getByText(/la liste des livres actives est vide/i)
  expect(getByText(/la liste des livres actives est vide/i)).toBeInTheDocument()
 // debug(listevide) 
})

/* test('renders contacts', () => {
  const fakeContacts = [{id: 1, name: 'Bob'}, {id: 2, name: 'Marcy'}]
  const {getAllByTestId} = render(<ContactList contacts={fakeContacts} />)
  const contactNames = getAllByTestId('contact-name').map(li => li.textContent)
  const fakeContactNames = fakeContacts.map(c => c.name)
  expect(contactNames).toEqual(fakeContactNames)*/

 
})