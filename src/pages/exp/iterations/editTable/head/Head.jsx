import cl from './Head.module.scss';

const Head = ({ total }) => {
  return (
    <thead className="table__head">
      <tr className="table__head-stroke">
        <td className={`${cl.name} table__head-item`}>
          <span>Name</span>
        </td>
        <td className={`${cl.allocation} text-center table__head-item`}>
          <span>Allocation</span>
        </td>
        <td className={`${cl.total} table__head-item`}>
          <div className="flex justify-end items-center w-full gap-14">
            <div className={cl.line}>
              <span
                className={cl.line__progress}
                style={{ width: total + 'px' }}
              ></span>
            </div>
            <span>Total: {total}/100</span>
          </div>
        </td>
      </tr>
    </thead>
  );
};

export default Head;
