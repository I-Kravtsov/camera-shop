import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setSortType, setSortOrder } from '../../store/action';
import { useEffect } from 'react';
import { fetchCamerasList } from '../../store/api-action';


function CatalogSort():JSX.Element {
  const queryArgument = useAppSelector((state) => state.queryArgument);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCamerasList(queryArgument));
  }, [dispatch, queryArgument]);

  const handleSortTypeChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const target = evt.target as HTMLElement;
    switch( target.id) {
      case 'sortPrice' :
        dispatch(setSortType('price'));
        break;
      case 'sortPopular' :
        dispatch(setSortType('rating'));
        break;
    }
  };

  const handleSortOrderChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const target = evt.target as HTMLElement;
    switch( target.id) {
      case 'up' :
        dispatch(setSortOrder('asc'));
        break;
      case 'down' :
        dispatch(setSortOrder('desc'));
        break;
    }
  };
  return (
    <div className="catalog-sort">
      <form action="#">
        <div className="catalog-sort__inner">
          <p className="title title--h5">Сортировать:</p>
          <div className="catalog-sort__type">
            <div className="catalog-sort__btn-text">
              <input type="radio" onChange={(evt) => {
                evt.preventDefault();
                handleSortTypeChange(evt);
              }}
              id="sortPrice" name="sort" checked={queryArgument.sortType === 'price'}
              />
              <label htmlFor="sortPrice" >
                по цене
              </label>
            </div>
            <div className="catalog-sort__btn-text">
              <input type="radio" onChange={(evt) => {
                evt.preventDefault();
                handleSortTypeChange(evt);
              }}
              id="sortPopular" name="sort" checked={queryArgument.sortOrder === 'rating'}
              />
              <label htmlFor="sortPopular">по популярности</label>
            </div>
          </div>
          <div className="catalog-sort__order">
            <div className="catalog-sort__btn catalog-sort__btn--up">
              <input type="radio" onChange={(evt) => {
                evt.preventDefault();
                handleSortOrderChange(evt);
              }}
              id="up" name="sort-icon" aria-label="По возрастанию"
              />
              <label htmlFor="up">
                <svg width="16" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-sort"></use>
                </svg>
              </label>
            </div>
            <div className="catalog-sort__btn catalog-sort__btn--down">
              <input type="radio" onChange={(evt) => {
                evt.preventDefault();
                handleSortOrderChange(evt);
              }}
              id="down" name="sort-icon" aria-label="По убыванию"
              />
              <label htmlFor="down">
                <svg width="16" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-sort"></use>
                </svg>
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CatalogSort;
