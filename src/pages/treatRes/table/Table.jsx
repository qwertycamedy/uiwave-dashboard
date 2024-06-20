
import Head from './head/Head';
import Items from './items/Items';
import { clsx } from 'clsx';

const Table = ({treatRes}) => {
  const ifelse = treatRes === null || treatRes.length < 1;

  return (
    <table className={clsx('table', { table__404: ifelse })}>
      <Head />
      <Items items={treatRes} ifelse={ifelse} />
    </table>
  );
};

export default Table;
