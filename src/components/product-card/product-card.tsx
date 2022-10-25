import { Link } from 'react-router-dom';
import { CameraType } from '../../types/types';
import { AppRoute } from '../utils/const';

type ProductCardProps = {
  cameraCard: CameraType;
}
type StarsType = Array<boolean | void>;

function ProductCard({cameraCard}: ProductCardProps):JSX.Element {
  const stars: StarsType = Array.from({length: 5}).map((item, index) => {
    if(index < cameraCard.rating) {
      return true;
    }
    return false;
  });
  return (
    <div className="product-card">
      <div className="product-card__img">
        <picture>
          <source type="image/webp" srcSet={`${cameraCard.previewImgWebp}, ${cameraCard.previewImgWebp2x}`} />
          <img src={cameraCard.previewImg} srcSet={cameraCard.previewImg2x} width="280" height="240" alt={cameraCard.name} />
        </picture>
      </div>
      <div className="product-card__info" style={{flexDirection: 'column'}}>
        <div className="rate product-card__rate">
          {stars.map((star, index) => {
            const keyValue = index;
            return (
              <svg width="17" height="16" aria-hidden="true" key={keyValue}>
                <use xlinkHref={star ? '#icon-full-star' : '#icon-star'}></use>
              </svg>
            );
          })}
          <p className="visually-hidden">
            Рейтинг: {cameraCard.rating}
          </p>
          <p className="rate__count">
            <span className="visually-hidden">
              Всего оценок:
            </span>
            {cameraCard.reviewCount}
          </p>
        </div>
        <p className="product-card__title">
          {cameraCard.category} {cameraCard.name}
        </p>
        <p className="product-card__price">
          <span className="visually-hidden">
            Цена:
          </span>
          {cameraCard.price} ₽
        </p>
      </div>
      <div className="product-card__buttons">
        <button className="btn btn--purple product-card__btn" type="button">
          Купить
        </button>
        <Link className="btn btn--transparent" to={`${AppRoute.ProductCard}/${cameraCard.id}`}>
          Подробнее
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;


