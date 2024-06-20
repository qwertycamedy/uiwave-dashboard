import { clsx } from 'clsx';
import { useDispatch } from 'react-redux';

const MyInput = ({
  outerCl,
  labelCl,
  inputCl,
  titleCl,
  title,
  ico,
  icoCl,
  icoSize = 20,
  type = 'text',
  required = true,
  disabled = false,
  placeholder,
  placeholderTop = false,
  value,
  setValue,
  ...props
}) => {
  const dispatch = useDispatch();
  return (
    <div className={`${outerCl} input-outer`}>
      {title && <span className={`${titleCl} input-title`}>{title}</span>}
      <label className={`${labelCl} input-label`}>
        <input
          type={type}
          className={clsx(`${inputCl} input`, {'input-with-placeholder': placeholderTop})}
          required={required}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          onChange={(e) => dispatch(setValue(e.target.value))}
          {...props}
        />
        {placeholderTop && (
          <span className={' input-placeholder'}>{placeholder}</span>
        )}
        {ico && (
          <svg
            className={`input-ico ${icoCl}`}
            xmlns="http://www.w3.org/2000/svg"
            width={icoSize}
            height={icoSize}
            viewBox={`0 0 ${icoSize} ${icoSize}`}
            fill="none"
          >
            {ico}
          </svg>
        )}
      </label>
    </div>
  );
};

export default MyInput;
