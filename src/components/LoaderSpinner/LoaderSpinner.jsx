import Loader from 'react-loader-spinner';
import s from './LoaderSpinner.module.css';

const LoaderSpinner = () => {
  return (
    <div className={s.loader}>
      <Loader
        type="Bars"
        color="#3f51b5"
        height={200}
        width={200}
        timeout={1500}
      />
    </div>
  );
};

export default LoaderSpinner;
