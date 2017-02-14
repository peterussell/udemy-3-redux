import React, { Component } from 'react';

/* Containers:
    A Container is a React Component which has a direct connection to
    the state managed by Redux. React and Redux talk to each other via
    the react-redux library.
    Containers are the only place where Redux state can be injected into
    a React component. Doing this 'promotes' the Component to a
    Container.
    Containers are also sometimes called 'Smart Components' (as opposed
    to Dumb Components).

    >> Container: React Component which can access Redux state. <<
*/

export default class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
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
