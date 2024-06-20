
import cl from './Head.module.scss';


const Head = () => {
  return (
    <thead className="table__head">
      <tr className="table__head-stroke">
        <td className={`${cl.name} table__head-item`}>
          <span>Name</span>
        </td>
        <td className={`${cl.allocation} text-center table__head-item`}>
          <span>Allocation</span>
        </td>
        <td className={`${cl.click} text-center table__head-item`}>
          <span>Click through rate</span>
        </td>
        <td className={`${cl.time} text-center table__head-item`}>
          <span>Time on page</span>
        </td>
        <td className={`${cl.conversation} text-center table__head-item`}>
          <span>Conversation rate</span>
        </td>
      </tr>
    </thead>
  );
};

export default Head;
