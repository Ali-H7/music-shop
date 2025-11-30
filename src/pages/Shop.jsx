import ProductList from '../components/ProductList/ProductList';
import { useOutletContext } from 'react-router';
function Shop() {
  const { productRef } = useOutletContext();
  return <ProductList ref={productRef} headingsTitle={'OUR PRODUCTS'} />;
}

export default Shop;
