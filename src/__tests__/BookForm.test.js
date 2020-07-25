import React from "react"
import {  render , fireEvent, act} from "@testing-library/react"
import BookForm from "../components/gestionLivres/formBook/BookForm"
//import './matchMedia.mock'; 
import user from '@testing-library/user-event'
import {
  
 addBook as mockAddbook,
} from "../services/livres.service"
jest.mock("../services/livres.service" )
  
describe("test add book", () => { 
  

   test("should works without crashing", () => {
    const { debug } = render(<BookForm />)
     //debug()
  }) 

   test("devrait contenir: EAN, Libelle, auteur ,edition et nombre d'exemplaires et buttons", () => {
    const mockAjouter = jest.fn()

    const { debug, getByLabelText, getByTestId, getByText } = render(
      <BookForm AjouterLivre={mockAjouter}  />
    )
    const input = getByLabelText(/EAN-addbook/i)
     //debug(input)
     expect(input).toBeTruthy()
     expect(input).toHaveAttribute("type", "number")

    const inputlibelle= getByLabelText(/libelle/i)
    expect(inputlibelle).toBeTruthy()
     //debug(inputlibelle)
    expect(inputlibelle).toHaveAttribute("type", "text")
    const inputauteur = getByLabelText(/auteur/i)
    expect(inputauteur).toBeTruthy()
    // debug(inputauteur)
    expect(inputauteur).toHaveAttribute("type", "text")

    const inputedition = getByLabelText(/edition/i)
    expect(inputedition).toBeTruthy()
    // debug(inputedition)
    expect(inputedition).toHaveAttribute("type", "number")

    const inputNombreExemplaires = getByLabelText(/NombreExemplaires/i)
    expect(inputNombreExemplaires ).toBeTruthy()
     //debug(inputNombreExemplaires )
    expect(inputNombreExemplaires ).toHaveAttribute("type", "number")
    
    expect(getByTestId("submit-book")).toBeTruthy()

   }) 

  test("should fire events", async () => {
    const mockAjouter = jest.fn()

    const promise=Promise.resolve()
    const { debug, getByLabelText, getByTestId } = render(
      <BookForm AjouterLivre={mockAjouter}/>
    )
    const input = getByLabelText(/EAN/i)

    const EANValue=25874  

   // user.type(input,EANValue)
    fireEvent.change(input, { target: { value: EANValue } })
    
     // debug(input) 

    //jest matcher
     //expect(input.value).toContain(EANValue)
    
    //jest-dom matcher
    expect(input).toHaveValue(EANValue)
    
    const inputlibelle= getByLabelText(/libelle/i)
    const libelleValue = "madame bovary"
    fireEvent.change(inputlibelle, { target: { value: libelleValue } })
   // debug(inputlibelle) 
    //user.type(libelleValue, inputlibelle)

    //jest matcher
    // expect(input.value).toContain(taskValue)

    //jest-dom matcher
    expect(inputlibelle).toHaveValue(libelleValue)

    const inputauteur= getByLabelText(/auteur/i)
    const auteurValue = "alex marten"
    fireEvent.change(inputauteur, { target: { value:  auteurValue} })
    //user.type(auteurValue, inputauteur)

    //jest matcher
    // expect(input.value).toContain(taskValue)

    //jest-dom matcher
    expect(inputauteur).toHaveValue(auteurValue)

    
    const inputedition= getByLabelText(/edition/i)
    const editionValue =1475
    fireEvent.change(inputedition, { target: { value:  editionValue} })
   // user.type(inputedition,editionValue)

    //jest matcher
    // expect(input.value).toContain(taskValue)

    //jest-dom matcher
    expect(inputedition).toHaveValue(editionValue)

    const inputNombreExemplaires= getByLabelText(/NombreExemplaires/i)
    const NombreExemplairesValue =258874
   fireEvent.change(inputNombreExemplaires, { target: { value:  NombreExemplairesValue} })
    //user.type(NombreExemplairesValue, inputNombreExemplaires)

    //jest matcher
    // expect(input.value).toContain(taskValue)

    //jest-dom matcher
    expect(inputNombreExemplaires).toHaveValue(NombreExemplairesValue)
    
    const submitButton = getByTestId("submit-book")
    fireEvent.click(submitButton)
    //user.click(submitButton)
    await act(() => promise)
    
    expect(mockAjouter).toHaveBeenCalled()
    expect(mockAjouter).toHaveBeenCalledTimes(1) 
    
      

  })

   test("should display an error", () => {

     const { debug, getByLabelText, getByTestId, queryByTestId, container } = render(
       <BookForm />
     )
    
     const inputNombreExemplaires = getByLabelText(/NombreExemplaires/i)
     const NombreExemplairesValue = "100"
     fireEvent.change(inputNombreExemplaires, { target: { value:  NombreExemplairesValue} })
     //user.type(inputNombreExemplaires,NombreExemplairesValue)


     //expect(getByTestId("error-NombreExemplaires")).toBeTruthy()
     // debug(container)
      expect(getByTestId("error-NombreExemplaires")).toHaveTextContent(
        /The number of exemplaire must be less than/i)
   })

    test("should not display an error", () => {
      const {
        debug,
        getByLabelText,
        getByTestId,
        queryByTestId,
        rerender,
      } = render(<BookForm  />)

      const inputNombreExemplaires = getByLabelText(/NombreExemplaires/i)
      let NombreExemplairesValue = "30"

      // user.type(inputNombreExemplaires, NombreExemplairesValue)
      fireEvent.change(inputNombreExemplaires, { target: { value: NombreExemplairesValue } })
      expect( queryByTestId("error-NombreExemplaires")).toBeNull()


       NombreExemplairesValue = "30"
      rerender(<BookForm  maxExemplaireValue={20} />)
      // user.type(inputNombreExemplaires, NombreExemplairesValue)
       fireEvent.change(inputNombreExemplaires, { target: { value:  NombreExemplairesValue} })
      // debug()
      expect(getByTestId("error-NombreExemplaires")).toBeTruthy()

     
      })
    })
 