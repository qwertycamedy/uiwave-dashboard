
import cl from './Api.module.scss';
import MySection from 'components/_ui/section/MySection';
import MyBtn from 'components/_ui/btn/MyBtn';
import { useDispatch, useSelector } from 'react-redux';
import { authSel } from 'store/slices/auth/authSlice';
import {
  setApiKeyCopied,
  setResetApiKeyModal,
  settingsSel,
} from 'store/slices/settings/settingsSlice';
import Modal from './modal/Modal';
import { disableScroll } from 'hooks/disableScroll';

const Api = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector(authSel);
  const { apiKeyCopied, resetApiKeyModal } = useSelector(settingsSel);

  const onCopy = () => {
    navigator.clipboard.writeText(userData?.apiKey);

    dispatch(setApiKeyCopied(true));

    setTimeout(() => {
      dispatch(setApiKeyCopied(false));
    }, 2000);
  };

  const onModal = () => {
    dispatch(setResetApiKeyModal(true));
    disableScroll();
  }

  return (
    <MySection>
      <h3 className={`${cl.title} title title-section`}>API settings</h3>
      <div className={cl.block + ' block'}>
        <p className="suptitle suptitle-block">API Key</p>
        <div className={cl.field}>
          <input
            type="text"
            value={userData ? userData.apiKey : ''}
            disabled
            className={cl.field__text + ' w-full'}
          />
          <button
            className={cl.field__btn}
            disabled={apiKeyCopied}
            onClick={onCopy}
          >
            {apiKeyCopied ? (
              <svg
                className={`${cl.field__ico} ico-20 stroke`}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M6.86001 13.8446L1.64501 8.63464C1.5631 8.53899 1.52029 8.41595 1.52515 8.29012C1.53001 8.16428 1.58218 8.04491 1.67123 7.95586C1.76027 7.86681 1.87964 7.81465 2.00548 7.80979C2.13132 7.80493 2.25436 7.84773 2.35001 7.92964L6.85001 12.4296L15.645 3.64464C15.7407 3.56273 15.8637 3.51993 15.9895 3.52479C16.1154 3.52965 16.2347 3.58181 16.3238 3.67086C16.4128 3.75991 16.465 3.87928 16.4699 4.00512C16.4747 4.13095 16.4319 4.25399 16.35 4.34964L6.86001 13.8446Z"
                  fill="currentColor"
                />
              </svg>
            ) : (
              <svg
                className={`${cl.field__ico} ico-20 stroke`}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M17.2 7.2998H9.10005C8.10594 7.2998 7.30005 8.10569 7.30005 9.0998V17.1998C7.30005 18.1939 8.10594 18.9998 9.10005 18.9998H17.2C18.1942 18.9998 19 18.1939 19 17.1998V9.0998C19 8.10569 18.1942 7.2998 17.2 7.2998Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.7 12.7H2.8C2.32261 12.7 1.86477 12.5104 1.52721 12.1728C1.18964 11.8352 1 11.3774 1 10.9V2.8C1 2.32261 1.18964 1.86477 1.52721 1.52721C1.86477 1.18964 2.32261 1 2.8 1H10.9C11.3774 1 11.8352 1.18964 12.1728 1.52721C12.5104 1.86477 12.7 2.32261 12.7 2.8V3.7"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
        <MyBtn classNames={`${cl.btn} btn-accent`} onClick={onModal}>Reset API key</MyBtn>
      </div>
      <Modal />
    </MySection>
  );
};

export default Api;
