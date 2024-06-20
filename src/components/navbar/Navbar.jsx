import Logo from 'components/logo/Logo';
import Acc from './acc/Acc';
import Logout from './logout/Logout';
import { useSelector } from 'react-redux';
import { navbarSel } from 'store/slices/navbar/navbarSlice';
import Links from './links/Links';
import cl from './Navbar.module.scss';

const Navbar = () => {
  const { links, activeLinkCl, defLinkCl } = useSelector(navbarSel);

  return (
    <aside
      className={cl.navbar}
    >
      <Logo
        classNames={cl.logo}
        icoWidth={65}
        icoHeight={65}
        withText={true}
        fontSize={20}
      />
      <Acc />
      <Links links={links} activeLinkCl={activeLinkCl} defLinkCl={defLinkCl} />
      <Logout />
    </aside>
  );
};

export default Navbar;
