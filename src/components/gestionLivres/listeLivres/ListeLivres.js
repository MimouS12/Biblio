import React, { useState, useEffect ,useRef} from "react"
// useCallback,
import ListeActive from "./listeActive/ListeActive"
import ListeArchive from "./listeArchive/ListeArchive"
//import FormAdd from "../formBook/FormAdd"
import BookForm from "../formBook/BookForm"
import "./ListeLivres.css"
import {fetchBooks,fetchbooks} from "../../../services/livres.service"

// import {addBook} from "../../../services/livres.service"


function ListeLivres() {
   const [books, setbooks] = useState([])
   const [searchValue, setSearchValue] = useState("")
 /* const [activeBooks,  setActiveBooks] = useState([])
  const [isVisible, setIsVisible] = useState(false) */
  const[modeAdmin,setModeAdmin]=useState(false)
  useEffect(() => {
    const fetchData =  () => {
      const result =  fetchbooks()
      setbooks(result)
    }
    console.log("useEffect")

    fetchData()
  }, [])

  useEffect(()=>{
    let user = localStorage.getItem('user')
    if(user ==="admin"){
        setModeAdmin(true)
    }

  },[])
 
/*   useEffect(() => {
    const fetchData =  () => {
      const result =  fetchbooks()
      setbooks(result)
    }
    console.log("useEffect")

    fetchData()
  }, []) */
     
 
/*   
   const addBook =  ( libelle,auteur)  => {
   
    setbooks(previousBooks => [
      ...previousBooks,
      { id: previousBooks.length + 1, libelle,auteur}
    ])
  }   */
  /* const addTask = (title, duration) => {
    setTasks(previousTasks => [
      ...previousTasks,
      { id: previousTasks.length + 1, title, duration: Number(duration) }
    ])
  }
  const addBook =(EAN, libelle)=>{
    setActiveBooks([...activeBooks, {EAN, libelle}])
  }
   */

  return (
 
    <div>
        
        <div className="homepage"></div>
        <div className="page" >

        <ListeActive  /> 
        {modeAdmin &&(  
              <ListeArchive/>              
        )}
        </div>

         <div className="homepage"></div>


    </div>
 

)
}

export default ListeLivres

