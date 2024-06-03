import { t, flow } from 'mobx-state-tree';
import { getMeters } from '../services/metersApi';

export const Product = t.model('Product', {
  id: t.number,
  title: t.string,
  price: t.number
})

const ProductStore = t.model('ProductStore', {
  products: t.array(Product),
}).actions((self) => ({
    getProducts: flow(function* () {
      try {
        let result
        yield getMeters(10, 0).then((res) => result = res);
        // @ts-ignore
        self.products = result;
        console.log(self.products)
      } catch (error) {
        console.error("Failed to fetch", error)
      }
    }),
    afterCreate() {
      console.log(this.getProducts());
    }
  })
);

export default ProductStore;