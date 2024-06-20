import { clsx } from 'clsx';
import outerCl from '../Metrics.module.scss';
import cl from './Selected.module.scss'
import DropList from '../drop/DropList';

const Selected = ({ selectedMetrics, delSelectedMetric }) => {

  const ifelse = selectedMetrics !== null && selectedMetrics.length > 0;

  return (
    <div className={outerCl.block__outer}>
      <h5 className="title title-block">Selected a selection</h5>
      <div className={clsx(outerCl.block + ` ${cl.block}`, {[cl.block__empty]: !ifelse})}>
        <div className={outerCl.block__inner}>
          <DropList metrics={selectedMetrics} isDeletable={true} ifelse={ifelse} delSelectedMetric={delSelectedMetric} />
        </div>
      </div>
    </div>
  );
};

export default Selected;
