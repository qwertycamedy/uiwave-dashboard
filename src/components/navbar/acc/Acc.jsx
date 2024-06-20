import { Link } from 'react-router-dom';
import cl from './Acc.module.scss';
import { useSelector } from 'react-redux';
import { authSel } from 'store/slices/auth/authSlice';
import { formatDate } from 'hooks/formatDate';

const Acc = () => {
  const { userData } = useSelector(authSel);

  const formattedDate = userData
    ? formatDate(userData?.creationTimestamp, true, true, true, false, false)
    : '';
    
  return (
    <div className={cl.acc}>
      <div className={cl.info}>
        <h5 className={cl.name + ' title text-14'}>{userData?.name} </h5>
        <p className={cl.email}>{userData?.email}</p>
        {!userData?.isEmailVerified && (
          <Link className={cl.verify + ' link link-accent-a'}>
            Verify email
          </Link>
        )}
      </div>
      <div className={cl.member}>
        Member since: <span>{formattedDate}</span>
      </div>
    </div>
  );
};

export default Acc;
