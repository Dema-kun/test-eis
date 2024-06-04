import axios from 'axios';
import { IAddress, IMeter } from '../store/MeterStore';


const client = axios.create({
  baseURL: 'http://showroom.eis24.me/api/v4/test',
});

type ICash = {
  [key: string]: IAddress;
}
const cash: ICash = {};

export async function getMeters(limit: number, offset: number) {
    const metersResponse: IMeter[] = await client.get(`/meters?limit=${limit}&offset=${offset}`)
      .then(response => response.data.results)
      .catch(error => console.log(error))

    // @ts-ignore
  for(let item of metersResponse) {
      let address: IAddress;
      if (cash[item.area.id]) {
        address = cash[item.area.id];
      } else {
        address = await getAddress(item.area.id);
        cash[item.area.id] = address;
      }
      item.address = address;
    }
    return metersResponse;
}

export async function getAddress(id: string) {
    return client.get(`/areas?id__in=${id}`)
      .then(data => data.data.results)
}