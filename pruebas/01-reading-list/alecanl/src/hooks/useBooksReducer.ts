import { useReducer } from 'react'
import { booksReducer } from '../reducers/books.reducer.ts'
import { state } from '../utils/books.storage.ts'
import { BOOKS_REDUCER_ACTIOS } from '../const/books.const.ts'
import { type bookId, type LibraryMapped } from '../models/books.interface.ts'

export function useBooksReducer () {
  const [currentState, dispatch] = useReducer(booksReducer, state)

  const addBookToReadingList = (book: LibraryMapped) => {
    dispatch({
      type: BOOKS_REDUCER_ACTIOS.ADD_BOOK,
      payload: book
    })
  }

  const removeBookFromReadingList = (identifier: bookId) => {
    dispatch({
      type: BOOKS_REDUCER_ACTIOS.REMOVE_BOOK,
      payload: identifier.isbn
    })
  }

  const filledBooks = (books: LibraryMapped[]) => {
    dispatch({
      type: BOOKS_REDUCER_ACTIOS.FILLED_BOOKS,
      payload: books
    })
  }

  return {
    currentState,
    addBookToReadingList,
    removeBookFromReadingList,
    filledBooks
  }
}
