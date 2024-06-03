export interface IAddress {
  str_number_full: string,
  house: {
    address: string,
  }
}

export interface IArea {
  results: IAddress[],
}