// Reducers are only ever called when an action occurs.
// State argument is not the application state, only the state this Reducer
// is responsible for (the property it's attached to in reducers/index.js).

// state = null is ES6, required to handle the case where the app first boots
// up and the state is undefined. Redux doesn't let us return undefined, so
// we explicitly set it to null.
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      // Always return a fresh object (eg. state.book = book.title is bad)
      return action.payload;
  }

  return state;
}
