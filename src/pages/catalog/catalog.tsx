import Banner from '../../components/banner/banner';
// import CatalogFilter from '../../components/catalog-filter/catalog-filter';
import CatalogSort from '../../components/catalog-sort/catalog-sort';
import { CamerasType } from '../../types/types';
import { useAppSelector } from '../../hooks';
import ProductCard from '../../components/product-card/product-card';

function Catalog(): JSX.Element {
  const camerasList: CamerasType = useAppSelector((store) => store.camerasList);

  return (
    <>
      <Banner />
      <div className="page-content">
        <div className="breadcrumbs">
          <div className="container">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link" href="index.html">
                  Главная
                  <svg width="5" height="8" aria-hidden="true">
                    <use xlinkHref="#icon-arrow-mini"></use>
                  </svg>
                </a>
              </li>
              <li className="breadcrumbs__item">
                <span className="breadcrumbs__link breadcrumbs__link--active">
                  Каталог
                </span>
              </li>
            </ul>
          </div>
        </div>
        <section className="catalog">
          <div className="container">
            <h1 className="title title--h2">
              Каталог фото- и видеотехники
            </h1>
            <div className="page-content__columns">
              <div className="catalog__aside">
                {/* <CatalogFilter /> */}
              </div>
              <div className="catalog__content">
                <CatalogSort />
                <div className="cards catalog__cards">
                  {camerasList.map((cameraCard) =>{
                    const keyValue = cameraCard.id;
                    return <ProductCard cameraCard = {cameraCard} key = {keyValue} />;
                  })}
                </div>
                <div className="pagination">
                  <ul className="pagination__list">
                    <li className="pagination__item"><a className="pagination__link pagination__link--active" href="1">1</a>
                    </li>
                    <li className="pagination__item"><a className="pagination__link" href="2">2</a>
                    </li>
                    <li className="pagination__item"><a className="pagination__link" href="3">3</a>
                    </li>
                    <li className="pagination__item"><a className="pagination__link pagination__link--text" href="2">Далее</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Catalog;


