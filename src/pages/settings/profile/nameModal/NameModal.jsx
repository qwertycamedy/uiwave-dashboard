import MyModal from 'components/_ui/modals/modal/MyModal';
import cl from './NameModal.module.scss';
import MyBtn from 'components/_ui/btn/MyBtn';
import { useDispatch, useSelector } from 'react-redux';
import { setNameModal, settingsSel } from 'store/slices/settings/settingsSlice';
import { enableScroll } from 'hooks/enableScroll';
import MyInput from 'components/_ui/input/MyInput';

const NameModal = () => {
  const dispatch = useDispatch();
  const { nameModal } = useSelector(settingsSel);

  const onClose = () => {
    dispatch(setNameModal(false));
    enableScroll();
  };

  return (
    <MyModal modalIsOpen={nameModal} onClose={onClose} closeModal={true}>
      <h3 className={cl.title + ' title title-modal text-center'}>
        Change name
      </h3>
      <div className="flex flex-col w-full gap-16">
        <div className="flex justify-between w-full gap-8">
          <MyInput placeholderTop={true} placeholder="First name" />
          <MyInput placeholderTop={true} placeholder="Last name" />
        </div>
        <MyBtn classNames={`w-full btn-accent`} onClick={onClose}>
          Save Changes
        </MyBtn>
      </div>
    </MyModal>
  );
};

export default NameModal;
