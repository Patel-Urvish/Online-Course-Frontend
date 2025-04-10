export interface Course {
  courseId: number
  title: string
  description: string
  price: number
  courseType: string
  seatsAvailable?: number
  duration: number
  categoryId: number
  instructorId: number
  startDate?: string
  endDate?: string
  thumbnail: any
  category: CourseCategory
  userRating: UserRating
}

export interface CourseCategory {
  categoryId: number
  categoryName: string
  description: string
}

export interface UserRating {
  courseId: number
  averageRating: number
  totalRating: number
}
