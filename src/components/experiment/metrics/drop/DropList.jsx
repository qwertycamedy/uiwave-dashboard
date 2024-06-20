import { useDispatch } from 'react-redux';
import cl from './DropList.module.scss';
import DropItem from './item/DropItem';
import { useDrop } from 'react-dnd';
import { clsx } from 'clsx';

const DropList = ({ metrics, isDeletable = false, ifelse, delSelectedMetric }) => {

  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: 'metric',
      drop: () => ({
        name: 'selected',
      }),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [],
  );

  return (
    <ul className={clsx(cl.list, { [cl.list__empty]: !ifelse })} ref={drop}>
      {metrics?.map((metric) => (
        <DropItem metric={metric} isDeletable={isDeletable} key={metric.orderIndex} delSelectedMetric={delSelectedMetric} />
      ))}
    </ul>
  );
};

export default DropList;
