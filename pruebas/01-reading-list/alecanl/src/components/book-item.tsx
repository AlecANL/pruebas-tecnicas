import { type LibraryMapped } from '../models/books.interface.ts'
import { IconAdd } from './icons.tsx'
import { useBooksContext } from '../hooks/useBooksContext.ts'

interface Props {
  currentBook: LibraryMapped
}
export function BookItem (props: Props) {
  const { currentBook } = props
  const { book, isInReadingList } = currentBook
  const { addBookToReadingList, removeBookFromReadingList } = useBooksContext()

  const handleAddOrDeleteBook = (book: LibraryMapped) => {
    if (isInReadingList) {
      removeBookFromReadingList({
        isbn: book.book.isbn
      })

      return
    }

    addBookToReadingList(book)
  }

  return (
    <>
      <article className='card-book' key={book.isbn}>
        <img src={book.cover} alt={`${book.title} book`} />
        <div className='card-book__info'>
          <h3>{book.title}</h3>
          <button onClick={() => { handleAddOrDeleteBook(currentBook) }} className='btn btn-primary'>
            <span>Add</span>
            <IconAdd/>
          </button>
        </div>
      </article>
    </>
  )
}
