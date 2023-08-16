import './App.css'
import { useEffect, useState } from 'react'
import { type BooksResponse, type Library, type LibraryMapped } from './models/books.interface.ts'
import {IconAdd, IconClose, IconOpenBook} from './components/icons.tsx'
import readingAppLogo from './assets/images/reading-app-logo.png'

function App () {
  const [books, setBooks] = useState<LibraryMapped[]>([])
  const [isOpenReadingList, setOpenReadingList] = useState<boolean>(false)

  const toggleReadingListClassName = isOpenReadingList ? 'open' : 'close'

  const getBooks = () => {
    fetch('./data/books.json')
      .then(async response => await (await response.json() as Promise<BooksResponse>))
      .then(data => {
        setBooks(mappedBooks(data.library))
      })
      .catch(error => { console.log(error) })
  }

  const mappedBooks = (books: Library[]) => {
    return books.map(({ book }) => ({
      book: {
        title: book.title,
        pages: book.pages,
        genre: book.genre,
        cover: book.cover,
        synopsis: book.synopsis,
        year: book.year,
        isbn: book.ISBN,
        author: {
          name: book.author.name,
          otherBooks: book.author.otherBooks
        }

      }
    }))
  }

  const handleToggleReadingList = () => {
    setOpenReadingList((prevState) => !prevState)
  }

  useEffect(() => {
    getBooks()
  }, [])

  return (
    <>
      <main className='book-list'>
        <section className='available-book__section'>
          <header className='header'>
            <div className="logo">
              <img src={readingAppLogo} alt="open book for logo app" />
              <button onClick={handleToggleReadingList} className="toggle-reading-list">
                <span>reading list</span>
                <IconOpenBook/>
              </button>
            </div>
            <input className='search-box' type='text' placeholder='🔎 George martin, Ice and fire, ...' />
          </header>
          <div className="reading-list__content">
            <div className='reading-list__title'>
              <h2>Happy Reading</h2>
              <p>Welcome to our reading library! Dive into a world of possibilities and choose your next book to enjoy - adventure awaits on every page!</p>
            </div>
            <div className='categories'>
              <span className='active'>All</span>
              <span>All</span>
              <span>All</span>
              <span>All</span>
            </div>
            <p className='text-grey'>There are <span className='badge'>10</span> books available.</p>
          </div>
          <div className="card-book-list">
            {
              books.map(({ book }) => (
                <article className='card-book' key={book.isbn}>
                  <img src={book.cover} alt={`${book.title} book`} />
                  <div className='card-book__info'>
                    <h3>{book.title}</h3>
                    <button className='btn btn-primary'>
                      <span>Add</span>
                      <IconAdd/>
                    </button>
                  </div>
                </article>
              ))
            }
          </div>
        </section>
        <section className={`reading-list ${toggleReadingListClassName}`}>
          <div className="reading-list__section">
            <div className='reading-list__header'>
              <button onClick={handleToggleReadingList}>
                <IconClose/>
              </button>
            </div>
            <div className='reading-list__title in-reading'>
              <h2>Reading List</h2>
              <p>Don’t let the story end just yet. Continue reading your last book.
                And immerse yourself in the world of literature.</p>
            </div>
          </div>
          <div className="card-book-list">
            {
              books.map(({ book }) => (
                <article className='card-book' key={book.isbn}>
                  <img src={book.cover} alt={`${book.title} book`} />
                  <div className='card-book__info'>
                    <h3>{book.title}</h3>
                    <button className='btn btn-primary'>
                      <span>Add</span>
                      <IconAdd/>
                    </button>
                  </div>
                </article>
              ))
            }
          </div>
        </section>
      </main>
    </>
  )
}

export default App
