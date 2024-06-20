import MySection from 'components/_ui/section/MySection';
import cl from './Subscription.module.scss';
import MyBtn from 'components/_ui/btn/MyBtn';
import { useDispatch } from 'react-redux';
import { setDelAccModal } from 'store/slices/settings/settingsSlice';
import { disableScroll } from 'hooks/disableScroll';
import DelModal from './delModal/DelModal';

const Subscription = () => {
  const dispatch = useDispatch();

  const onDelAccModal = () => {
    dispatch(setDelAccModal(true));
    disableScroll();
  }
  return (
    <MySection>
      <h3 className={`${cl.title} title title-section`}>Subscription</h3>
      <div className={cl.block__outer + ' block__outer'}>
        <div className={cl.block + ' block'}>
          <p className="suptitle suptitle-block">Current plan</p>
          <div className={cl.info}>
            <div className={cl.plan}>
              <p className={cl.plan__name}>Custom plan</p>
              <button className={`${cl.plan__btn} ${cl.info__btn} link link-accent-a`}>Change plan</button>
            </div>
            <div className={cl.renewal}>
              <p className={cl.renewal__text}>
                Next payment 15.00 EUR on Dec 27th, 2023. (VAT may apply)
                Automatic renewal every month
              </p>
              <button className={`${cl.renewal__btn} ${cl.info__btn} link link-accent-a`}>Cancel renewal</button>
            </div>
          </div>
        </div>
        <div className={cl.block + ' block'}>
          <p className={`${cl.payment__title} suptitle suptitle-block`}>Payment details</p>
          <MyBtn classNames={'btn-accent'}>Change payment details</MyBtn>
        </div>
      </div>
      <MyBtn classNames={`${cl.del} btn-del`} onClick={onDelAccModal}>Delete my account</MyBtn>
      <DelModal />
    </MySection>
  );
};

export default Subscription;
