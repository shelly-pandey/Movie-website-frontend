export type Movie = {
  id: number
  title: string
  year: string
  genres: [string]
  director: string
  stars: { rate: number; count: number }
  description: string
  image: string
  funfacts: string
}

export type SearchProp = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type eventhandle = {
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export type themeChange = {
    theme: any

}