import { useBooksContext } from './useBooksContext.ts'
import { useEffect, useMemo, useState } from 'react'
import { getBooks } from '../services/books.service.ts'
import { type Library, type LibraryMapped } from '../models/books.interface.ts'
import { mappedBooks } from '../utils/books.utils.ts'

export function useFilter () {
  const [filter, setFilter] = useState<'title' | 'gender' | 'all'>('all')
  const [filterValue, setFilterValue] = useState<string>('')

  const { filledBooks, books } = useBooksContext()
  useEffect(() => {
    getBooks().then((books: Library[]) => {
      filledBooks(mappedBooks(books))
    })
      .catch((error: Error) => {
        console.error(error)
      })
  }, [])

  const handleChangeFilter = (value: 'title' | 'gender' | 'all') => {
    setFilter(value)
  }

  const handleChangeFilterValue = (value: string) => {
    setFilterValue(value)
  }

  const filteredBooks = useMemo(() => {
    const compareProperties: Record<string, (book: LibraryMapped) => any> = {
      title: book => book.book.title === filterValue,
      gender: book => book.book.genre === filterValue,
      all: book => book
    }

    return books.filter(compareProperties[filter])
  }, [books, filter, filterValue])

  return {
    books: filteredBooks,
    handleChangeFilter,
    handleChangeFilterValue,
    availableBooks: books.length
  }
}
