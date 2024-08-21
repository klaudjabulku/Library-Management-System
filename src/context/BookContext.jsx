import { createContext, useState } from "react";

export const BookContext = createContext();

// eslint-disable-next-line react/prop-types
const BookProvider = ({ children }) => {
    const [books, setBooks] = useState([]);

    const value = { books, setBooks };

    return (
        <BookContext.Provider value={value}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;

