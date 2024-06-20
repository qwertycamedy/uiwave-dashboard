import { clsx } from 'clsx';
import Item from './item/Item';

const Items = ({ items, ifelse }) => {

  return (
    <tbody
      className={clsx('table__body', {
        'table__404-body': ifelse,
      })}
    >
      {!ifelse ? (
        items.map((item) => <Item item={item} key={item.id} />).reverse()
      ) : (
        <tr className="table__404-stroke">
          <td className="table__404-item">
            No experiments found. Create a new one to start using UIWave
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default Items;
