import { t } from 'mobx-state-tree';
import ProductStore from './MeterStore';


const RootStore = t.model('RootStore', {
  products: ProductStore,
});

export default RootStore;