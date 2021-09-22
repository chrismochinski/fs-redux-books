import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';
import { useEffect } from 'react'; // so we can call our function on page load
import axios from 'axios';
import { useDispatch } from 'react-redux';

import './App.css';

function App() {

  const dispatch = useDispatch();

  // TODO - GET Book List from server

  useEffect(() => {
    fetchBookList();
  }, []); 

  
 // IDEA ADD THIS TO CHEAT SHEET
 // THIS HAS BEEN ADDED TO BOOKFORM BELOW PROPS!!

  const fetchBookList = () => {
    axios({ 
      method: 'GET',  
      url: '/books', 
    }).then(response => { 
      console.log(response.data);
      dispatch({  
        type: 'SET_BOOK_LIST', 
        payload: response.data,
        // ALTERNATIVE to const = action(asdgasdasdgiasngainglandfgnaerg)
      });
    })
  }


  return (
    <div className="App">
      <header><h1>Books w/ Redux!</h1></header>
      <main>
        <BookForm fetchBookList={fetchBookList}/> 
        <BookList />
      </main>
    </div>
  );
}

export default App;