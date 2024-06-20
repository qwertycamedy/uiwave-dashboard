import { NavLink } from 'react-router-dom';
import cl from './Links.module.scss'


const Links = ({ links, activeLinkCl, defLinkCl }) => {
  return (
    <nav className={cl.outer}>
      <ul className={cl.list}>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? `${activeLinkCl}`
                  : `${defLinkCl}`
              }
            >
              <svg
                className={`${cl.link__ico} ico-24 stroke`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                dangerouslySetInnerHTML={{ __html: link.ico }}
              />{' '}
              <span>{link.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Links;
