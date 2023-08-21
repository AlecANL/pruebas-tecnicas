import { BookItem } from './book-item.tsx'
import { useBooksContext } from '../hooks/useBooksContext.ts'

export function ReadingList () {
  const { readingBooks } = useBooksContext()

  const isBooksEmpty = readingBooks.length === 0

  return (
    <>
      <div className="card-book-list">
        {
          !isBooksEmpty && readingBooks.map((book) => (
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
