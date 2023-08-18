import { type LibraryMapped } from '../models/books.interface.ts'
import { IconAdd } from './icons.tsx'
import { useBooksContext } from '../hooks/useBooksContext.ts'

export interface IBookListProps {
  books: LibraryMapped[]
}

export function BookList (props: IBookListProps) {
  const { books } = props
  const { addBookToReadingList } = useBooksContext()

  const isBooksEmpty = books.length === 0

  return (
    <>
      <div className="card-book-list">
        {
          !isBooksEmpty && books.map((book) => (
            <article className='card-book' key={book.book.isbn}>
              <img src={book.book.cover} alt={`${book.book.title} book`} />
              <div className='card-book__info'>
                <h3>{book.book.title}</h3>
                <button onClick={() => { addBookToReadingList(book) }} className='btn btn-primary'>
                  <span>Add</span>
                  <IconAdd/>
                </button>
              </div>
            </article>
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
