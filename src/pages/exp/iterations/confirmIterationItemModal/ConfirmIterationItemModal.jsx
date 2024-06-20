import MyModal from 'components/_ui/modals/modal/MyModal';
import cl from './ConfirmIterationItemModal.module.scss';
import MyBtn from 'components/_ui/btn/MyBtn';
import { useDispatch, useSelector } from 'react-redux';
import { enableScroll } from 'hooks/enableScroll';
import {
    addNewIteraionItem,
  confirmNewIterationItem,
  expSel,
  setNewIterationName,
} from 'store/slices/exp/expSlice';
import MyInput from 'components/_ui/input/MyInput';

const ConfirmIterationItemModal = ({ modalIsOpen }) => {
  const dispatch = useDispatch();
  const { newIterationName, exp } = useSelector(expSel);

  const onClose = () => {
    dispatch(addNewIteraionItem(false));
    enableScroll();
  };

  const onConfirm = () => {
    const isUnique = exp?.treatments.find(
      (item) => item.name === newIterationName,
    );
    const isNotEmpty = newIterationName.trim() !== '';

    if (!isUnique && isNotEmpty) {
      dispatch(confirmNewIterationItem(newIterationName));
      enableScroll();
    } else {
      alert(
        'the treatment names of your iteration must be unique and not empty',
      );
    }
  };

  return (
    <MyModal modalIsOpen={modalIsOpen} onClose={onClose}>
      <div className="flex flex-col w-full gap-10">
        <MyInput
          value={newIterationName}
          setValue={setNewIterationName}
          placeholder={'New iteration name'}
          placeholderTop={true}
        />
        <MyBtn classNames={cl.submit + ' btn-accent w-full'} onClick={onConfirm}>
          Add new
        </MyBtn>
      </div>
    </MyModal>
  );
};

export default ConfirmIterationItemModal;
