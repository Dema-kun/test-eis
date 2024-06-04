import gvs from '../assets/gvs.svg';
import hvs from '../assets/hvs.svg';

interface IStringIndex {
  [key: string]: string;
}

interface IWater {
  [key: string]: {
    water: string;
    icon: string;
  };
}

export const AUTOMATION: IStringIndex = {
  true: 'да',
  false: 'нет',
  null: 'нет',
};

export const WATER: IWater = {
  ColdWaterAreaMeter: {
    water: 'ХВС',
    icon: hvs,
  },
  HotWaterAreaMeter: {
    water: 'ГВС',
    icon: gvs,
  },
};

export const LIMIT = 20;
