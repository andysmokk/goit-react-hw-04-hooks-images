import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import s from './ButtonLoadMore.module.css';
import imagesAPI from '../../services/imagesApi';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';

export default function ButtonLoadMore({ imageName, loadMore }) {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const btnLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      imagesAPI
        .fetchImages(imageName, page + 1)
        .then(images => {
          images.hits.length === 0
            ? toast.info(
                `Картинки с названием ${`"${imageName}"`} закончились. Введите новое название.`,
              )
            : loadMore(images.hits);
        })
        .then(setPage(page + 1))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    }, 1000);
  };

  return (
    <button type="button" className={s.Button} onClick={btnLoadMore}>
      {loading ? <LoaderSpinner /> : <p>Load more</p>}
    </button>
  );
}

ButtonLoadMore.propTypes = {
  imageName: PropTypes.string.isRequired,
  loadMore: PropTypes.func.isRequired,
};
