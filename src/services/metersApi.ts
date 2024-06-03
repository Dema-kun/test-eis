import axios, { AxiosRequestConfig } from 'axios';


const client = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1',
});

export interface IProducts {
  id: number,
  title: string,
  price: number
}

export async function getMeters(limit: number, offset: number) {
  let result: IProducts[] = [];
  const config: AxiosRequestConfig = {
    params: {
      limit: limit,
      offset: offset
    }
  };
  try {
    const response = await client.get<IProducts[]>('/products', config);
    result = response.data;
  } catch (err) {
    console.log(err)
  }
  return result
}