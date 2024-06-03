import axios, { AxiosRequestConfig } from 'axios';
import { IMeter } from '../models/IMeter';
import { IAddress } from '../models/IAddress';


const client = axios.create({
  baseURL: 'http://showroom.eis24.me/api/v4/test',
});

export async function getMeters(limit: number, offset: number) {
  let area: IAddress[]
  const config: AxiosRequestConfig = {
    params: {
      limit: limit,
      offset: offset
    }
  };
  try {
    const metersResponse = await client.get<IMeter[]>('/meters', config);
    const meter = metersResponse.data
    console.log(meter);
    // meters.forEach((item) => {
    //   getAddress(item.area.id).then(res => area.push(res)).then(() => console.log(area))
    // })
    // console.log(meters);
  } catch (err) {
    console.log(err)
  }
}

async function getAddress(id: string) {
  let response = await client.get<IAddress>(`/areas?id__in=${id}`)
  return response.data
}