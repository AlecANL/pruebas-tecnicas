import { createContext } from 'react'
import { type IBooksProviderProps } from '../models/books.context.interface.ts'
import { useBooksReducer } from '../hooks/useBooksReducer.ts'
import { type IBookContextState } from '../models/books.state.interface.ts'

export const BooksContext = createContext<IBookContextState | null>(null)

export function BooksProvider ({ children }: IBooksProviderProps) {
  const { currentState, removeBookFromReadingList, addBookToReadingList, filledBooks } = useBooksReducer()

  const value: IBookContextState = {
    books: currentState.books,
    availableBooks: currentState.availableBooks,
    readingBooks: currentState.readingBooks,
    addBookToReadingList,
    removeBookFromReadingList,
    filledBooks
  }

  return (
    <BooksContext.Provider value={value}>
      {children}
    </BooksContext.Provider>
  )
}
