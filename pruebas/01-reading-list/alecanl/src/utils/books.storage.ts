import { STATE_STORAGE_KEYS } from '../const/books.const.ts'
import { type IBooksState } from '../models/books.state.interface.ts'

export const state = {
  books: [],
  readingBooks: []
} satisfies IBooksState

export const initialState = JSON.parse(localStorage.getItem(STATE_STORAGE_KEYS.READING_BOOKS_APP) as string) ?? state

export function updateLocalStorage (state: IBooksState) {
  localStorage.setItem(STATE_STORAGE_KEYS.READING_BOOKS_APP, JSON.stringify(state))
}

export function getBooksFromStorageWithEvent (state: any, event: StorageEvent) {
  if (event.key === STATE_STORAGE_KEYS.READING_BOOKS_APP) {
    return getBookFromStorage(state, STATE_STORAGE_KEYS.READING_BOOKS_APP)
  }

  return state
}

export function getBookFromStorage (state: any, key: string) {
  if (!key) return []

  const booksInStorage = JSON.parse(localStorage.getItem(key) as string)
  return !booksInStorage ? state : booksInStorage
}
