import { t, Instance } from 'mobx-state-tree';
import { MeterStore } from './MeterStore';

export const RootStore = t
  .model('RootStore', {
    meterStore: t.optional(MeterStore, {
      meters: [],
      isLoading: false
    }),
})
.views(self => ({
  get isLoading() {
    return self.meterStore.isLoading
  },
  get getMeters() {
    return self.meterStore.meters
  },
}))
.actions(self => ({
  afterCreate() {
    self.meterStore.fetchMeters()
  }
}))

export interface IRootStore extends Instance<typeof RootStore> {}