import { Outlet, Link } from 'react-router-dom';

function Layout():JSX.Element {
  return (
    <>
      <header className="header" id="header">
        <div className="container">
          <Link className="header__logo" to="index.html" aria-label="Переход на главную">
            <svg width="100" height="36" aria-hidden="true">
              <use xlinkHref="#icon-logo"></use>
            </svg>
          </Link>
          <nav className="main-nav header__main-nav">
            <ul className="main-nav__list">
              <li className="main-nav__item"><Link className="main-nav__link" to="catalog.html">Каталог</Link>
              </li>
              <li className="main-nav__item"><Link className="main-nav__link" to="">Гарантии</Link>
              </li>
              <li className="main-nav__item"><Link className="main-nav__link" to="#">Доставка</Link>
              </li>
              <li className="main-nav__item"><Link className="main-nav__link" to="#">О компании</Link>
              </li>
            </ul>
          </nav>
          <div className="form-search">
            <form>
              <label>
                <svg className="form-search__icon" width="16" height="16" aria-hidden="true">
                  <use xlinkHref="#icon-lens"></use>
                </svg>
                <input className="form-search__input" type="text" autoComplete="off" placeholder="Поиск по сайту" />
              </label>
              <ul className="form-search__select-list">
                <li className="form-search__select-item" tabIndex={0}>Cannonball Pro MX 8i</li>
                <li className="form-search__select-item" tabIndex={0}>Cannonball Pro MX 7i</li>
                <li className="form-search__select-item" tabIndex={0}>Cannonball Pro MX 6i</li>
                <li className="form-search__select-item" tabIndex={0}>Cannonball Pro MX 5i</li>
                <li className="form-search__select-item" tabIndex={0}>Cannonball Pro MX 4i</li>
              </ul>
            </form>
            <button className="form-search__reset" type="reset">
              <svg width="10" height="10" aria-hidden="true">
                <use xlinkHref="#icon-close"></use>
              </svg><span className="visually-hidden">Сбросить поиск</span>
            </button>
          </div>
          <Link className="header__basket-link" to="/cart">
            <svg width="16" height="16" aria-hidden="true">
              <use xlinkHref="#icon-basket"></use>
            </svg>
          </Link>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer__info">
            <Link className="footer__logo" to="index.html" aria-label="Переход на главную">
              <svg width="100" height="36" aria-hidden="true">
                <use xlinkHref="#icon-logo-mono"></use>
              </svg>
            </Link>
            <p className="footer__description">Интернет-магазин фото- и видеотехники</p>
            <ul className="social">
              <li className="social__item">
                <Link className="link" to="#" aria-label="Переход на страницу вконтатке">
                  <svg width="20" height="20" aria-hidden="true">
                    <use xlinkHref="#icon-vk"></use>
                  </svg>
                </Link>
              </li>
              <li className="social__item">
                <Link className="link" to="#" aria-label="Переход на страницу pinterest">
                  <svg width="20" height="20" aria-hidden="true">
                    <use xlinkHref="#icon-pinterest"></use>
                  </svg>
                </Link>
              </li>
              <li className="social__item">
                <Link className="link" to="#" aria-label="Переход на страницу reddit">
                  <svg width="20" height="20" aria-hidden="true">
                    <use xlinkHref="#icon-reddit"></use>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
          <ul className="footer__nav">
            <li className="footer__nav-item">
              <p className="footer__title">Навигация</p>
              <ul className="footer__list">
                <li className="footer__item">
                  <Link className="link" to="#">Каталог
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="link" to="#">Гарантии
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="link" to="#">Доставка
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="link" to="#">О компании
                  </Link>
                </li>
              </ul>
            </li>
            <li className="footer__nav-item">
              <p className="footer__title">Ресурсы</p>
              <ul className="footer__list">
                <li className="footer__item">
                  <Link className="link" to="#">Курсы операторов
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="link" to="#">Блог
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="link" to="#">Сообщество
                  </Link>
                </li>
              </ul>
            </li>
            <li className="footer__nav-item">
              <p className="footer__title">Поддержка</p>
              <ul className="footer__list">
                <li className="footer__item">
                  <Link className="link" to="#">FAQ
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="link" to="#">Задать вопрос
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Layout;
