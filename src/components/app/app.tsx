import { AppRoute } from '../utils/const';
import Layout from '../layout/layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Catalog from '../../pages/catalog/catalog';
import ProductPage from '../../pages/product-page/product-page';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../loading-screen/loading-screen';
import Basket from '../../pages/basket/basket';

function App() {
  const { isDataLoaded } = useAppSelector((state) => state);

  if(!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Catalog/>} />
          <Route path={AppRoute.Catalog} element={<Catalog/>} />
          <Route path={AppRoute.ProductCard} element={<ProductPage/>} />
          <Route path={AppRoute.Basket} element={<Basket />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
