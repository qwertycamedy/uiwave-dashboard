import MySection from 'components/_ui/section/MySection';
import cl from './Metrics.module.scss';
import MyBtn from 'components/_ui/btn/MyBtn';
import Make from './make/Make';
import Selected from './selected/Selected';
import Ready from './ready/Ready';

const Metrics = ({
  customMetrics,
  uiwaveMetrics,
  selectedMetrics,
  delCustomMetric,
  addSelectedMetric,
  delSelectedMetric,
  newCustomValue,
  setNewCustomValue,
  addCustomMetric,
  isEdit,
  toReady,
  openEdit,
}) => {
  return (
    <MySection>
      <h3 className={`${cl.title} title title-section`}>Metrics</h3>
      {isEdit ? (
        <div className={cl.editor + ' flex flex-col gap-24'}>
          <p className={cl.subtitle}>
            Select what you want to optimize for. You can use the examples
            provided or add your own metrics.
          </p>
          <div className="flex gap-32 w-full">
            <Make
              customMetrics={customMetrics}
              uiwaveMetrics={uiwaveMetrics}
              addSelectedMetric={addSelectedMetric}
              delCustomMetric={delCustomMetric}
              newCustomValue={newCustomValue}
              setNewCustomValue={setNewCustomValue}
              addCustomMetric={addCustomMetric}
            />
            <Selected
              selectedMetrics={selectedMetrics}
              delSelectedMetric={delSelectedMetric}
            />
            <MyBtn classNames={`${cl.create} btn btn-accent`} onClick={toReady}>
              Create
            </MyBtn>
          </div>
        </div>
      ) : (
        <Ready selectedMetrics={selectedMetrics} openEdit={openEdit} />
      )}
    </MySection>
  );
};

export default Metrics;
