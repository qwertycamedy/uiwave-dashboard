import MyPage from 'components/_ui/page/MyPage';
import { useDispatch, useSelector } from 'react-redux';
import {
  authSel,
  clearAll,
  setToEnterEmail,
  setToLogin,
  setToNewPass,
  setToRegister,
} from 'store/slices/auth/authSlice';
import Login from './login/Login';
import Register from './register/Register';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import cl from './AuthPage.module.scss';
import Logo from 'components/logo/Logo';
import EnterEmail from './resetPass/enterEmail/EnterEmail';
import NewPass from './resetPass/newPass/NewPass';

const AuthPage = () => {
  const dispatch = useDispatch();
  const { toLogin, toRegister, toEnterEmail, toNewPass } = useSelector(authSel);
  const { pathname } = useLocation();
  const { userEmail } = useParams();

  useEffect(() => {
    dispatch(clearAll());
    if (pathname === '/login') {
      dispatch(setToLogin());
    } else if (pathname === '/register') {
      dispatch(setToRegister());
    } else if (pathname === '/auth/resetPassword') {
      dispatch(setToEnterEmail());
    } else if (pathname === `/auth/resetPassword/${userEmail}`) {
      dispatch(setToNewPass());
    }
  }, [dispatch, pathname]);

  return (
    <MyPage
      classNames={cl.main}
      metaTitle={`UIWave | ${
        toLogin ? 'Login' : toRegister ? 'Sign Up' : 'Change Password'
      }`}
      metaDescr={`UIWave | ${
        toLogin ? 'Login' : toRegister ? 'Sign Up' : 'Change Password'
      }`}
      withHeader={false}
    >
      <Logo
        classNames={cl.logo}
        withText={true}
        fontSize={32}
        icoWidth={103}
        icoHeight={104}
      />
      {toLogin ? (
        <Login />
      ) : toRegister ? (
        <Register />
      ) : toEnterEmail ? (
        <EnterEmail />
      ) : (
        toNewPass && <NewPass userEmail={userEmail} />
      )}
    </MyPage>
  );
};

export default AuthPage;
