import MySection from 'components/_ui/section/MySection';
import outerCl from '../../AuthPage.module.scss';
import cl from './EnterEmail.module.scss';
import MyForm from 'components/_ui/form/MyForm';
import MyInput from 'components/_ui/input/MyInput';
import { useDispatch, useSelector } from 'react-redux';
import { authSel, previewNewPass, setEmail } from 'store/slices/auth/authSlice';
import MyBtn from 'components/_ui/btn/MyBtn';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

const EnterEmail = () => {
  const dispatch = useDispatch();
  const { email, mailCheck } = useSelector(authSel);

  const onEnterEmail = () => {
    dispatch(previewNewPass({ bodyParams: { email } }));
  };

  return (
    <MySection classNames={outerCl.section}>
      <div className={outerCl.container + ' container'}>
        <div className={outerCl.inner + ' section-inner'}>
          <MyForm classnames={outerCl.form + ' w-full'} onSubmit={onEnterEmail}>
            <p className={cl.text}>
              Enter your email address and we will send you an email with a link
              to recover your account
            </p>
            <MyInput
              value={email}
              setValue={setEmail}
              type="email"
              required
              disabled={mailCheck}
              placeholder={'Your email'}
              placeholderTop={true}
            />
            <MyBtn
              classNames={clsx(
                outerCl.submit +
                  ` ${cl.submit} btn-accent w-full btn-circle text-14`,
                {
                  'btn-green': mailCheck,
                },
              )}
              disabled={mailCheck}
            >
              {mailCheck ? (
                <>
                  <svg
                    className="ico-12 stroke"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="9"
                    viewBox="0 0 12 9"
                    fill="none"
                  >
                    <path
                      d="M10.3333 1L3.91667 7.41667L1 4.5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Check your email</span>
                </>
              ) : (
                <span>Send email</span>
              )}
            </MyBtn>
          </MyForm>
          <Link className={'link link-accent-a items-center justify-center margin-x-auto'} to={'/login'}>
            Back to Login
          </Link>
        </div>
      </div>
    </MySection>
  );
};

export default EnterEmail;
