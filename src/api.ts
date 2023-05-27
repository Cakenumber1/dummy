import axios from 'axios'

type ISearch = {
  query?: string,
  page?: number,
}

export const search = async ({ query = '', page = 0 } : ISearch) => {
  const res = await axios.get<any[]>(`https://hn.algolia.com/api/v1/search?query=${query}&hitsPerPage=10&page=${page}`)
  console.log(res)
  return res?.data
}

export const getRandomItem = async ({ id } : { id: number }) => {
  const res = await axios.get<any[]>(`https://hn.algolia.com/api/v1/items/${id}`)
  console.log(res)
  return res?.data
}
