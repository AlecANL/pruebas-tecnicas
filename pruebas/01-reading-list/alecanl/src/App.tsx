import './App.css'
import { type ChangeEvent, useState } from 'react'
import { IconClose, IconOpenBook } from './components/icons.tsx'
import readingAppLogo from './assets/images/reading-app-logo.png'
import { GenderFilter } from './components/gender-filter.tsx'
import { BookList } from './components/book-list.tsx'
import { ReadingList } from './components/reading-list.tsx'
import { BOOKS_TEXT_SECTIONS } from './const/books.const.ts'
import { useBooksContext } from './hooks/useBooksContext.ts'
import { useFilter } from './hooks/useFilter.ts'

function App () {
  const { books, handleChangeFilter, handleChangeFilterValue, availableBooks, isSearchEmpty } = useFilter()
  const { readingBooks } = useBooksContext()
  const [isOpenReadingList, setOpenReadingList] = useState<boolean>(false)

  const toggleReadingListClassName = isOpenReadingList ? 'open' : 'close'

  const handleToggleReadingList = () => {
    setOpenReadingList((prevState) => !prevState)
  }

  const handleSearchByTitle = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    handleChangeFilterValue(value)
    handleChangeFilter('title')
  }

  const textForReadingList = readingBooks.length <= 0 ? BOOKS_TEXT_SECTIONS.BOOKS_IN_READING_LIST_EMPTY : BOOKS_TEXT_SECTIONS.BOOKS_IN_READING_LIST

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
            <input name='title' onChange={handleSearchByTitle} className='search-box' type='text' placeholder='🔎 George martin, Ice and fire, ...' />
          </header>
          <div className="reading-list__content">
            <div className='reading-list__title'>
              <h2>Happy Reading</h2>
              <p> { BOOKS_TEXT_SECTIONS.BOOKS_LIST } </p>
            </div>
            <GenderFilter books={books} handleChangeFilterValue={handleChangeFilterValue} handleChangeFilter={handleChangeFilter} />
            <p className='text-grey'>There are <span className='badge'>
              {availableBooks}
            </span> books available.</p>
          </div>
          <BookList books={books} isSearchEmpty={isSearchEmpty} />
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
              <p> { textForReadingList } </p>
            </div>
          </div>
           <ReadingList />
        </section>
      </main>
    </>
  )
}

export default App
