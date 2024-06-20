import { Link } from 'react-router-dom';
import cl from './Item.module.scss';
import { formatDate } from 'hooks/formatDate';

const Item = ({ item, expId }) => {
  const formattedStartDate = formatDate(
    item?.startDateTimestamp,
    true,
    true,
    true,
    false,
    false,
  );
  const formattedEndDate = formatDate(
    item?.reportCreationTimestamp,
    true,
    true,
    true,
    false,
    false,
  );

  return (
    <tr className="table__body-stroke">
      <td className={`${cl.report} table__body-item text-center`}>
        {item?.id}
      </td>
      <td className={`${cl.startDate} table__body-item text-center`}>
        <span>{item?.startDate}</span> <span>{formattedStartDate}</span>
      </td>
      <td className={`${cl.endDate} table__body-item text-center`}>
        <span>{item?.endDate}</span> <span>{formattedEndDate}</span>
      </td>
      <td className={`${cl.report} table__body-item text-center`}>
        {item?.totalVisitors}
      </td>
      <td className={`${cl.report} table__body-item text-center`}>
        <Link
          to={`/experiments/${expId}/${item?.id}`}
          className="link link-accent-a link-ul-a margin-x-auto"
        >
          Treatment results
        </Link>
      </td>
      <td className={`${cl.del__item} table__body-item`}>
        <div className="flex justify-end">
          <button className={`${cl.del} btn`}>
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
