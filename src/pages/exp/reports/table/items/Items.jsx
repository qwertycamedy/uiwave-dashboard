
import Item from './item/Item';

const Items = ({ items, expId }) => {

  return (
    <tbody
      className={'table__body'}
    >
      {
        items.map((item) => <Item item={item} expId={expId} key={item.id} />).reverse()}
    </tbody>
  );
};

export default Items;
