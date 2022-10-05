import Banner from '../../components/banner/banner';
// import CatalogFilter from '../../components/catalog-filter/catalog-filter';
// import CatalogSort from '../../components/catalog-sort/catalog-sort';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../components/utils/const';

function Catalog(): JSX.Element {
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
                {/* <CatalogSort /> */}
                <div className="cards catalog__cards">
                  <div className="product-card">
                    <div className="product-card__img">
                      <picture>
                        <source type="image/webp" srcSet="img/content/img1.webp, img/content/img1@2x.webp 2x" />
                        <img src="img/content/img1.jpg" srcSet="img/content/img1@2x.jpg 2x" width="280" height="240" alt="Ретрокамера «Das Auge IV»" />
                      </picture>
                    </div>
                    <div className="product-card__info">
                      <div className="rate product-card__rate">
                        <svg width="17" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-full-star"></use>
                        </svg>
                        <svg width="17" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-full-star"></use>
                        </svg>
                        <svg width="17" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-full-star"></use>
                        </svg>
                        <svg width="17" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-star"></use>
                        </svg>
                        <svg width="17" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-star"></use>
                        </svg>
                        <p className="visually-hidden">Рейтинг: 3</p>
                        <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>23</p>
                      </div>
                      <p className="product-card__title">Ретрокамера «Das Auge IV»</p>
                      <p className="product-card__price"><span className="visually-hidden">Цена:</span>73 450 ₽
                      </p>
                    </div>
                    <div className="product-card__buttons">
                      <button className="btn btn--purple product-card__btn" type="button">Купить
                      </button>
                      <Link className="btn btn--transparent" to={AppRoute.ProductCard}>
                        Подробнее
                      </Link>
                    </div>
                  </div>
                  <div className="product-card">
                    <div className="product-card__img">
                      <picture>
                        <source type="image/webp" srcSet="img/content/img9.webp, img/content/img9@2x.webp 2x" />
                        <img src="img/content/img9.jpg" srcSet="img/content/img9@2x.jpg 2x" width="280" height="240" alt="Фотоаппарат FastShot MR-5" />
                      </picture>
                    </div>
                    <div className="product-card__info">
                      <div className="rate product-card__rate">
                        <svg width="17" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-full-star"></use>
                        </svg>
                        <svg width="17" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-full-star"></use>
                        </svg>
                        <svg width="17" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-full-star"></use>
                        </svg>
                        <svg width="17" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-full-star"></use>
                        </svg>
                        <svg width="17" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-star"></use>
                        </svg>
                        <p className="visually-hidden">Рейтинг: 4</p>
                        <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>12</p>
                      </div>
                      <p className="product-card__title">Фотоаппарат FastShot MR-5</p>
                      <p className="product-card__price"><span className="visually-hidden">Цена:</span>18 970 ₽
                      </p>
                    </div>
                    <div className="product-card__buttons">
                      <a className="btn btn--purple-border product-card__btn product-card__btn--in-cart" href="#">
                        <svg width="16" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-basket"></use>
                        </svg>В корзине
                      </a>
                      <a className="btn btn--transparent" href="#">Подробнее
                      </a>
                    </div>
                  </div>
                  <div className="product-card">
                    <div className="product-card__img">
                      <picture>
                        <source type="image/webp" srcSet="img/content/img5.webp, img/content/img5@2x.webp 2x" />
                        <img src="img/content/img5.jpg" srcSet="img/content/img5@2x.jpg 2x" width="280" height="240" alt="Фотоаппарат Instaprinter P2" />
                      </picture>
                    </div>
                    <div className="product-card__info">
                      <div className="rate product-card__rate">
                        <svg width="17" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-full-star"></use>
                        </svg>
                        <svg width="17" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-full-star"></use>
                        </svg>
                        <svg width="17" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-full-star"></use>
                        </svg>
                        <svg width="17" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-full-star"></use>
                        </svg>
                        <svg width="17" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-full-star"></use>
                        </svg>
                        <p className="visually-hidden">Рейтинг: 5</p>
                        <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>849</p>
                      </div>
                      <p className="product-card__title">Фотоаппарат Instaprinter P2</p>
                      <p className="product-card__price"><span className="visually-hidden">Цена:</span>8 430 ₽
                      </p>
                    </div>
                    <div className="product-card__buttons">
                      <button className="btn btn--purple product-card__btn" type="button">Купить
                      </button>
                      <a className="btn btn--transparent" href="#">Подробнее
                      </a>
                    </div>
                  </div>
                  <div className="product-card">
                    <div className="product-card__img">
                      <picture>
                        <source type="image/webp" srcSet="img/content/img9.webp, img/content/img9@2x.webp 2x" />
                        <img src="img/content/img9.jpg" srcSet="img/content/img9@2x.jpg 2x" width="280" height="240" alt="Фотоаппарат FastShot MR-5" />
                      </picture>
                    </div>
                    <div className="product-card__info">
                      <div className="rate product-card__rate">
                        <svg width="17" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-full-star"></use>
                        </svg>
                        <svg width="17" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-full-star"></use>
                        </svg>
                        <svg width="17" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-full-star"></use>
                        </svg>
                        <svg width="17" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-full-star"></use>
                        </svg>
                        <svg width="17" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-star"></use>
                        </svg>
                        <p className="visually-hidden">Рейтинг: 4</p>
                        <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>12</p>
                      </div>
                      <p className="product-card__title">Фотоаппарат FastShot MR-5</p>
                      <p className="product-card__price"><span className="visually-hidden">Цена:</span>18 970 ₽
                      </p>
                    </div>
                    <div className="product-card__buttons">
                      <button className="btn btn--purple product-card__btn" type="button">Купить
                      </button>
                      <a className="btn btn--transparent" href="#">Подробнее
                      </a>
                    </div>
                  </div>
                  <div className="product-card">
                    <div className="product-card__img">
                      <picture>
                        <source type="image/webp" srcSet="img/content/img5.webp, img/content/img5@2x.webp 2x" />
                        <img src="img/content/img5.jpg" srcSet="img/content/img5@2x.jpg 2x" width="280" height="240" alt="Фотоаппарат Instaprinter P2" />
                      </picture>
                    </div>
                    <div className="product-card__info">
                      <div className="rate product-card__rate">
                        <svg width="17" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-full-star"></use>
                        </svg>
                        <svg width="17" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-full-star"></use>
                        </svg>
                        <svg width="17" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-full-star"></use>
                        </svg>
                        <svg width="17" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-full-star"></use>
                        </svg>
                        <svg width="17" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-full-star"></use>
                        </svg>
                        <p className="visually-hidden">Рейтинг: 5</p>
                        <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>849</p>
                      </div>
                      <p className="product-card__title">Фотоаппарат Instaprinter P2</p>
                      <p className="product-card__price"><span className="visually-hidden">Цена:</span>8 430 ₽
                      </p>
                    </div>
                    <div className="product-card__buttons">
                      <button className="btn btn--purple product-card__btn" type="button">Купить
                      </button>
                      <a className="btn btn--transparent" href="#">Подробнее
                      </a>
                    </div>
                  </div>
                  <div className="product-card">
                    <div className="product-card__img">
                      <picture>
                        <source type="image/webp" srcSet="img/content/img1.webp, img/content/img1@2x.webp 2x" />
                        <img src="img/content/img1.jpg" srcSet="img/content/img1@2x.jpg 2x" width="280" height="240" alt="Ретрокамера «Das Auge IV»"/>
                      </picture>
                    </div>
                    <div className="product-card__info">
                      <div className="rate product-card__rate">
                        <svg width="17" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-full-star"></use>
                        </svg>
                        <svg width="17" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-full-star"></use>
                        </svg>
                        <svg width="17" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-full-star"></use>
                        </svg>
                        <svg width="17" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-star"></use>
                        </svg>
                        <svg width="17" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-star"></use>
                        </svg>
                        <p className="visually-hidden">Рейтинг: 3</p>
                        <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>23</p>
                      </div>
                      <p className="product-card__title">Ретрокамера «Das Auge IV»</p>
                      <p className="product-card__price"><span className="visually-hidden">Цена:</span>73 450 ₽
                      </p>
                    </div>
                    <div className="product-card__buttons">
                      <button className="btn btn--purple product-card__btn" type="button">Купить
                      </button>
                      <a className="btn btn--transparent" href="#">Подробнее
                      </a>
                    </div>
                  </div>
                  <div className="product-card">
                    <div className="product-card__img">
                      <picture>
                        <source type="image/webp" srcSet="img/content/img5.webp, img/content/img5@2x.webp 2x" />
                        <img src="img/content/img5.jpg" srcSet="img/content/img5@2x.jpg 2x" width="280" height="240" alt="Фотоаппарат Instaprinter P2" />
                      </picture>
                    </div>
                    <div className="product-card__info">
                      <div className="rate product-card__rate">
                        <svg width="17" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-full-star"></use>
                        </svg>
                        <svg width="17" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-full-star"></use>
                        </svg>
                        <svg width="17" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-full-star"></use>
                        </svg>
                        <svg width="17" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-full-star"></use>
                        </svg>
                        <svg width="17" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-full-star"></use>
                        </svg>
                        <p className="visually-hidden">Рейтинг: 5</p>
                        <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>849</p>
                      </div>
                      <p className="product-card__title">Фотоаппарат Instaprinter P2</p>
                      <p className="product-card__price"><span className="visually-hidden">Цена:</span>8 430 ₽
                      </p>
                    </div>
                    <div className="product-card__buttons">
                      <button className="btn btn--purple product-card__btn" type="button">Купить
                      </button>
                      <a className="btn btn--transparent" href="#">Подробнее
                      </a>
                    </div>
                  </div>
                  <div className="product-card">
                    <div className="product-card__img">
                      <picture>
                        <source type="image/webp" srcSet="img/content/img1.webp, img/content/img1@2x.webp 2x" />
                        <img src="img/content/img1.jpg" srcSet="img/content/img1@2x.jpg 2x" width="280" height="240" alt="Ретрокамера «Das Auge IV»" />
                      </picture>
                    </div>
                    <div className="product-card__info">
                      <div className="rate product-card__rate">
                        <svg width="17" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-full-star"></use>
                        </svg>
                        <svg width="17" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-full-star"></use>
                        </svg>
                        <svg width="17" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-full-star"></use>
                        </svg>
                        <svg width="17" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-star"></use>
                        </svg>
                        <svg width="17" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-star"></use>
                        </svg>
                        <p className="visually-hidden">Рейтинг: 3</p>
                        <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>23</p>
                      </div>
                      <p className="product-card__title">Ретрокамера «Das Auge IV»</p>
                      <p className="product-card__price"><span className="visually-hidden">Цена:</span>73 450 ₽
                      </p>
                    </div>
                    <div className="product-card__buttons">
                      <button className="btn btn--purple product-card__btn" type="button">Купить
                      </button>
                      <a className="btn btn--transparent" href="#">Подробнее
                      </a>
                    </div>
                  </div>
                  <div className="product-card">
                    <div className="product-card__img">
                      <picture>
                        <source type="image/webp" srcSet="img/content/img9.webp, img/content/img9@2x.webp 2x" />
                        <img src="img/content/img9.jpg" srcSet="img/content/img9@2x.jpg 2x" width="280" height="240" alt="Фотоаппарат FastShot MR-5" />
                      </picture>
                    </div>
                    <div className="product-card__info">
                      <div className="rate product-card__rate">
                        <svg width="17" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-full-star"></use>
                        </svg>
                        <svg width="17" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-full-star"></use>
                        </svg>
                        <svg width="17" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-full-star"></use>
                        </svg>
                        <svg width="17" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-full-star"></use>
                        </svg>
                        <svg width="17" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-star"></use>
                        </svg>
                        <p className="visually-hidden">Рейтинг: 4</p>
                        <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>12</p>
                      </div>
                      <p className="product-card__title">Фотоаппарат FastShot MR-5</p>
                      <p className="product-card__price"><span className="visually-hidden">Цена:</span>18 970 ₽
                      </p>
                    </div>
                    <div className="product-card__buttons">
                      <button className="btn btn--purple product-card__btn" type="button">Купить
                      </button>
                      <a className="btn btn--transparent" href="#">Подробнее
                      </a>
                    </div>
                  </div>
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