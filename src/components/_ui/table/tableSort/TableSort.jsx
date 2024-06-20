import { clsx } from 'clsx';
import React from 'react';
import { useDispatch } from 'react-redux';

const TableSort = ({ btn, setToggleSort, xCenter }) => {
  const dispatch = useDispatch();

  const onToggle = () => {
    dispatch(setToggleSort(btn));
  };

  return (
    <button
      className={clsx('table__head-sort', {
        'table__head-sort-active': btn?.isAsc,
        'margin-x-auto': xCenter
      })}
      onClick={onToggle}
    >
      <span>{btn?.label}</span>{' '}
      <svg
        className={'ico-12 stroke table__head-sort-ico'}
        xmlns="http://www.w3.org/2000/svg"
        width="11"
        height="7"
        viewBox="0 0 11 7"
        fill="none"
      >
        <path
          d="M10 1.25L5.5 5.75L1 1.25"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default TableSort;
