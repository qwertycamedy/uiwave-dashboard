import cl from './Head.module.scss';

const Head = () => {
  return (
    <thead className="table__head">
      <tr className="table__head-stroke">
        <td className={`${cl.id} table__head-item text-center`}>
          <span>ID</span>
        </td>
        <td className={`${cl.name} table__head-item`}>
          <span>Name</span>
        </td>
        <td className={`${cl.traffic} table__head-item text-center`}>
          <span>Traffic Allocation</span>
        </td>
        <td className={`${cl.visitors} table__head-item text-center`}>
          <span>Visitors Count</span>
        </td>
        <td className={`${cl.ratio} table__head-item text-center`}>
          <span>Ratio</span>
        </td>
        {/* <td className={`${cl.metrics} table__head-item`}>
          <span>Metrics impact</span>
        </td> */}
      </tr>
    </thead>
  );
};

export default Head;
