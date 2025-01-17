import { type bookId, type LibraryMapped } from './books.interface.ts'

export interface IBooksState {
  books: LibraryMapped[]
  readingBooks: LibraryMapped[]
}

export interface IBookContextState extends IBooksState {
  addBookToReadingList: (book: LibraryMapped) => void
  removeBookFromReadingList: (identifier: bookId) => void
  filledBooks: (books: LibraryMapped[]) => void
  filledReadingBooks: (books: LibraryMapped[]) => void
}
