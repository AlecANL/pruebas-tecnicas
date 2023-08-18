import { type LibraryMapped } from '../models/books.interface.ts'

export function getGenderFilters (books: LibraryMapped[]) {
  const newBooks = [...books]
  return [...new Set(newBooks.map(book => book.book.genre)), 'all']
}
