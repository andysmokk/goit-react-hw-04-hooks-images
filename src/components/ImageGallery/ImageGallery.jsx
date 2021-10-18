import { Component } from 'react';
import { toast } from 'react-toastify';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import imagesAPI from '../../services/imagesApi';
import ButtonLoadMore from '../ButtonLoadMore/ButtonLoadMore';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';

class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const { imageName } = this.props;
    const { page, images } = this.state;

    if (prevProps.imageName !== imageName) {
      this.setState({ status: 'pending' });

      setTimeout(() => {
        imagesAPI
          .fetchImages(imageName, page)
          .then(images => {
            images.hits.length === 0
              ? toast.info(
                  `Картинок с названием ${`"${imageName}"`} нет. Введите новое название.`,
                )
              : this.setState({ images: images.hits, status: 'resolved' });
          })
          .catch(error => console.log(error));
      }, 1000);
    }

    if (prevState.images !== images) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  loadMore = moreImages => {
    const { images } = this.state;

    this.setState({ images: [...images, ...moreImages] });
  };

  render() {
    const { state, loadMore } = this;
    const { images, status } = state;
    const { imageName, onOpenModal } = this.props;

    if (status === 'idle') {
      return <h2 className={s.title}>Введите название картинки</h2>;
    }

    if (status === 'pending') {
      return <LoaderSpinner />;
    }

    if (status === 'resolved') {
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
}

export default ImageGallery;

// return (
//   <>
//     {!imageName && <h2 className={s.title}>Введите название картинки</h2>}
//     <ul className={s.ImageGallery} onClick={onOpenModal}>
//       <ImageGalleryItem images={images} />
//     </ul>
//     {images.length > 0 && (
//       <ButtonLoadMore
//         images={images}
//         imageName={imageName}
//         loadMore={loadMore}
//       />
//     )}
//     {loading && <LoaderSpinner />}
//   </>
// );
