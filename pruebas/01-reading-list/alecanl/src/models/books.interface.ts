export interface BooksResponse {
  library: Library[]
}

export interface Library {
  book: Book
}

export interface Book {
  title: string
  pages: number
  genre: string
  cover: string
  synopsis: string
  year: number
  ISBN: string
  author: Author
}

export interface LibraryMapped {
  book: BookMapped
}

export interface BookMapped {
  title: string
  pages: number
  genre: string
  cover: string
  synopsis: string
  year: number
  isbn: string
  author: Author
}

export type bookId = Pick<BookMapped, 'isbn'>

export interface Author {
  name: string
  otherBooks: string[]
}
