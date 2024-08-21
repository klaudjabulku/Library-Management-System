/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const Book = ({ book, handleRemoveBook }) => {
    const navigate = useNavigate();
    const { id, name, author, price, date } = book;

    const handleDelete = () => {
        const confirmed = window.confirm("Are you sure you want to delete this book?");
        if (confirmed) {
            handleRemoveBook(id);
        }
    };

    return (
        <div className="book">
            <h2>{name}</h2>
            <div className="bookDetail">
                <p>Author: {author}</p>
                <p>Price: {price}</p>
                <p>Date: {new Date(date).toDateString()}</p>
            </div>
            <div className="buttons">
                <button className="btn-edit" onClick={() => navigate(`/edit/${id}`)}>Edit</button>
                <button className="btn-delete" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
};

export default Book;
