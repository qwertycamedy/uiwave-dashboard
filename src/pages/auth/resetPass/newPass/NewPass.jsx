import MySection from 'components/_ui/section/MySection';
import outerCl from '../../AuthPage.module.scss';
import cl from './NewPass.module.scss';
import MyForm from 'components/_ui/form/MyForm';
import MyInput from 'components/_ui/input/MyInput';
import { useDispatch, useSelector } from 'react-redux';
import {
  authSel,
  resetPassword,
  setNewPass,
  setRepeatPass,
  setPassSaved,
} from 'store/slices/auth/authSlice';
import MyBtn from 'components/_ui/btn/MyBtn';
import Alert from 'components/_ui/alert/Alert';

const NewPass = ({ userEmail }) => {
  const dispatch = useDispatch();
  const { newPass, repeatPass, mailCheck, passSaved } = useSelector(authSel);

  const onNewPass = () => {
    if (newPass === repeatPass) {
      alert('Привет, я заглушка успешной смены пароля');

      // dispatch(
      //   resetPassword({
      //     bodyParams: { userEmail: userEmail, newPassword: newPass },
      //   }),
      // );
    } else {
      alert('Вы неправильно повторили пароль');
    }
  };

  return (
    <MySection classNames={outerCl.section}>
      <div className={outerCl.container + ' container'}>
        <div className={outerCl.inner + ' section-inner'}>
          <MyForm
            classnames={outerCl.form + ` ${cl.form} w-full`}
            onSubmit={onNewPass}
          >
            <MyInput
              value={newPass}
              setValue={setNewPass}
              type="password"
              required
              disabled={mailCheck}
              placeholder={'New password'}
              placeholderTop={true}
            />
            <MyInput
              value={repeatPass}
              setValue={setRepeatPass}
              type="password"
              required
              disabled={mailCheck}
              placeholder={'Repeat password'}
              placeholderTop={true}
            />
            <MyBtn
              classNames={
                outerCl.submit +
                ` ${cl.submit} btn-accent w-full btn-circle text-14`
              }
            >
              Save password
            </MyBtn>
            <Alert
              isVisible={passSaved}
              setIsVisible={setPassSaved}
              styles={{
                top: 'calc(100% + 48px)',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'rgba(19, 229, 90, 0.32)',
                color: '#30BA70',
              }}
            >
              Password saved
            </Alert>
          </MyForm>
        </div>
      </div>
    </MySection>
  );
};

export default NewPass;
