import { type LibraryMapped } from '../models/books.interface.ts'
import { getGenderFilters } from '../utils/filter.utils.ts'
import { useState } from 'react'
import { useBooksContext } from '../hooks/useBooksContext.ts'

export interface IGenderFilterProps {
  books: LibraryMapped[]
  handleChangeFilterValue: (value: string) => void
  handleChangeFilter: (value: 'title' | 'gender' | 'all') => void
}

export function GenderFilter (props: IGenderFilterProps) {
  const { books: availableBooks } = useBooksContext()
  const [activeGender, setActiveGender] = useState<string>('all')
  const { handleChangeFilterValue, handleChangeFilter } = props
  const genders = getGenderFilters(availableBooks)

  const changeGender = (gender: string) => {
    setActiveGender(gender)
    handleChangeFilterValue(gender)
    handleChangeFilter(activeGender === 'all' ? 'all' : 'gender')
  }

  const activeClassName = (gender: string) => gender === activeGender ? 'active' : ''

  return (
    <>
      <div className='categories'>
        {
          genders.map((gender) => (
            <button onClick={() => { changeGender(gender) }} key={gender} className={`${activeClassName(gender)}`}>
              {gender}
            </button>
          ))
        }
      </div>
    </>
  )
}
