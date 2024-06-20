import { useDispatch } from 'react-redux';
import cl from './Item.module.scss';
import { setIterationItem } from 'store/slices/exp/expSlice';

const Item = ({ item }) => {

  return (
    <tr className="table__body-stroke">
      <td className={`${cl.name} table__body-item`}>{item?.name}</td>
      <td className={`${cl.name} table__body-item text-center`}>{item?.trafficAllocation}%</td>
      <td className={`${cl.name} table__body-item text-center`}>{item?.trafficAllocation}%</td>
      <td className={`${cl.name} table__body-item text-center`}>{item?.trafficAllocation}%</td>
      <td className={`${cl.name} table__body-item text-center`}>{item?.trafficAllocation}%</td>
    </tr>
  );
};

export default Item;
