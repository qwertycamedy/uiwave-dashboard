import Status from 'components/experiment/iterations/status/Status';
import cl from './Iterations.module.scss';
import MySection from 'components/_ui/section/MySection';
import { useDispatch, useSelector } from 'react-redux';
import {
  addNewIteraionItem,
  confirmNewIterationItem,
  expSel,
  setIterationTotal,
  setNewItModal,
  setToConfigureNew,
} from 'store/slices/exp/expSlice';
import MyBtn from 'components/_ui/btn/MyBtn';
import { clsx } from 'clsx';
import { useEffect } from 'react';
import EditTable from './editTable/EditTable';
import ResultTable from './resultTable/ResultTable';
import Modal from './modal/Modal';
import { disableScroll } from 'hooks/disableScroll';
import ConfirmIterationItemModal from './confirmIterationItemModal/ConfirmIterationItemModal';

const Iterations = () => {
  const dispatch = useDispatch();
  const {
    exp,
    total,
    toConfigureNew,
    newItModal,
    iterationSortBtn,
    addNewIterationItem,
  } = useSelector(expSel);
  const treatments = exp?.treatments;

  const onConfigureNew = () => {
    dispatch(setToConfigureNew({toConfigureNew: true, state: 'DRAFT'}));
  };

  useEffect(() => {
    if (exp) {
      dispatch(setIterationTotal());
    }
  }, [exp]);

  const openNewItModal = () => {
    dispatch(setNewItModal(true));
    disableScroll();
  };

  const onAddIterationItem = () => {
    dispatch(addNewIteraionItem(true));
    disableScroll();
  };


  return (
    <MySection>
      <h3 className={`title title-section`}>Iterations</h3>
      <div className={`${cl.info} flex gap-12 items-center`}>
        <p className="text-14">Iteration {exp?.iterationReports?.length + 1}</p>
        <Status status={exp?.state} />
      </div>
      <div className="flex flex-col gap-16">
        {toConfigureNew && exp?.state === 'DRAFT' ? (
          <EditTable items={treatments} total={total} />
        ) : (
          <ResultTable items={treatments} total={total} />
        )}
        {toConfigureNew && exp?.state === 'DRAFT' ? (
          <>
            <div className="flex justify-between">
              <MyBtn classNames={'btn-accent'} onClick={onAddIterationItem}>
                <svg
                  className="ico-16 stroke"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <path
                    d="M7.5 3.125V11.875"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.125 7.5H11.875"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Add new</span>
              </MyBtn>

              <MyBtn
                classNames={clsx(`${cl.start} btn-accent`, {
                  'btn-disabled': total !== 100 || treatments.length < 2,
                })}
                disabled={total !== 100 || treatments.length < 2}
                onClick={openNewItModal}
              >
                Start iteration
              </MyBtn>
            </div>

            <ConfirmIterationItemModal modalIsOpen={addNewIterationItem} />
            <Modal treatments={treatments} uId={exp?.id} newItModal={newItModal} />
          </>
        ) : (
          <MyBtn
            classNames={`${cl.configure} btn-accent`}
            onClick={onConfigureNew}
          >
            Configure new iteration
          </MyBtn>
        )}
      </div>
    </MySection>
  );
};

export default Iterations;
