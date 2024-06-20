import MyInput from 'components/_ui/input/MyInput';
import outerCl from '../Metrics.module.scss';
import cl from './Make.module.scss';
import DragList from '../drag/DragList';
import { useDispatch } from 'react-redux';

const Make = ({
  customMetrics,
  uiwaveMetrics,
  addSelectedMetric,
  delCustomMetric,
  newCustomValue,
  setNewCustomValue,
  addCustomMetric,
}) => {
  const dispatch = useDispatch();

  const onAddNewCustom = (e) => {
    if (e.key === 'Enter') {
      dispatch(
        addCustomMetric({
          orderIndex: customMetrics.length + uiwaveMetrics.length + 1,
          name: newCustomValue,
        }),
      );
      dispatch(setNewCustomValue(''));
    }
  };

  return (
    <div className={outerCl.block__outer}>
      <h5 className="title title-block">Make a selection</h5>
      <MyInput
        outerCl={cl.input__outer}
        inputCl={cl.input}
        placeholder={'Add your own metric'}
        placeholderTop={true}
        value={newCustomValue}
        setValue={setNewCustomValue}
        onKeyPress={onAddNewCustom}
      />
      <div className={outerCl.block}>
        {customMetrics && customMetrics.length > 0 && (
          <div className={outerCl.block__inner}>
            <h6 className={outerCl.block__title}>Custom metrics</h6>
            <DragList
              metrics={customMetrics}
              isDeletable={true}
              addSelectedMetric={addSelectedMetric}
              delCustomMetric={delCustomMetric}
            />
          </div>
        )}
        <div className={outerCl.block__inner}>
          <h6 className={outerCl.block__title}>UIWave metrics</h6>
          <DragList
            metrics={uiwaveMetrics}
            addSelectedMetric={addSelectedMetric}
          />
        </div>
      </div>
    </div>
  );
};

export default Make;
