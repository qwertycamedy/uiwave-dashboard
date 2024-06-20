import MyModal from 'components/_ui/modals/modal/MyModal';
import cl from './PassModal.module.scss';
import MyBtn from 'components/_ui/btn/MyBtn';
import { useDispatch, useSelector } from 'react-redux';
import { setPassModal, settingsSel } from 'store/slices/settings/settingsSlice';
import { enableScroll } from 'hooks/enableScroll';
import MyInput from 'components/_ui/input/MyInput';

const PassModal = () => {
  const dispatch = useDispatch();
  const { passModal } = useSelector(settingsSel);

  const onClose = () => {
    dispatch(setPassModal(false));
    enableScroll();
  };

  return (
    <MyModal modalIsOpen={passModal} onClose={onClose} closeModal={true}>
      <h3 className={cl.title + ' title title-modal text-center'}>
        Change password
      </h3>
      <div className="flex flex-col w-full gap-16">
        <div className="flex flex-col w-full gap-8">
          <MyInput placeholderTop={true} placeholder="Current password" />
          <MyInput placeholderTop={true} placeholder="New password" />
          <MyInput placeholderTop={true} placeholder="Confirm password" />
        </div>
        <MyBtn classNames={`w-full btn-accent`} onClick={onClose}>
          Save Changes
        </MyBtn>
      </div>
    </MyModal>
  );
};

export default PassModal;
