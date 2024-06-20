import { Link } from 'react-router-dom';

import img from 'assets/img/logo.png';

const Logo = ({
  classNames,
  icoCl,
  textCl,
  withText = true,
  icoWidth = 61,
  icoHeight = 62,
  fontSize = 24,
  ...props
}) => {
  return (
    <Link className={`${classNames} logo`} to="/" {...props}>
      <img
        className={icoCl + ' logo__ico'}
        style={{ width: icoWidth, height: icoHeight }}
        src={img}
        alt="logo"
      />
      {withText && <span className={textCl + ' logo__text'} style={{fontSize: fontSize + 'px'}}>UIWave</span>}
    </Link>
  );
};

export default Logo;
