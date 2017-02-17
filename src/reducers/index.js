import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

/* CombineReducers provides the mapping of reducer functions to pieces
   of state.
   For each key, we assign one Reducer. */
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
