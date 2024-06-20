import MySection from 'components/_ui/section/MySection';
import outerCl from '../AuthPage.module.scss';
import cl from './Login.module.scss';
import MyForm from 'components/_ui/form/MyForm';
import MyInput from 'components/_ui/input/MyInput';
import { useDispatch, useSelector } from 'react-redux';
import {
  authSel,
  login,
  setEmail,
  setPass,
  setRememberMe,
} from 'store/slices/auth/authSlice';
import MyBtn from 'components/_ui/btn/MyBtn';
import MyCheckbox from 'components/_ui/checkbox/MyCheckbox';
import { Link } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const { email, pass, rememberMe } = useSelector(authSel);

  const onLogin = () => {
    dispatch(
      login({
        bodyParams: { email, password: pass, 'remember-me': rememberMe },
      }),
    );
  };

  return (
    <MySection classNames={outerCl.section}>
      <div className={outerCl.container + ' container'}>
        <div className={outerCl.inner + ' section-inner'}>
          <MyForm classnames={outerCl.form + ' w-full'} onSubmit={onLogin}>
            <MyInput
              value={email}
              setValue={setEmail}
              type="email"
              required
              placeholder={'Your email'}
              placeholderTop={true}
            />
            <MyInput
              value={pass}
              setValue={setPass}
              type="password"
              required
              placeholder={'Password'}
              placeholderTop={true}
            />
            <MyBtn
              classNames={
                outerCl.submit + ' btn-accent w-full btn-circle text-14'
              }
            >
              Sign in
            </MyBtn>
          </MyForm>
          <div className={cl.flex + ' w-full'}>
            <MyCheckbox
              label={'Remember me'}
              isChecked={rememberMe}
              setIsChecked={setRememberMe}
            />
            <Link
              className={cl.forgot + ' link link-accent-a'}
              to={'/auth/resetPassword'}
            >
              I forgot my password
            </Link>
          </div>
          <p className={outerCl.have}>
            Don’t have account?{' '}
            <Link className={'link link-accent-a'} to={'/register'}>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </MySection>
  );
};

export default Login;
