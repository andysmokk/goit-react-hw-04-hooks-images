import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import s from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  const [imageName, setImageName] = useState('');

  const onSubmitForm = e => {
    // const { imageName } = this.state;
    // const { onSubmit } = this.props;

    e.preventDefault();

    if (imageName.trim() === '') {
      return toast.info('Введите название картинки!');
    }

    onSubmit(imageName);
    // this.setState({ imageName: '' });
    setImageName('');
  };

  const onChangeImageName = ({ target }) => {
    // this.setState({ imageName: target.value });
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

// class oldSearchbar extends Component {
//   state = {
//     imageName: '',
//   };

//   onSubmitForm = e => {
//     const { imageName } = this.state;
//     const { onSubmit } = this.props;

//     e.preventDefault();

//     if (imageName.trim() === '') {
//       return toast.info('Введите название картинки!');
//     }

//     onSubmit(imageName);
//     this.setState({ imageName: '' });
//   };

//   onChangeImageName = ({ target }) => {
//     this.setState({ imageName: target.value });
//   };

//   render() {
//     const { state, onSubmitForm, onChangeImageName } = this;
//     const { imageName } = state;

//     return (
//       <>
//         <header className={s.Searchbar}>
//           <form className={s.SearchForm} onSubmit={onSubmitForm}>
//             <button type="submit" className={s.SearchFormButton}>
//               <span className={s.SearchFormButtonLabel}>Search</span>
//             </button>

//             <input
//               name="imageName"
//               value={imageName}
//               className={s.SearchFormInput}
//               type="text"
//               autoComplete="off"
//               autoFocus
//               placeholder="Search images and photos"
//               onChange={onChangeImageName}
//             />
//           </form>
//         </header>
//       </>
//     );
//   }
// }

// export default Searchbar;
