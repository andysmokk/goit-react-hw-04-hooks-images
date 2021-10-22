import { useState } from 'react';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Modal from './components/Modal/Modal';

export default function App() {
  const [imageName, setImageName] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onOpenModal = ({ target }) => {
    if (target.nodeName === 'IMG') {
      setCurrentImage(target.dataset.image);
      setShowModal(!showModal);
    }
  };

  const onSubmitForm = imageName => {
    setImageName(imageName);
  };

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
