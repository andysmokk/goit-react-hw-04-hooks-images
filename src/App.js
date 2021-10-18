import React, { Component } from 'react';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Modal from './components/Modal/Modal';

class App extends Component {
  state = {
    imageName: 0,
    showModal: false,
    currentImage: '',
    page: 1,
  };

  toggleModal = () => {
    this.setState(state => ({ showModal: !state.showModal }));
  };

  onOpenModal = ({ target }) => {
    if (target.nodeName === 'IMG') {
      this.setState(({ showModal }) => ({
        currentImage: target.dataset.image,
        showModal: !showModal,
      }));
    }
  };

  onSubmitForm = imageName => {
    this.setState({ imageName: imageName });
  };

  render() {
    const { state, toggleModal, onSubmitForm, onOpenModal } = this;
    const { showModal, currentImage, imageName } = state;

    return (
      <div className="App">
        {showModal && (
          <Modal onCloseModal={toggleModal}>
            <img src={currentImage} alt="" width="950" />
          </Modal>
        )}
        <Searchbar onSubmit={onSubmitForm} />
        <ImageGallery imageName={imageName} onOpenModal={onOpenModal} />
        <ToastContainer
          autoClose={3000}
          position="bottom-right"
          transition={Zoom}
        />
      </div>
    );
  }
}

export default App;
