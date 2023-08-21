import { type LibraryMapped } from '../models/books.interface.ts'

export function getGenderFilters (books: LibraryMapped[]) {
  const newBooks = [...books]
  return ['all', ...new Set(newBooks.map(book => book.book.genre))]
}
