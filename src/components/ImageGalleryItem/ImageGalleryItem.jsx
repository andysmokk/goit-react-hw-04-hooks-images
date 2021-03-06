// import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ images }) {
  return (
    <>
      {images &&
        images.map(image => (
          <li className={s.ImageGalleryItem} key={image.id}>
            <img
              src={image.webformatURL}
              alt={image.tags}
              className={s.ImageGalleryItemImage}
              data-image={image.largeImageURL}
            />
          </li>
        ))}
    </>
  );
}

ImageGalleryItem.propTypes = {
  images: PropTypes.array.isRequired,
};
