import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ children, onCloseModal }) {
  // useEffect(() => {
  //   document.addEventListener('keydown', onKeyDown);
  // }, [onKeyDown]);

  useEffect(() => {
    // console.log('useEffect', Date.now());
    // console.log('children', children);

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  });

  const onKeyDown = e => {
    if (e.code === 'Escape') {
      onCloseModal();
    }
  };

  const onOverlayModalClick = e => {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  };

  return createPortal(
    <div className={s.Overlay} onClick={onOverlayModalClick}>
      <div className={s.Modal}>{children}</div>
    </div>,
    modalRoot,
  );
}

Modal.propTypes = {
  children: PropTypes.object.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

// class Modal extends Component {
//   static propTypes = {
//     children: PropTypes.object.isRequired,
//   };

//   componentDidMount() {
//     document.addEventListener('keydown', this.onKeyDown);
//   }

//   componentWillUnmount() {
//     document.removeEventListener('keydown', this.onKeyDown);
//   }

//   onKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onCloseModal();
//     }
//   };

//   onOverlayModalClick = e => {
//     if (e.target === e.currentTarget) {
//       this.props.onCloseModal();
//     }
//   };

//   render() {
//     const { children } = this.props;
//     const { onOverlayModalClick } = this;

//     return createPortal(
//       <div className={s.Overlay} onClick={onOverlayModalClick}>
//         <div className={s.Modal}>{children}</div>
//       </div>,
//       modalRoot,
//     );
//   }
// }

// export default Modal;
