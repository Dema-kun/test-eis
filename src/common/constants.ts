interface IStringIndex {
  [key: string]: string
}

export const AUTOMATION: IStringIndex = {
  'true': 'да',
  'false': 'нет',
  'null': 'нет'
}

export const WATER: IStringIndex = {
  'ColdWaterAreaMeter': 'ХВС',
  'HotWaterAreaMeter': 'ГВС'
}