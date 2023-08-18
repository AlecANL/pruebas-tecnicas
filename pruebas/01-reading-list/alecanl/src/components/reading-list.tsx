import { type LibraryMapped } from '../models/books.interface.ts'
import { IconAdd } from './icons.tsx'
import { useBooksContext } from '../hooks/useBooksContext.ts'

interface IReadingListProps {
  books: LibraryMapped[]
}

export function ReadingList (props: IReadingListProps) {
  const { books } = props
  const { removeBookFromReadingList } = useBooksContext()

  const isBooksEmpty = books.length === 0

  return (
    <>
      <div className="card-book-list">
            {
              !isBooksEmpty && books.map(({ book }) => (
                <article className='card-book' key={book.isbn}>
                  <img src={book.cover} alt={`${book.title} book`} />
                  <div className='card-book__info'>
                    <h3>{book.title}</h3>
                    <button onClick={() => { removeBookFromReadingList({ isbn: book.isbn }) }} className='btn btn-primary'>
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
