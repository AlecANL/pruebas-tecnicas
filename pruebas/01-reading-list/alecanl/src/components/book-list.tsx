import { type LibraryMapped } from '../models/books.interface.ts'
import { BookItem } from './book-item.tsx'

export interface IBookListProps {
  books: LibraryMapped[]
}

export function BookList (props: IBookListProps) {
  const { books } = props

  const isBooksEmpty = books.length === 0

  return (
    <>
      <div className="card-book-list">
        {
          !isBooksEmpty && books.map((book) => (
            <BookItem currentBook={book} key={book.book.isbn} />
          ))
        }
        {
          isBooksEmpty && (
            <div>
              empty
            </div>
          )
        }
      </div>
    </>
  )
}
