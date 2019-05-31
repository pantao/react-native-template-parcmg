export type TAction = {
  type: string
  payload?: any
}

export type TTodo = {
  id: number
  content: string
}

export type TTodos = TTodo[]
