import cl from './DragList.module.scss';
import DragItem from './item/DragItem';

const DragList = ({
  metrics,
  isDeletable = false,
  addSelectedMetric,
  delCustomMetric,
}) => {
  return (
    <ul className={cl.list}>
      {metrics?.map((metric) => (
        <DragItem
          metric={metric}
          isDeletable={isDeletable}
          key={metric.orderIndex}
          addSelectedMetric={addSelectedMetric}
          delCustomMetric={delCustomMetric}
        />
      ))}
    </ul>
  );
};

export default DragList;
