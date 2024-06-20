import { useDispatch } from 'react-redux';
import cl from './Item.module.scss';
import { delIterationItem, setIterationItem } from 'store/slices/exp/expSlice';

const Item = ({ item, total }) => {
  const dispatch = useDispatch();

  const onPercent = (e) => {
    const newPercent = Number(e.target.value);
    const remainingPercent = 100 - total + item?.trafficAllocation;

    if (newPercent <= remainingPercent) {
      dispatch(setIterationItem({ name: item?.name, percent: newPercent }));
    }
  };

  const onDel = () => {
    dispatch(delIterationItem(item));
  }

  return (
    <tr className="table__body-stroke">
      <td className={`${cl.name} table__body-item`}>{item?.name}</td>
      <td className={`${cl.percent} table__body-item`}>
        <div className="margin-x-auto flex items-center justify-center gap-12">
          <input
            className={cl.range}
            type="range"
            min={0}
            max={100}
            step={1}
            value={item ? item?.trafficAllocation : 0}
            onChange={onPercent}
          />
          <input
            className={cl.field + ' input'}
            type="text"
            value={item ? item?.trafficAllocation : 0}
            onChange={onPercent}
          />
        </div>
      </td>
      <td className={` table__body-item`}>
        <div className={`flex justify-end`}>
          <button className={`${cl.del} btn`} onClick={onDel}>
            <svg
              className="ico-20 stroke"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M2.5 5H4.16667H17.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.8346 5.00033V16.667C15.8346 17.109 15.659 17.5329 15.3465 17.8455C15.0339 18.1581 14.61 18.3337 14.168 18.3337H5.83464C5.39261 18.3337 4.96868 18.1581 4.65612 17.8455C4.34356 17.5329 4.16797 17.109 4.16797 16.667V5.00033M6.66797 5.00033V3.33366C6.66797 2.89163 6.84356 2.46771 7.15612 2.15515C7.46869 1.84259 7.89261 1.66699 8.33464 1.66699H11.668C12.11 1.66699 12.5339 1.84259 12.8465 2.15515C13.159 2.46771 13.3346 2.89163 13.3346 3.33366V5.00033"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.33203 9.16699V14.167"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.668 9.16699V14.167"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Item;
