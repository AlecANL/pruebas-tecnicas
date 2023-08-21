import { createContext } from 'react'
import { type IBooksProviderProps } from '../models/books.context.interface.ts'
import { useBooksReducer } from '../hooks/useBooksReducer.ts'
import { type IBookContextState } from '../models/books.state.interface.ts'

export const BooksContext = createContext<IBookContextState | null>(null)

export function BooksProvider ({ children }: IBooksProviderProps) {
  const { currentState, removeBookFromReadingList, addBookToReadingList, filledBooks, filledReadingBooks } = useBooksReducer()

  const value: IBookContextState = {
    books: currentState.books,
    readingBooks: currentState.readingBooks,
    addBookToReadingList,
    removeBookFromReadingList,
    filledBooks,
    filledReadingBooks
  }

  return (
    <BooksContext.Provider value={value}>
      {children}
    </BooksContext.Provider>
  )
}
