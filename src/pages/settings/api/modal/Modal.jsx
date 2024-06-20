import MyModal from 'components/_ui/modals/modal/MyModal';
import cl from './Modal.module.scss';
import MyBtn from 'components/_ui/btn/MyBtn';
import { useDispatch, useSelector } from 'react-redux';
import {
  setResetApiKeyModal,
  settingsSel,
} from 'store/slices/settings/settingsSlice';
import { enableScroll } from 'hooks/enableScroll';

const Modal = () => {
  const dispatch = useDispatch();
  const { resetApiKeyModal } = useSelector(settingsSel);

  const onClose = () => {
    dispatch(setResetApiKeyModal(false));
    enableScroll();
  };
  
  return (
    <MyModal modalIsOpen={resetApiKeyModal} onClose={onClose}>
      <h3 className={cl.title + ' title title-modal text-center'}>
        Are you sure want to reset API Key?
      </h3>
      <div className="flex w-full gap-10">
        <MyBtn classNames={cl.cancel + ' btn-cancel w-full'} onClick={onClose}>
          Cancel
        </MyBtn>
        <MyBtn classNames={cl.submit + ' btn-accent w-full'} onClick={onClose}>
          Reset API key
        </MyBtn>
      </div>
    </MyModal>
  );
};

export default Modal;
