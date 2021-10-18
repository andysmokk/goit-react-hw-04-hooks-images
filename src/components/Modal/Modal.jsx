import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  onOverlayModalClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onCloseModal();
    }
  };

  render() {
    const { children } = this.props;
    const { onOverlayModalClick } = this;

    return createPortal(
      <div className={s.Overlay} onClick={onOverlayModalClick}>
        <div className={s.Modal}>{children}</div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;
