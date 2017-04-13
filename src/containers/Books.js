import { connect } from 'react-redux'
import BookList from '../components/BookList'
import { removeBook } from '../actions'

const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeBook: (id) => {
      dispatch(removeBook(id))
    }
  }
}

const Books = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList)

export default Books
