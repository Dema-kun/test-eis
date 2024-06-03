import { t } from 'mobx-state-tree';
import ProductStore from './ProductStore';


const RootStore = t.model('RootStore', {
  products: ProductStore,
});

export default RootStore;