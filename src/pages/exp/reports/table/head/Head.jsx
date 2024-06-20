import cl from './Head.module.scss';

const Head = () => {
  return (
    <thead className="table__head">
      <tr className="table__head-stroke">
        <td className={`${cl.report} table__head-item text-center`}>Report</td>
        <td className={`${cl.start} table__head-item text-center`}>
          <span>Start date</span>
        </td>
        <td className={`${cl.end} table__head-item text-center`}>
          <span>End date</span>
        </td>
        <td className={`${cl.end} table__head-item text-center`}>
          <span>Total visitors</span>
        </td>
        <td className={`${cl.results} table__head-item`}></td>
        <td className={`${cl.del} table__head-item`}></td>
      </tr>
    </thead>
  );
};

export default Head;
