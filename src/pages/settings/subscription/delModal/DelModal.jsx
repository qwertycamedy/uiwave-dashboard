import MyModal from 'components/_ui/modals/modal/MyModal';
import cl from './DelModal.module.scss';
import MyBtn from 'components/_ui/btn/MyBtn';
import { useDispatch, useSelector } from 'react-redux';
import {
  setDelAccModal,
  settingsSel,
} from 'store/slices/settings/settingsSlice';
import { enableScroll } from 'hooks/enableScroll';

const DelModal = () => {
  const dispatch = useDispatch();
  const { delAccModal } = useSelector(settingsSel);

  const onClose = () => {
    dispatch(setDelAccModal(false));
    enableScroll();
  };

  return (
    <MyModal modalIsOpen={delAccModal} onClose={onClose}>
      <h3 className={cl.title + ' title title-modal text-center'}>
        Are you sure want to delete your account on UIWave?
      </h3>
      <div className="flex w-full gap-10">
        <MyBtn classNames={cl.cancel + ' btn-cancel w-full'} onClick={onClose}>
          Cancel
        </MyBtn>
        <MyBtn classNames={cl.submit + ' btn-del w-full'} onClick={onClose}>
          Delete account
        </MyBtn>
      </div>
    </MyModal>
  );
};

export default DelModal;
