import { clsx } from 'clsx';
import { useDispatch } from 'react-redux';

const MyCheckbox = ({
  labelCl,
  checkCl,
  customCl,
  icoCl,
  textCl,
  linkCl,
  label,
  required,
  isChecked,
  setIsChecked,
}) => {
  const dispatch = useDispatch();
  const onChange = () => {
    dispatch(setIsChecked(!isChecked));
  };

  return (
    <label className={clsx("checkbox-label", {'checkbox-label__active': isChecked})}>
      <input
        className="checkbox"
        type="checkbox"
        required={required}
        checked={isChecked}
        onChange={onChange}
      />
      <span className="checkbox-custom">
        <svg
          className={'checkbox-custom-img ico-12 stroke'}
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="9"
          viewBox="0 0 12 9"
          fill="none"
        >
          <path
            d="M10.3333 1L3.91667 7.41667L1 4.5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="checkbox-text">{label}</span>
    </label>
  );
};

export default MyCheckbox;
