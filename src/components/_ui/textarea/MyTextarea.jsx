import { useDispatch } from 'react-redux';

const MyTextarea = ({
  outerCl,
  labelCl,
  textareaCl,
  titleCl,
  title,
  required = true,
  disabled = false,
  placeholder,
  value,
  setValue,
}) => {
  const dispatch = useDispatch();
  return (
    <div className={`${outerCl} textarea-outer`}>
      {title && <span className={`${titleCl} textarea-title`}>{title}</span>}
      <label className={`${labelCl} textarea-label`}>
        <textarea
          className={`${textareaCl} textarea radius-mobile`}
          required={required}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          onChange={(e) => dispatch(setValue(e.target.value))}
        ></textarea>
        <span className={' textarea-placeholder'}>{placeholder}</span>
      </label>
    </div>
  );
};

export default MyTextarea;
