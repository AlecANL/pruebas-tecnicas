import { type LibraryMapped } from '../models/books.interface.ts'

export const STATE_STORAGE_KEYS = {
  READING_BOOKS_APP: '__readingBooks__'
}

export const BOOKS_REDUCER_ACTIOS = {
  ADD_BOOK: 'ADD_BOOK',
  REMOVE_BOOK: 'REMOVE_BOOK',
  FILLED_BOOKS: 'FILLED_BOOKS'
}

export type BOOKS_ACTIONS =
  | { type: typeof BOOKS_REDUCER_ACTIOS.ADD_BOOK, payload: LibraryMapped }
  | { type: typeof BOOKS_REDUCER_ACTIOS.REMOVE_BOOK, payload: string }
  | { type: typeof BOOKS_REDUCER_ACTIOS.FILLED_BOOKS, payload: LibraryMapped[] }

export const BOOKS_FILE_URL = './data/books.json'
