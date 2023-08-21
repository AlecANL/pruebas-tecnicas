import { useEffect, useMemo, useState } from 'react'
import { getBooks } from '../services/books.service.ts'
import { mappedBooks } from '../utils/books.utils.ts'
import { getBooksFromStorageWithEvent } from '../utils/books.storage.ts'
import { type Library, type LibraryMapped } from '../models/books.interface.ts'
import { useBooksContext } from './useBooksContext.ts'

export function useSomething () {
  const context = useBooksContext()
  const { books, readingBooks, filledBooks, filledReadingBooks } = context
  const [filter, setFilter] = useState<'title' | 'gender' | 'all'>('all')
  const [filterValue, setFilterValue] = useState<string>('')

  useEffect(() => {
    getBooks().then((books: Library[]) => {
      filledBooks(mappedBooks(books))
    })
      .catch(error => new Error(error))

    window.addEventListener('storage', handleStorage)
    return () => {
      window.removeEventListener('storage', handleStorage)
    }
  }, [])

  const filteredBooks = useMemo(() => {
    const compareProperties: Record<string, (book: LibraryMapped) => any> = {
      title: book => book.book.title === filterValue,
      gender: book => book.book.genre === filterValue,
      all: book => book
    }

    return books.filter(compareProperties[filter])
  }, [books, filter, filterValue])

  const handleChangeFilter = (value: 'title' | 'gender' | 'all') => {
    setFilter(value)
  }

  const handleChangeFilterValue = (value: string) => {
    setFilterValue(value)
  }

  const handleStorage = (event: StorageEvent) => {
    const currentBooks = getBooksFromStorageWithEvent({
      books,
      readingBooks
    }, event)
    filledBooks(currentBooks.books)
    filledReadingBooks(currentBooks.readingBooks)
  }

  return {
    books: filteredBooks,
    handleChangeFilter,
    handleChangeFilterValue,
    availableBooks: filteredBooks.length
  }
}
