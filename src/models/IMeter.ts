import { IAddress } from './IAddress';


export interface IMeter {
  id: number,
  type: string,
  date: Date,
  is_automatic: boolean,
  initial_values: number,
  address: IAddress,
  description: string,
}