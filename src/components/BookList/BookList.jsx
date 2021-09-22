import { useSelector } from 'react-redux';

function BookList() {
  
  const bookList = useSelector(store => store.bookList); // pull info OUT of Redux

  return (
    <section>
      <h2>All Books</h2>
      <ul>

        {/* ....map puts on page */}

        {bookList.map((book, index) => 
          <li key={index}>{book.title} by {book.author}</li>  
        )}
      </ul>
    </section>
  );
}

export default BookList;