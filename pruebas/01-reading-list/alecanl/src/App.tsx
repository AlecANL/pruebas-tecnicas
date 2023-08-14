import './App.css'
import { useEffect, useState } from 'react'
import { type BooksResponse, type Library, type LibraryMapped } from './models/books.interface.ts'
import { IconOpenBook } from './components/icons.tsx'
import readingAppLogo from './assets/images/reading-app-logo.png'

function App () {
  const [books, setBooks] = useState<LibraryMapped[]>([])
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

  useEffect(() => {
    getBooks()
  }, [])

  return (
    <>
      <main>
        <header>
          <div className="logo">
            <img src={readingAppLogo} alt="open book for logo app" />
            <div className="name">
              <span>reading list</span>
              <IconOpenBook/>
            </div>
          </div>
          <input type='text' placeholder='Search a book' />
        </header>
        <section className='card-book-list'>
          {
            books.map(({ book }) => (
              <article className='card-book' key={book.isbn}>
                <img src={book.cover} alt={`${book.title} book`} />
                <div className='card-book__info'>
                  <h2>{book.title}</h2>
                  <button>Add</button>
                </div>
              </article>
            ))
          }
        </section>
        <section></section>
      </main>
    </>
  )
}

export default App
