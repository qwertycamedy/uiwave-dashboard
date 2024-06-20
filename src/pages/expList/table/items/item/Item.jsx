import { useNavigate } from 'react-router-dom';
import cl from './Item.module.scss';
import { formatDate } from 'hooks/formatDate';
import { useDispatch } from 'react-redux';
import { delExp } from 'store/slices/exp/expSlice';
import { getExpList } from 'store/slices/expList/expListSlice';

const Item = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const modifiedDate = item
    ? formatDate(item?.modificationTimestamp, true, true, true, false, false)
    : '';

  console.log(item);

  const onDelExp = (e) => {
    e.stopPropagation();

    const delConfirm = confirm('do you really want to delete this experiment?');

    if (delConfirm) {
      dispatch(delExp({ uId: item.id }))
        .then(() => {
          dispatch(getExpList());
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <tr
      className={`${cl.stroke} table__body-stroke`}
      onClick={() => navigate(`/experiments/${item?.id}`)}
    >
      <td className={`${cl.name} table__body-item`}>{item?.name}</td>
      <td className={`${cl.descr} table__body-item`}>{item?.description}</td>
      <td className={`${cl.modified} table__body-item`}>{modifiedDate}</td>
      <td className={` table__body-item`}>
        <div className={`${cl.status_del}`}>
          <span className={cl.status}>{item?.state}</span>
          <button className={`${cl.del} btn`} onClick={onDelExp}>
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
