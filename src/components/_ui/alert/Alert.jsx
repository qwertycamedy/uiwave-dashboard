import { clsx } from 'clsx';
import cl from './Alert.module.scss';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Alert = ({ classNames, isVisible, setIsVisible, styles,  children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        dispatch(setIsVisible(false));
      }, 3000);
    }
  }, [isVisible]);

  return (
    <div
      className={clsx(classNames + ` ${cl.alert}`, {
        [cl.alert__visible]: isVisible,
      })}

      style={styles}
    >
      {children}
    </div>
  );
};

export default Alert;
