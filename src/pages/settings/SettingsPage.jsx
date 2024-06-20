import MyPage from 'components/_ui/page/MyPage';
import Navbar from 'components/navbar/Navbar';
import Profile from './profile/Profile';
import Ui from './ui/Ui';
import Api from './api/Api';
import Subscription from './subscription/Subscription';
import cl from './SettingsPage.module.scss'

const SettingsPage = () => {
  return (
    <>
      <Navbar />
      <MyPage metaTitle="UIWave | Settings" metaDescr="UIWave Settings">
        <h1 className={`${cl.title} title title-page`}>Settings</h1>
        <Profile />
        <Ui />
        <Api />
        <Subscription />
      </MyPage>
    </>
  );
};

export default SettingsPage;
