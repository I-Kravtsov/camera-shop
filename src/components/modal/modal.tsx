import ProductBasketSuccess from './modal-content/product-basket-success';

function Modal():JSX.Element {
  return (
    <div className="modal is-active modal--narrow">
      <div className="modal__wrapper">
        <div className="modal__overlay"></div>
        <div className="modal__content">
          <ProductBasketSuccess />
        </div>
      </div>
    </div>
  );
}

export default Modal;
