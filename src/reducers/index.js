import { combineReducers } from 'redux';
import BooksReducer from './reducer_books.js';
import ActiveBook from './reducer_active_book';
// Added our reducer to combine reducers call
// This reducer adds a key to our global applications state called books
// Value is Whatever is returned from our reducer (books);
const rootReducer = combineReducers({
  // Any key to the objet we provide to the reducers,
  // ends up as a key on a global state
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
