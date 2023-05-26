
export interface User {
    isLogined: boolean,
    isLoading:boolean,
}
  
export interface Video {
  description: string,
  sources: string[],
  subtitle: string,
  thumb: string,
  title: string
}


interface Category {
  name: string,
  videos: Video[]
}

export interface Response {
  categories: Category[]
}

export interface InitialState {
  videos: Video[],
  isLoading: boolean
}
