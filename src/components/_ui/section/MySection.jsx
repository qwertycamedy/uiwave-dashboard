

const MySection = ({ classNames, children, ...props }) => {
  return (
    <section className={`${classNames} section`} {...props}>
      {children}
    </section>
  );
};

export default MySection;
