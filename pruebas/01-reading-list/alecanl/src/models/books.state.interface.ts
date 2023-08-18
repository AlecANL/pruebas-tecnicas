import { type bookId, type LibraryMapped } from './books.interface.ts'

export interface IBooksState {
  books: LibraryMapped[]
  readingBooks: LibraryMapped[]
  availableBooks: number
}

export interface IBookContextState extends IBooksState {
  addBookToReadingList: (book: LibraryMapped) => void
  removeBookFromReadingList: (identifier: bookId) => void
  filledBooks: (books: LibraryMapped[]) => void
}
