import { useNavigate } from "react-router-dom"
import BookForm from "./form/BookForm"
import { useContext } from "react";
import { BookContext } from "../context/BookContext";

const AddBook = () => {
    const navigate = useNavigate();
    const {books, setBooks} = useContext(BookContext)
    
   

    const handleOnSubmit = (book) => {
        setBooks([...books, book])
        navigate('/')
    }
  return (
    <div className="addForm">
      <BookForm handleSubmit ={handleOnSubmit} />
    </div>
  )
}

export default AddBook
