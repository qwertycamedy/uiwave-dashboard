import MySection from 'components/_ui/section/MySection';
import cl from './Ui.module.scss';
import MyBtn from 'components/_ui/btn/MyBtn';
import { useSelector } from 'react-redux';
import { settingsSel } from 'store/slices/settings/settingsSlice';
import { clsx } from 'clsx';
import { useTheme } from 'hooks/useTheme';

const Ui = () => {
  const { themes, theme, setTheme } = useTheme();

  const onTheme = (cur) => {
    setTheme(cur);
  };

  return (
    <MySection>
      <h3 className={`${cl.title} title title-section`}>UI settings</h3>
      <div className="block">
        <p className="suptitle suptitle-block">Theme</p>
        <div className="btn-group-outer">
          {themes?.map((obj) => (
            <MyBtn
              classNames={clsx(`${cl.btn} btn-group-to`, {
                'btn-accent': theme === obj,
              })}
              key={obj}
              onClick={() => onTheme(obj)}
            >
              {obj}
            </MyBtn>
          ))}
        </div>
      </div>
    </MySection>
  );
};

export default Ui;
