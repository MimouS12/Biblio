import React from "react"
// import ReactDOM from "react-dom"
// import App from "./App"
import ListeActive from "../components/gestionLivres/listeLivres/listeActive/ListeActive"
import { render,fireEvent, act, waitForElementToBeRemoved } from "@testing-library/react"
import user from "@testing-library/user-event"
import { Router } from "react-router-dom"
import { createMemoryHistory } from "history"
import Livre from "../components/gestionLivres/livre/Livre"
import ListeLivres from "../components/gestionLivres/listeLivres/ListeLivres"
import {
    updateBook as mockupdateBook,
    fetchBooks as mockFetchbooks,
   fetchbooksActive as mockfetchbooksActive,
  } from "../services/livres.service"
jest.mock("../services/livres.service" )
 //jest.spyOn(livres, ' fetchbooksActive')

 

describe("test todo app", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  
  test("test the integration of books app with mocking", async () => {
    const mockdeleteBook = jest.fn()
    const mockBooksWithOneBook = [
        {
          id: "1",
          EAN:9782266107532,
          libelle:"La cité de la joie", 
          auteur:"Dominique Lapierre",
          edition:2015,
          nbExemplaires:10,
        },
      ]

      mockfetchbooksActive.mockResolvedValue(mockBooksWithOneBook)
  
    mockupdateBook.mockImplementation(() => promise)
        // mockDeleteTask.mockResolvedValue({
        //   success: true,
        // })
   const history = createMemoryHistory({ initialEntries: ["/"] })

    const { getByTestId, debug, container, findByTestId, getByText } = render(
      <Router history={history}>
        <ListeActive/> 
      </Router>
    )
    setTimeout (()=> {
    expect(mockfetchbooksActive).toBeCalledTimes(1)
done();
})
    //await waitForElementToBeRemoved(() => getByText(/loading/i))
     const libelle =  getByTestId ("libelle")

     expect(libelle).toHaveTextContent("La cité de la joie")
    /* const updateBookButton = getByTestId("updateBook")
     //const  DeleteBookButton = getByText(/Supprimer/i)
     fireEvent.click(updateBookButton )

     expect(mockupdateBook).toHaveBeenCalled()
     expect(mockupdateBook).toHaveBeenCalledTimes(1)*/
     await act(() => promise)
  })
//  test("test the integration of tasks app with mocking", async () => {
//     const mockTasksWithOneTask = [
//       {
//         id: "1",
//         title: "Learn html",
//         duration: 60,
//       },
//     ]

//     mockFetchTasks.mockResolvedValue(mockTasksWithOneTask)
//     const promise = Promise.resolve({
//       success: true,
//     })
//     mockDeleteTask.mockImplementation(() => promise)
//         // mockDeleteTask.mockResolvedValue({
//         //   success: true,
//         // })
//    const history = createMemoryHistory({ initialEntries: ["/"] })

//     const { getByTestId, debug, container, findByTestId, getByText } = render(
//       <Router history={history}>
//         <TasksPage /> 
//       </Router>
//     )
//     expect(mockFetchTasks).toBeCalledTimes(1)
//     await waitForElementToBeRemoved(() => getByText(/loading/i))
//      const Title =  getByTestId("title-duration")

//      expect(Title).toHaveTextContent("Learn html (60)")
//      const DeleteTaskButton = getByTestId("deleteTask")
//       user.click(DeleteTaskButton)

//      expect(mockDeleteTask).toHaveBeenCalled()
//      expect(mockDeleteTask).toHaveBeenCalledTimes(1)
//      await act(() => promise)
//   })
test("test the integration of Booklist and Book",
() => {
const mockdeleteBook = jest.fn()
const mockBooksWithOneBooks = [
  {
    id: "1",
    EAN:9782266107532,
    libelle:"La cité de la joie", 
    auteur:"Dominique Lapierre",
    edition:2015,
    nbExemplaires:10,
  },
]
const history = createMemoryHistory({ initialEntries: ["/"] })
const {getByTestId, getByText} = render(
  <Router history={history}> <ListeActive deleteBook={mockdeleteBook}  /></Router>
)
mockfetchbooksActive.mockResolvedValue(mockBooksWithOneBooks)
const promise = Promise.resolve({
  success: true,
})
/* mockFetchbooks.mockResolvedValue(mockBooksWithOneBook)
const promise = Promise.resolve({
  success: true,
}) */
expect(mockfetchbooksActive).toBeCalledTimes(1)
const  DeleteBookButton = getByTestId("deleteBook")
//const  DeleteBookButton = getByText(/Supprimer/i)
// user.click(DeleteBookButton)
fireEvent.click(DeleteBookButton)
expect(mockdeleteBook).toHaveBeenCalled()
expect(mockdeleteBook).toHaveBeenCalledTimes(1)
//await act(() => promise)
})
 })


