import { Book } from "../book/Book"
import { Student } from "../student/student"

export interface Loan {
  id: number
  startDate: Date
  endDate: Date
  deliveredDate: Date
  tax: number
  books: Book[]
  student: Student
}
