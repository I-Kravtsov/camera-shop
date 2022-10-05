import { AppRoute } from '../utils/const';
import Layout from '../layout/layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Catalog from '../../pages/catalog/catalog';
import ProductPage from '../../pages/product-page/product-page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Catalog/>} />
          <Route path={AppRoute.Catalog} element={<Catalog/>} />
          <Route path={AppRoute.ProductCard} element={<ProductPage/>} />
          {/* <Route path={AppRoute.Cart} element={<Cart />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
