import { clsx } from 'clsx';
import Item from './item/Item';

const Items = ({ items, ifelse, total }) => {

  return (
    <tbody
      className={clsx('table__body', {
        'table__404-body': ifelse,
      })}
    >
      {!ifelse ? (
        items.map((item) => <Item item={item} total={total} key={item.name} />)
      ) : (
        <tr className="table__404-stroke">
          <td className="table__404-item">
            Iteration was not found
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default Items;
