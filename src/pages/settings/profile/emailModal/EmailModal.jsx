import MyModal from 'components/_ui/modals/modal/MyModal';
import cl from './EmailModal.module.scss';
import MyBtn from 'components/_ui/btn/MyBtn';
import { useDispatch, useSelector } from 'react-redux';
import {
  setEmailModal,
  settingsSel,
} from 'store/slices/settings/settingsSlice';
import { enableScroll } from 'hooks/enableScroll';
import MyInput from 'components/_ui/input/MyInput';

const EmailModal = () => {
  const dispatch = useDispatch();
  const { emailModal } = useSelector(settingsSel);

  const onClose = () => {
    dispatch(setEmailModal(false));
    enableScroll();
  };

  return (
    <MyModal modalIsOpen={emailModal} onClose={onClose} closeModal={true}>
      <h3 className={cl.title + ' title title-modal text-center'}>
        Change email
      </h3>
      <div className="flex flex-col w-full gap-12">
        <div className="flex flex-col w-full gap-8">
          <MyInput placeholderTop={true} placeholder="New email" />
        </div>
        <MyBtn classNames={`w-full btn-accent`} onClick={onClose}>
          Save Changes
        </MyBtn>
      </div>
    </MyModal>
  );
};

export default EmailModal;
