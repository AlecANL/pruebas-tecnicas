import { useContext } from 'react'
import { BooksContext } from '../context/books.context.tsx'
import { type IBookContextState } from '../models/books.state.interface.ts'

export function useBooksContext () {
  const context = useContext(BooksContext) as IBookContextState

  if (context == null) {
    throw new Error('useBooksContext must be used within a BooksProvider')
  }

  return context
}
