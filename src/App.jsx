import './App.css'
import Header from './components/Header'
import {Routes, Route} from 'react-router-dom'
import ListBook from './components/ListBook'
import AddBook from './components/AddBook'
import BookProvider from './context/BookContext'
import EditBook from './components/EditBook'

        

function App() {


  return (
    
      <div className='container'>
        <BookProvider>
        <Header />
        <Routes>
          <Route path='/' element={<ListBook />} />
          <Route path='/add' element={<AddBook />} /> 
          <Route path='/edit/:id' element={<EditBook />} />          
        </Routes>
        </BookProvider>
      </div>
      
  );
}

export default App;
