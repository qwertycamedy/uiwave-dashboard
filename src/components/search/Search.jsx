import { useDispatch } from 'react-redux';
import cl from './Search.module.scss';

const Search = ({ outerCl, icoCl, inputCl, value, setValue }) => {
  const dispatch = useDispatch();

  return (
    <label className={cl.search__outer + ` ${outerCl}`}>
      <input
        className={cl.search + ` ${inputCl}`}
        placeholder="Search for experiment"
        value={value}
        onChange={(e) => dispatch(setValue(e.target.value))}
      />
      <svg
        className={`${cl.search__ico} ico-18 stroke ${icoCl}`}
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <path
          d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.7508 15.7498L12.4883 12.4873"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </label>
  );
};

export default Search;
