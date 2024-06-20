import { useDrag } from 'react-dnd';
import cl from './DragItem.module.scss';
import { useDispatch } from 'react-redux';

const DragItem = ({ metric, isDeletable, addSelectedMetric, delCustomMetric }) => {
  const dispatch = useDispatch();

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: 'metric',
      item: metric,
      end: (item, monitor) => {
        const dropResult = monitor.getDropResult();
        if (item && dropResult) {
          dispatch(addSelectedMetric(item));
        }
      },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [],
  );

  const onDel = (e) => {
    dispatch(delCustomMetric(metric));
  };

  return (
    <li className={cl.item} ref={drag}>
      <div className="flex gap-20">
        <button className={cl.drag + ' link link-accent'}>
          <svg
            className="ico-18 fill"
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="19"
            viewBox="0 0 10 19"
            fill="none"
          >
            <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
            <circle cx="8.5" cy="1.5" r="1.5" fill="currentColor" />
            <circle cx="8.5" cy="9.5" r="1.5" fill="currentColor" />
            <circle cx="1.5" cy="9.5" r="1.5" fill="currentColor" />
            <circle cx="1.5" cy="17.5" r="1.5" fill="currentColor" />
            <circle cx="8.5" cy="17.5" r="1.5" fill="currentColor" />
          </svg>
        </button>
        <span className={cl.label}>{metric?.name}</span>
      </div>
      {isDeletable && (
        <button className={cl.del} onClick={(e) => onDel(e)}>
          <svg
            className="ico-18 stroke"
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
          >
            <path
              d="M2.125 4.25H3.54167H14.875"
              stroke="currentColor"
              strokeWidth="1.02"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.4594 4.25033V14.167C13.4594 14.5427 13.3101 14.903 13.0445 15.1687C12.7788 15.4344 12.4184 15.5837 12.0427 15.5837H4.95939C4.58367 15.5837 4.22333 15.4344 3.95766 15.1687C3.69198 14.903 3.54272 14.5427 3.54272 14.167V4.25033M5.66772 4.25033V2.83366C5.66772 2.45794 5.81698 2.0976 6.08266 1.83192C6.34833 1.56625 6.70867 1.41699 7.08439 1.41699H9.91772C10.2934 1.41699 10.6538 1.56625 10.9195 1.83192C11.1851 2.0976 11.3344 2.45794 11.3344 2.83366V4.25033"
              stroke="currentColor"
              strokeWidth="1.02"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.08228 7.79199V12.042"
              stroke="currentColor"
              strokeWidth="1.02"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.91772 7.79199V12.042"
              stroke="currentColor"
              strokeWidth="1.02"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </li>
  );
};

export default DragItem;
