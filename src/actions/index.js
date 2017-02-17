/* This is where the ActionCreators live. For each action, eg. user clicking
   a button, an ActionCreator creates an Action. An Action is an object, which
   has a 'type:' property and usually some other data (the 'payload').
   Each Action is passed to all Reducers. Each Reducer examines the type:
   property and checks whether it wants to do work and/or modify the piece
   of state it's responsible for (recall: each Reducer is responsible for a
   single piece of state).
   If it does, then it returns that piece of state. If not, it just returns
   currentState.
   Many of these pieces will be in other files. */

export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
