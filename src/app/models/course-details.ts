export interface CourseDetails {
    reviews: Review[]
    sessionDetails: any[]
    courseId: number
    title: string
    description: string
    price: number
    courseType: string
    seatsAvailable: number
    duration: number
    categoryId: number
    instructorId: number
    startDate: string
    endDate: string
    thumbnail: any
    category: Category
    userRating: UserRating
  }
  
  export interface Review {
    courseId: number
    userName: string
    rating: number
    comments: string
    reviewDate: string
  }
  
  export interface Category {
    categoryId: number
    categoryName: string
    description: string
  }
  
  export interface UserRating {
    courseId: number
    averageRating: number
    totalRating: number
  }
  