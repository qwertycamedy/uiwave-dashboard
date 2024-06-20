import { clsx } from 'clsx';
import { Helmet } from 'react-helmet';

const MyPage = ({
  children,
  metaTitle = '140',
  metaDescr = '140',
  hiddenTitle,
  withHeader = true,
  classNames,
}) => {
  return (
    <main
      className={clsx(`${classNames} main`, {'main-without-padding': !withHeader})}
    >
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescr} />
      </Helmet>
      {hiddenTitle && <h1 className="title-hidden">{hiddenTitle}</h1>}
      {children}
    </main>
  );
};

export default MyPage;
