import MySection from 'components/_ui/section/MySection';
import cl from './Profile.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { authSel } from 'store/slices/auth/authSlice';
import EmailModal from './emailModal/EmailModal';
import NameModal from './nameModal/NameModal';
import PassModal from './passModal/PassModal';
import {
  setEmailModal,
  setNameModal,
  setPassModal,
} from 'store/slices/settings/settingsSlice';
import { disableScroll } from 'hooks/disableScroll';
import { formatDate } from 'hooks/formatDate';

const Profile = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector(authSel);

  const formattedPassChangeDate = userData
    ? formatDate(userData?.creationTimestamp, true, true, true, false, false)
    : '';

  const onEmailModal = () => {
    dispatch(setEmailModal(true));
    disableScroll();
  };
  const onNameModal = () => {
    dispatch(setNameModal(true));
    disableScroll();
  };
  const onPassModal = () => {
    dispatch(setPassModal(true));
    disableScroll();
  };

  return (
    <MySection>
      <h3 className={`${cl.title} title title-section`}>Profile settings</h3>
      <div className={cl.block__outer + ' block__outer'}>
        <div className={cl.block + ' block'}>
          <p className={cl.block__label + ' suptitle suptitle-block'}>Email</p>
          <p className={cl.block__value}>{userData?.email}</p>
          <button className={`${cl.block__edit} link link-accent-a`} onClick={onEmailModal}>
            Edit email
          </button>
          <EmailModal />
        </div>

        <div className={cl.block + ' block'}>
          <p className={cl.block__label + ' suptitle suptitle-block'}>
            Account name
          </p>
          <p className={cl.block__value}>
            {userData?.name}
          </p>
          <button className={`${cl.block__edit} link link-accent-a`} onClick={onNameModal}>
            Edit name
          </button>
          <NameModal />
        </div>

        <div className={cl.block + ' block'}>
          <p className={cl.block__label + ' suptitle suptitle-block'}>
            Password
          </p>
          <p className={cl.block__value}>
            Last change {formattedPassChangeDate}
          </p>
          <button className={`${cl.block__edit} link link-accent-a`} onClick={onPassModal}>
            Change password
          </button>
          <PassModal />
        </div>
      </div>
    </MySection>
  );
};

export default Profile;
