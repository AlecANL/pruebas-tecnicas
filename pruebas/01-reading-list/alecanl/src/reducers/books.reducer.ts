import { type IBooksState } from '../models/books.state.interface.ts'
import { type BOOKS_ACTIONS, BOOKS_REDUCER_ACTIOS } from '../const/books.const.ts'
import { addBook, filledBooks, removeBook } from '../utils/books.utils.ts'
import { type LibraryMapped } from '../models/books.interface.ts'

export function booksReducer (initialState: IBooksState, action: BOOKS_ACTIONS): IBooksState {
  const { type } = action

  if (type === BOOKS_REDUCER_ACTIOS.ADD_BOOK) {
    return addBook(initialState, action.payload as LibraryMapped) as IBooksState
  }

  if (type === BOOKS_REDUCER_ACTIOS.REMOVE_BOOK) {
    return removeBook(initialState, action.payload as string)
  }

  if (type === BOOKS_REDUCER_ACTIOS.FILLED_BOOKS) {
    return filledBooks(initialState, action.payload as LibraryMapped[])
  }

  return initialState
}
