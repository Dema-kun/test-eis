import { t, Instance } from 'mobx-state-tree';
import { MeterStore } from './MeterStore';
import { LIMIT } from '../common/constants';

export const RootStore = t
  .model('RootStore', {
    meterStore: t.optional(MeterStore, {
      metersArray: { count: 0, results: [] },
      isLoading: false,
      currentPage: { page: 1, offset: 0 },
    }),
  })
  .views((self) => ({
    get isLoading() {
      return self.meterStore.isLoading;
    },
    get getMeters() {
      return self.meterStore.metersArray.results;
    },
    get getPagination() {
      return Math.ceil(self.meterStore.metersArray.count / 20);
    },
    get getCurrent() {
      return self.meterStore.currentPage;
    },
  }))
  .actions((self) => ({
    afterCreate() {
      self.meterStore.fetchMeters(LIMIT, 0);
    },
    deleteMeter(id: string, limit: number, offset: number) {
      self.meterStore.meterDelete(id, LIMIT, offset);
      console.log('delete');
    },
    setPage(limit: number, offset: number) {
      self.meterStore.fetchMeters(LIMIT, offset);
      self.meterStore.currentPage.page = offset / LIMIT;
      self.meterStore.currentPage.offset = offset;
    },
  }));

export interface IRootStore extends Instance<typeof RootStore> {}
