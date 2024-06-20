import { clsx } from 'clsx';
import cl from './Status.module.scss';

const Status = ({ status }) => {
  return (
    <div
      className={clsx(cl.status, {
        [cl.status__draft]: status === "DRAFT",
        [cl.status__active]: status === "ACTIVE",
        [cl.status__inactive]: status === "INACTIVE",
      })}
    >
      {status === "DRAFT" && 'Draft'}
      {status === "ACTIVE" && 'Active'}
      {status === "INACTIVE" && 'Inactive'}
    </div>
  );
};

export default Status;
