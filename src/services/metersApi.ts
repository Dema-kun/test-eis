import axios, { AxiosRequestConfig } from 'axios';
import { IResults } from '../models/IMeter';
import { IArea } from '../models/IAddress';


const client = axios.create({
  baseURL: 'http://showroom.eis24.me/api/v4/test',
});

export async function getMeters(limit: number, offset: number) {
  let area: IArea[];
  const config: AxiosRequestConfig = {
    params: {
      limit: limit,
      offset: offset
    }
  };
  try {
    const metersResponse = await client.get<IResults>('/meters', config);
    const meter = metersResponse.data.results
    console.log(meter);
    meter.forEach((item) => {
      getAddress(item.area.id);
      console.log(item.area.id);
    })
  } catch (err) {
    console.log(err)
  }
}

async function getAddress(id: string) {
  let response = await client.get<IArea>(`/areas?id__in=${id}`)
  console.log(response.data.results[0])
}