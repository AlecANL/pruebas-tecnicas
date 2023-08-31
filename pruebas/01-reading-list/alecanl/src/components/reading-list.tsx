import { BookItem } from './book-item.tsx'
import { useBooksContext } from '../hooks/useBooksContext.ts'
import readingListBooksLogo from '../assets/images/reading_list_empty.svg'

export function ReadingList () {
  const { readingBooks } = useBooksContext()

  const isBooksEmpty = readingBooks.length === 0

  return (
    <>
      {
        !isBooksEmpty && (
          <div className="card-book-list">
            {
              readingBooks.map((book) => (
                <BookItem currentBook={book} key={book.book.isbn} />
              ))
            }
          </div>
        )
      }
      {
        isBooksEmpty && (
          <div className='card-book-list__empty'>
            <img src={readingListBooksLogo} alt="illustration solar system for emtpy list in reading list." />
          </div>
        )
      }
    </>
  )
}
