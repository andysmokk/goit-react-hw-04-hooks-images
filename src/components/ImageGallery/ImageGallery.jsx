import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import imagesAPI from '../../services/imagesApi';
import ButtonLoadMore from '../ButtonLoadMore/ButtonLoadMore';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';
import scrollLoadMore from '../../services/scrollLoadMore';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
};

export default function ImageGallery({ imageName, onOpenModal }) {
  const [images, setImages] = useState([]);
  const [page] = useState(1);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    if (!imageName) {
      return;
    }

    setStatus(Status.PENDING);

    setTimeout(() => {
      imagesAPI
        .fetchImages(imageName, page)
        .then(images => {
          if (images.hits.length > 0) {
            setImages(images.hits);
            setStatus(Status.RESOLVED);
            scrollLoadMore();
          } else
            toast.info(
              `Картинок с названием ${`"${imageName}"`} нет. Введите новое название.`,
            );
        })
        .catch(error => console.log(error));
    }, 1000);
  }, [imageName, page]);

  useEffect(() => {
    scrollLoadMore();
  }, [images]);

  const loadMore = moreImages => {
    setImages([...images, ...moreImages]);
  };

  if (status === Status.IDLE) {
    return <h2 className={s.title}>Введите название картинки</h2>;
  }

  if (status === Status.PENDING) {
    return <LoaderSpinner />;
  }

  if (status === Status.RESOLVED) {
    return (
      <>
        <ul className={s.ImageGallery} onClick={onOpenModal}>
          <ImageGalleryItem images={images} />
        </ul>
        {images.length > 0 && (
          <ButtonLoadMore
            images={images}
            imageName={imageName}
            loadMore={loadMore}
          />
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  imageName: PropTypes.string.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
