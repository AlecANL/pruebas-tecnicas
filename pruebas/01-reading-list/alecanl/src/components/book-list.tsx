import { type LibraryMapped } from '../models/books.interface.ts'
import { BookItem } from './book-item.tsx'
import illustrationSearchNotFound from '../assets/images/books_list_not_found.svg'
import { BOOKS_TEXT_SECTIONS } from '../const/books.const.ts'

export interface IBookListProps {
  books: LibraryMapped[]
  isSearchEmpty: boolean
}

export function BookList (props: IBookListProps) {
  const { books, isSearchEmpty } = props

  const isBooksEmpty = books.length === 0

  return (
    <>
      {
        !isBooksEmpty && (
          <div className="card-book-list">
            {
              books.map((book) => (
                <BookItem currentBook={book} key={book.book.isbn} />
              ))
            }
          </div>
        )
      }
      {
        isBooksEmpty && isSearchEmpty
          ? (
          <div className="books-list_empty">
            <img src={illustrationSearchNotFound} alt="illustration empty boat for emtpy list because search no found element." />
            <p> { BOOKS_TEXT_SECTIONS.SEARCH_NOT_FOUND } </p>
          </div>
            )
          : null
      }
    </>
  )
}
