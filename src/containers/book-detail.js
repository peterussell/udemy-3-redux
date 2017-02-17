import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {

    // When the app first boots, React runs a number of Actions through the
    // reducers. Because they don't match any of our Action types, the value
    // for activeBook state gets set to null.
    // We need to handle the null case, render a message instead of the
    // book detail.
    if (!this.props.book) {
      return <div>Select a book to get started.</div>
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);
