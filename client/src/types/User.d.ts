type Estado = 'A' | 'B'

export interface User {
  codigo: number,
  username: string,
  password: string,
  estado: Estado,
  nombres: string
}
