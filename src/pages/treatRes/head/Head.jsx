import MyBtn from 'components/_ui/btn/MyBtn';
import cl from './Head.module.scss'

const Head = ({uId}) => {
  return (
    <div className={cl.head + ' flex items-center justify-between'}>
      <div className={cl.info}>
        <h1 className={`${cl.title} title title-page`}>Treatment Results</h1>
        <p className={cl.report}>Report №{uId}</p>
      </div>
      <div className={cl.actions + ' flex gap-16'}>
        <MyBtn classNames={cl.share + ' btn-accent'}>
          <span>Download CSV</span>
        </MyBtn>
        <MyBtn classNames={cl.del + ' btn-del'}>Delete</MyBtn>
      </div>
    </div>
  );
};

export default Head;
