import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import s from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  const [imageName, setImageName] = useState('');

  const onSubmitForm = e => {
    e.preventDefault();

    if (imageName.trim() === '') {
      return toast.info('Введите название картинки!');
    }

    onSubmit(imageName);
    setImageName('');
  };

  const onChangeImageName = ({ target }) => {
    setImageName(target.value);
  };

  return (
    <>
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={onSubmitForm}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            name="imageName"
            value={imageName}
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={onChangeImageName}
          />
        </form>
      </header>
    </>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
