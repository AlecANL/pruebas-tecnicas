import { STATE_STORAGE_KEYS } from '../const/books.const.ts'
import { type IBooksState } from '../models/books.state.interface.ts'

export const state = {
  books: [],
  readingBooks: [],
  availableBooks: 0
} satisfies IBooksState

export const initialState = JSON.parse(localStorage.getItem(STATE_STORAGE_KEYS.READING_BOOKS_APP) as string) ?? state

export function updateLocalStorage (state: IBooksState) {
  localStorage.setItem(STATE_STORAGE_KEYS.READING_BOOKS_APP, JSON.stringify(state))
}
