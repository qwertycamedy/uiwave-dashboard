import MySection from 'components/_ui/section/MySection';
import cl from './Info.module.scss';
import MyInput from 'components/_ui/input/MyInput';
import { useSelector } from 'react-redux';
import {
  createExpSel,
  setDescrVal,
  setNameVal,
} from 'store/slices/createExp/createExpSlice';

const Info = () => {
  const { nameVal, descrVal } = useSelector(createExpSel);

  return (
    <MySection>
      <h3 className={`${cl.title} title title-section`}>Information</h3>
      <div className="block flex gap-16">
        <MyInput
          value={nameVal}
          setValue={setNameVal}
          outerCl={cl.name}
          placeholder={'Experiment name'}
          placeholderTop={true}
        />
        <MyInput
          value={descrVal}
          setValue={setDescrVal}
          outerCl={cl.descr}
          placeholder={'Description'}
          placeholderTop={true}
        />
      </div>
    </MySection>
  );
};

export default Info;
