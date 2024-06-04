import { t, flow, Instance } from 'mobx-state-tree';
import { deleteMeter, getMeters } from '../services/metersApi';

const Area = t.model('Area', {
  id: t.string,
});

const House = t.model('House', {
  address: t.string,
});

const Address = t.array(
  t.model('Address', {
    str_number_full: t.string,
    house: House,
  })
);

export const Meter = t.model('Meter', {
  id: t.string,
  _type: t.array(t.string),
  installation_date: t.string,
  is_automatic: t.maybeNull(t.boolean),
  initial_values: t.array(t.number),
  area: Area,
  description: t.string,
  address: Address,
});

export const MeterData = t.model('MeterData', {
  count: t.number,
  results: t.array(Meter),
});

const PageNumber = t.model('PageNumber', {
  page: t.number,
  offset: t.number,
});

export const MeterStore = t
  .model('MeterStore', {
    metersArray: MeterData,
    isLoading: t.boolean,
    currentPage: PageNumber,
  })
  .actions((self) => {
    const fetchMeters = flow(function* (limit: number, offset: number) {
      try {
        self.metersArray = yield getMeters(limit, offset);
        self.isLoading = true;
      } catch (e) {
        console.log(e);
      }
    });
    const meterDelete = flow(function* (
      id: string,
      limit: number,
      offset: number
    ) {
      try {
        yield deleteMeter(id);
        yield fetchMeters(limit, offset);
      } catch (e) {
        console.log(e);
      }
    });
    return { fetchMeters, meterDelete };
  });

export interface IMeter extends Instance<typeof MeterData> {}
export interface IMeterItem extends Instance<typeof Meter> {}
export interface IAddress extends Instance<typeof Address> {}
