import { t, flow } from 'mobx-state-tree';
import { getMeters } from '../services/metersApi';

const Area = t.model('Area', {
  id: t.string,
})

export const Meter = t.model('Product', {
  id: t.string,
  _type: t.array(t.string),
  installation_date: t.string,
  is_automatic: t.maybe(t.boolean),
  initial_values: t.array(t.number),
  area: Area,
  description: t.string,
})


const MeterStore = t.model('MeterStore', {
  meter: t.array(Meter),
}).actions((self) => ({
    getProducts: flow(function* () {
      try {
        let result
        yield getMeters(10, 0).then((res) => result = res);
        // @ts-ignore
        self.meter = result;
      } catch (error) {
        console.error("Failed to fetch", error)
      }
    }),
    afterCreate() {
      console.log(this.getProducts());
    }
  })
);

export default MeterStore;