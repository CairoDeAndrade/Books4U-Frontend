import { Author } from "../author/author"
import { Genre } from "../genre/genre"

export interface Book {
  id: number
  title: string
  status: string
  copy: number
  genres: Genre[]
  publisher: {
      id: number
      name: string
  },
  bookLocalization: {
      id: number
      bookcase: string
      shelf: number
  },
  authors: Author[]
  publication_year: number
  cdu: string
  cdd: string
  cuter: string
}
