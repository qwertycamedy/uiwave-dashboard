import MyModal from 'components/_ui/modals/modal/MyModal';
import cl from './Modal.module.scss';
import MyBtn from 'components/_ui/btn/MyBtn';
import { useDispatch } from 'react-redux';
import { enableScroll } from 'hooks/enableScroll';
import {
  getExp,
  setNewItModal,
  setToConfigureNew,
  startNewIteration,
  updExp,
} from 'store/slices/exp/expSlice';

const Modal = ({ treatments, uId, newItModal }) => {
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(setNewItModal(false));
    enableScroll();
  };

  const onConfirm = () => {
    dispatch(updExp({ uId, bodyParams: { treatments } })).then(() => {
      dispatch(startNewIteration({ uId, bodyParams: treatments }))
        .then(() => {
          onClose();
          dispatch(
            setToConfigureNew({ toConfigureNew: false, state: 'ACTIVE' }),
          );
          dispatch(getExp({ uId }));
        })
        .catch((err) => {
          alert(`exp not updated ${err}`);
        });
    });
  };

  return (
    <MyModal modalIsOpen={newItModal} onClose={onClose}>
      <h3 className={cl.title + ' title title-modal text-center'}>
        To start Iteration 2 previous iteration will be stopped. Continue?
      </h3>
      <div className="flex w-full gap-10">
        <MyBtn classNames={cl.cancel + ' btn-cancel w-full'} onClick={onClose}>
          Cancel
        </MyBtn>
        <MyBtn
          classNames={cl.submit + ' btn-accent w-full'}
          onClick={onConfirm}
        >
          Start Iteration
        </MyBtn>
      </div>
    </MyModal>
  );
};

export default Modal;
