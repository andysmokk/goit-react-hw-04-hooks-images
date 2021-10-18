import React, { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import s from './ButtonLoadMore.module.css';
import imagesAPI from '../../services/imagesApi';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';

class ButtonLoadMore extends Component {
  static propTypes = {
    imageName: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    loadMore: PropTypes.func.isRequired,
  };

  state = {
    page: 1,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { imageName } = this.props;

    if (prevProps.imageName !== imageName) {
      this.setState({ page: 1, imageName: '' });
    }
  }

  buttonLoadMore = () => {
    const { imageName, loadMore } = this.props;
    const { page } = this.state;
    this.setState({ loading: true });
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
        .then(this.setState({ page: page + 1 }))
        .catch(error => console.log(error))
        .finally(() => this.setState({ loading: false }));
    }, 1000);
  };

  render() {
    const { state, buttonLoadMore } = this;
    const { loading } = state;
    return (
      <button type="button" className={s.Button} onClick={buttonLoadMore}>
        {loading ? <LoaderSpinner /> : <p>Load more</p>}
      </button>
    );
  }
}

export default ButtonLoadMore;
