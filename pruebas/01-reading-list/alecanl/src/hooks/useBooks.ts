import { type Library } from '../models/books.interface.ts'
import { useEffect } from 'react'
import { getBooks } from '../services/books.service.ts'
import { useBooksContext } from './useBooksContext.ts'
import { mappedBooks } from '../utils/books.utils.ts'

export function useBooks () {
  const { filledBooks, books } = useBooksContext()
  useEffect(() => {
    getBooks().then((books: Library[]) => {
      filledBooks(mappedBooks(books))
    })
      .catch((error: Error) => {
        console.error(error)
      })
  }, [])

  return {
    books
  }
}
