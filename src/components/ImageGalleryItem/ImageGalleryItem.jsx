import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
  };

  render() {
    const { images } = this.props;
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
}

export default ImageGalleryItem;
