import { type Library, type LibraryMapped } from '../models/books.interface.ts'
import { type IBooksState } from '../models/books.state.interface.ts'
import { updateLocalStorage } from './books.storage.ts'

export function addBook (state: IBooksState, currentBook: LibraryMapped) {
  const newBooks = state.books.filter(({ book }) => book.isbn !== currentBook.book.isbn)

  const newState = {
    ...state,
    books: newBooks,
    readingBooks: [
      ...state.readingBooks,
      currentBook
    ]
  } satisfies IBooksState
  updateLocalStorage(newState)

  return newState
}

export function removeBook (state: IBooksState, idBook: string) {
  const newReadingBooks = state.readingBooks.filter(({ book }) => book.isbn !== idBook)
  const bookToDelete = state.readingBooks.find(({ book }) => book.isbn === idBook) as LibraryMapped

  const newState = {
    ...state,
    books: [...state.books, bookToDelete],
    readingBooks: newReadingBooks
  } satisfies IBooksState

  updateLocalStorage(newState)
  return newState
}

export function filledBooks (state: IBooksState, books: LibraryMapped[]) {
  const newState = {
    ...state,
    books
  } satisfies IBooksState

  updateLocalStorage(newState)
  return newState
}

export const mappedBooks = (books: Library[]) => {
  return books.map(({ book }) => ({
    book: {
      title: book.title,
      pages: book.pages,
      genre: book.genre,
      cover: book.cover,
      synopsis: book.synopsis,
      year: book.year,
      isbn: book.ISBN,
      author: {
        name: book.author.name,
        otherBooks: book.author.otherBooks
      }

    }
  }))
}
