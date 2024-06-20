import TableSort from 'components/_ui/table/tableSort/TableSort';
import cl from './Head.module.scss';
import { useSelector } from 'react-redux';
import { expListSel, setToggleSort } from 'store/slices/expList/expListSlice';

const Head = () => {
  const {sortBtns} = useSelector(expListSel);
  
  return (
    <thead className="table__head">
      <tr className="table__head-stroke">
        <td className={`${cl.name} table__head-item`}>
          <TableSort btn={sortBtns[0]} setToggleSort={setToggleSort} />
        </td>
        <td className={`${cl.descr} table__head-item`}>
          <span>Description</span>
        </td>
        <td className={`${cl.modified} table__head-item`}>
          <TableSort btn={sortBtns[1]} setToggleSort={setToggleSort} />
        </td>
        <td className={`${cl.status} table__head-item`}>
          <span>Status</span>
        </td>
      </tr>
    </thead>
  );
};

export default Head;
