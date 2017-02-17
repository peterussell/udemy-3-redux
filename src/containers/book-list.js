/* Recall: if we use just an identifier (no curly braces) we pull in
   the whole object from the file; if we use curly braces, we import
   just that single property (which can be a property, value, etc). */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index';

/* Containers:
    A Container is a React Component which has a direct connection to
    the state managed by Redux. React and Redux talk to each other via
    the react-redux library.
    Containers are the only place where Redux state can be injected into
    a React component. Doing this 'promotes' the Component to a
    Container.
    Mapping the Redux state to a React component is done with the
    'mapStateToProps(state)' function (see below), which comes from
    { connect } in react-redux, then we use the 'connect' from react-redux
    to export this Component, which is - at that point - a container.
    Note that we *don't* export the BookList class, like we would for a
    normal component.
    Containers are also sometimes called 'Smart Components' (as opposed
    to Dumb Components).

    >> Container: React Component which can access Redux state. <<
*/
class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

/* mapStateToProps takes the application state (array of books and active
   book), and whatever is returned from here shows up as props inside
   of BookList.
   for example, if we returned:
     > return { asdf: '123' }
   then we could use (inside BookList, because it's within this file):
     > console.log(this.props.asdf);  // output: '123' */
function mapStateToProps(state) {
  // Recall: if the state ever changes, our component instantly re-renders
  // with the new state, and the new state gets re-assigned as props to the
  // Component which makes up the Container.
  return {
    books: state.books
  };
}

// Anything returned from this function will end up as props on
// the BookList container (eg. this.props.selectBook - or any *keys*
// used in bindActionCreators).
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all of
  // our Reducers (that's what bindActionCreators is doing).
  // It understands that selectBook is an ActionCreator. It then combines
  // all the Actions (which are just functions which return an object) and -
  // through the dispatch function (?) - passes the all to all of the Reducers.
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

/* Connect takes a function and a Component and links the two. This is
   what promotes a Component to a Container, and provides the glue between
   React and Redux. */

// (Udemy comments): Promote BookList from a component to a container - it
// needs to know about this new dispatch method, selectBook. Make it
// available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
