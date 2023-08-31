import { type LibraryMapped } from '../models/books.interface.ts'

export const STATE_STORAGE_KEYS = {
  READING_BOOKS_APP: '__readingBooks__'
}

export const BOOKS_REDUCER_ACTIOS = {
  ADD_BOOK: 'ADD_BOOK',
  REMOVE_BOOK: 'REMOVE_BOOK',
  FILLED_BOOKS: 'FILLED_BOOKS',
  FILLED_READING_BOOKS: 'FILLED_READING_BOOKS'
}

export const BOOKS_TEXT_SECTIONS = {
  BOOKS_IN_READING_LIST_EMPTY: 'Your reading list is empty at the moment - it\'s time to discover new books and fill it with exciting literary adventures!',
  BOOKS_IN_READING_LIST: 'Don’t let the story end just yet. Continue reading your last book.\n' +
    'And immerse yourself in the world of literature.',
  BOOKS_LIST: 'Welcome to our reading library! Dive into a world of possibilities and choose your next book to enjoy - adventure awaits on every page!',
  SEARCH_NOT_FOUND: 'Oops,\n' +
    'There is not result for your search. Come on try again !'
}

export type BOOKS_ACTIONS =
  | { type: typeof BOOKS_REDUCER_ACTIOS.ADD_BOOK, payload: LibraryMapped }
  | { type: typeof BOOKS_REDUCER_ACTIOS.REMOVE_BOOK, payload: string }
  | { type: typeof BOOKS_REDUCER_ACTIOS.FILLED_BOOKS, payload: LibraryMapped[] }
  | { type: typeof BOOKS_REDUCER_ACTIOS.FILLED_READING_BOOKS, payload: LibraryMapped[] }

export const BOOKS_FILE_URL = './data/books.json'
