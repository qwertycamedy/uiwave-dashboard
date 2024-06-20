import MyBtn from 'components/_ui/btn/MyBtn';
import cl from './Head.module.scss';
import Search from 'components/search/Search';
import { useDispatch, useSelector } from 'react-redux';
import {
  expListSel,
  setCurrentFilterBtn,
  setSearchValue,
} from 'store/slices/expList/expListSlice';
import { clsx } from 'clsx';
import { Link } from 'react-router-dom';

const Head = () => {
  const dispatch = useDispatch();
  const { filterBtns, currentFilterBtn, searchValue } = useSelector(expListSel);

  const onFilter = (cur) => {
    dispatch(setCurrentFilterBtn(cur));
  };

  return (
    <div className={`${cl.head} flex items-start justify-between`}>
      <div className={`${cl.btn__outer} flex gap-8`}>
        {filterBtns.map((filterBtn) => (
          <MyBtn
            classNames={clsx(`${cl.btn} btn-group`, {
              'btn-accent': currentFilterBtn.id === filterBtn.id,
            })}
            onClick={() => onFilter(filterBtn)}
            key={filterBtn.id}
          >
            {filterBtn.label}
          </MyBtn>
        ))}
      </div>
      <div className={`${cl.search_create} flex gap-8`}>
        <Search
          outerCl={cl.search}
          value={searchValue}
          setValue={setSearchValue}
        />
        <Link
          className={`${cl.create__btn} btn btn-accent`}
          to={'/experiments/create'}
        >
          Create experiment
        </Link>
      </div>
    </div>
  );
};

export default Head;
