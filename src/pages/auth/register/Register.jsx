import MyBtn from 'components/_ui/btn/MyBtn';
import MyForm from 'components/_ui/form/MyForm';
import MyInput from 'components/_ui/input/MyInput';
import MySection from 'components/_ui/section/MySection';
import { useDispatch, useSelector } from 'react-redux';
import {
  authSel,
  register,
  setCompany,
  setConfirmPass,
  setEmail,
  setFirst,
  setInvitationCode,
  setLast,
  setPass,
} from 'store/slices/auth/authSlice';
import outerCl from '../AuthPage.module.scss';
import { Link } from 'react-router-dom';

const Register = () => {
  const dispatch = useDispatch();
  const { first, last, company, email, pass, confirmPass, invitationCode } =
    useSelector(authSel);

  const onRegister = () => {
    if (pass === confirmPass) {
      dispatch(
        register({
          bodyParams: {
            firstName: first,
            lastName: last,
            organization: company,
            email,
            password: pass,
            invitation_code: invitationCode,
          },
        }),
      );
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <MySection classNames={outerCl.section}>
      <div className={outerCl.container + ' container'}>
        <div className={outerCl.inner + ' section-inner'}>
          <MyForm classnames={outerCl.form} onSubmit={onRegister}>
            <div className={outerCl.form__flex + ' form__flex'}>
              <MyInput
                value={first}
                setValue={setFirst}
                type="text"
                required
                placeholder={'First name'}
              />
              <MyInput
                value={last}
                setValue={setLast}
                type="text"
                required
                placeholder={'Last name'}
              />
            </div>
            <MyInput
              value={company}
              setValue={setCompany}
              type="text"
              required
              placeholder={'Company (Optional)'}
            />
            <MyInput
              value={email}
              setValue={setEmail}
              type="email"
              required
              placeholder={'Your E-mail'}
            />
            <div className={outerCl.form__flex + ' form__flex'}>
              <MyInput
                value={pass}
                setValue={setPass}
                type="password"
                required
                placeholder={'Password'}
              />
              <MyInput
                value={confirmPass}
                setValue={setConfirmPass}
                type="password"
                required
                placeholder={'Confirm password'}
              />
            </div>
            <MyInput
              value={invitationCode}
              setValue={setInvitationCode}
              type="text"
              required
              placeholder={'Invation code'}
            />
            <MyBtn
              classNames={
                outerCl.submit + ' btn-accent w-full btn-circle text-14'
              }
            >
              Sign up
            </MyBtn>
          </MyForm>
          <p className={outerCl.toTerms}>
            By joining, you agree to our{' '}
            <Link
              className={`${outerCl.toTerms__link} link link-accent-a`}
              target="_blank"
            >
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              className={`${outerCl.toTerms__link} link link-accent-a`}
              target="_blank"
            >
              Privacy Policy
            </Link>
          </p>
          <br></br>
          <p className={outerCl.have}>
            Already have account?{' '}
            <Link className={'link link-accent-a'} to={'/login'}>
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </MySection>
  );
};

export default Register;
