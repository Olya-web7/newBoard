export interface Comment {
  id: number,
  text: string
}

export interface Card {
  id: number,
  text: string,
  fav?: boolean,
  comments?: Comment[]
}

export interface Column {
  id: number,
  title: string,
  list: Card[]
}