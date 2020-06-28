import React from "react"
import { render,fireEvent , act, waitForElementToBeRemoved} from "@testing-library/react"
//import TasksList from "./../components/TasksList/TasksList"
import mockBook from "../mock/mockBook"
import user from "@testing-library/user-event"
import { Router } from "react-router-dom"
import ListeActive from "../components/gestionLivres/listeLivres/listeActive/ListeActive"
import { createMemoryHistory } from "history"
//import Livre from "../components/gestionLivres/livre/Livre"
//import ListeLivres from "../components/gestionLivres/listeLivres/ListeLivres"
//import { createMemoryHistory } from "history"
/*import {
  updateBook as mockupdateBook,
  fetchBooks as mockFetchbooks,
 fetchbooksActive as mockfetchbooksActive
} from "../services/livres.service"*/
//jest.mock("../services/livres.service")

describe("test tasks list", () => {
  //hedha test ta3 snapdhot ki nbadlou ay 7aja fel page js ta3 component ta3na snapshot ywali failed mayet3adech 5tr howa ya3mllna copie mel component ta3na
  test("should render an array of tasks list", () => {
    const mockdeleteBook = jest.fn()
    const history = createMemoryHistory({ initialEntries: ["/"] })
    const BooksComponent = render(
      <Router history={history}>  <ListeActive deleteBook={mockdeleteBook} books={mockBook} /></Router>
    )
    expect(BooksComponent).toMatchSnapshot()
    // debug()
  }) 

 

test("should works without crashing", () => {
  //hedha test ta3 yjareb t5arjlou liste des livres mrigla
  const history = createMemoryHistory({ initialEntries: ["/"] })
  const { debug } = render(
    <Router history={history}>
    <ListeActive/> 
  </Router> 
  )
  // debug()
}) 
test('renders "no books" when there are an empty list of books', () => {
  //hedha test ki tabda liste fer4a par exemple nemchiw ncommentiw fi service les livres lkol lahné yet3ada test mta3na s7i7
  const history = createMemoryHistory({ initialEntries: ["/"] })
  const {debug,getByText} = render(<Router history={history}>
    <ListeActive/> 
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