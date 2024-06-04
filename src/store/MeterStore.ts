import { t, flow, Instance } from 'mobx-state-tree';
import { getMeters } from '../services/metersApi';

const Area = t.model('Area', {
  id: t.string,
})

const House = t.model('House', {
  address: t.string,
})

const Address = t.array(t.model('Address', {
  str_number_full: t.string,
  house: House
}))


export const Meter = t.model('Meter', {
  id: t.string,
  _type: t.array(t.string),
  installation_date: t.string,
  is_automatic: t.maybeNull(t.boolean),
  initial_values: t.array(t.number),
  area: Area,
  description: t.string,
  address: Address
});

export const MeterStore = t.model('MeterStore', {
    meters: t.array(Meter),
    isLoading: t.boolean
})
  .actions(self => {
      const fetchMeters = flow(function*() {
        try {
          self.meters.replace(yield getMeters(10, 0));
          self.isLoading = true;
        } catch (e) {
          console.log(e);
        }
      })
    return {fetchMeters}
  })

export interface IMeter extends Instance<typeof Meter> {}
export interface IAddress extends Instance<typeof Address> {}