import MySection from 'components/_ui/section/MySection';
import cl from './Info.module.scss';
import MyInput from 'components/_ui/input/MyInput';
import { useSelector } from 'react-redux';
import { expSel } from 'store/slices/exp/expSlice';

const Info = () => {
  const {exp} = useSelector(expSel);
  
  return (
    <MySection>
      <h3 className={`${cl.title} title title-section`}>Information</h3>
      <div className="block flex gap-16">
        <MyInput
          outerCl={cl.name}
          disabled
          value={exp ? exp.name : ''}
          placeholder={'Experiment name'}
          placeholderTop={false}
        />
        <MyInput
          outerCl={cl.descr}
          disabled
          value={exp ? exp.description : ''}
          placeholder={'Description'}
          placeholderTop={false}
        />
      </div>
    </MySection>
  );
};

export default Info;
