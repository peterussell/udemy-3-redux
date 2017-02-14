import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

/* CombineReducers provides the mapping of reducer functions to pieces
   of state. */
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
