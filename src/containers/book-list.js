import React,{ Component } from 'react';
// react-redux is the glue between react and redux
import { connect } from 'react-redux';
import {selectBook } from '../actions/index';
// bindActionCreators is a function makes sure actions which is generated
// from the action creator flows through all reducers
import { bindActionCreators } from 'redux';

// Booklist container (is a component' which is bonded to the apps state)
class BookList extends Component{
  renderList(){
    return this.props.books.map((book) => {
      return (
        <li
        key = {book.title}
        onClick={() => this.props.selectBook(book)}
        className ="list-group-item">
        {book.title}
        </li>
      );
    });
  }
  render(){
    return (
      <ul className ="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// Takes apps state and maps it to BookList
// and it will have access to it
function mapStateToProps(state){
  // Whatever object is returned will show up as this.props
  // inside of BookList
  return{
    books : state.books
  };
}
// Anything returned from this function will end up as this.props
// on the BookList container
function mapDispatchToProps(dispatch){
  // Second selectbook is the actioncreator imported
  // First one is the key
  // Whenever selecBook is called the result should be passed
  // to all our reducers
  return bindActionCreators({selectBook: selectBook }, dispatch)
}
// Connect takes a function and component and produces a container
// a container is aware of the apps state
// Promote bookList from component to a container, needs to know
// About new dispatch method, selectBook, make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
