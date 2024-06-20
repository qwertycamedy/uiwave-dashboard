import { useDispatch, useSelector } from 'react-redux';
import Head from './head/Head';
import Items from './items/Items';
import { getExpList } from 'store/slices/expList/expListSlice';
import { clsx } from 'clsx';

const Table = ({ expList }) => {
  const ifelse = expList === null || expList.length < 1;

  return (
    <table className={clsx('table', { table__404: ifelse })}>
      <Head />
      <Items items={expList} ifelse={ifelse} />
    </table>
  );
};

export default Table;
