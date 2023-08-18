import './App.css'
import { useState } from 'react'
import { IconClose, IconOpenBook } from './components/icons.tsx'
import readingAppLogo from './assets/images/reading-app-logo.png'
import { useBooks } from './hooks/useBooks.ts'
import { useFilter } from './hooks/useFilter.ts'
import { GenderFilter } from './components/gender-filter.tsx'
import { ReadingList } from './components/reading-list.tsx'
import { useBooksContext } from './hooks/useBooksContext.ts'
import { BookList } from './components/book-list.tsx'

function App () {
  useBooks()
  const { books, handleChangeFilterValue, handleChangeFilter, availableBooks } = useFilter()
  const { readingBooks } = useBooksContext()
  const [isOpenReadingList, setOpenReadingList] = useState<boolean>(false)

  const toggleReadingListClassName = isOpenReadingList ? 'open' : 'close'

  const handleToggleReadingList = () => {
    setOpenReadingList((prevState) => !prevState)
  }

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
            <GenderFilter books={books} handleChangeFilterValue={handleChangeFilterValue} handleChangeFilter={handleChangeFilter} />
            <p className='text-grey'>There are <span className='badge'>
              {availableBooks}
            </span> books available.</p>
          </div>
          <BookList books={books}/>
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
          <ReadingList books={readingBooks}/>
        </section>
      </main>
    </>
  )
}

export default App
