import { type BooksResponse } from '../models/books.interface.ts'
import { BOOKS_FILE_URL } from '../const/books.const.ts'

export async function getBooks () {
  const response = await fetch(BOOKS_FILE_URL)
  const data = await response.json() as BooksResponse
  return data.library
}
