import cl from './Item.module.scss';

const Item = ({ item }) => {
  return (
    <tr className="table__body-stroke">
      <td className={`${cl.id} table__body-item text-center`}>{item?.id}</td>
      <td className={`${cl.name} table__body-item`}>{item?.name}</td>
      <td className={`${cl.trafficAllocation} table__body-item text-center`}>
        {item?.trafficAllocation}
      </td>
      <td className={`${cl.visitorsCount} table__body-item text-center`}>
        {item?.visitorCount}
      </td>
      <td className={`${cl.ratio} table__body-item text-center`}>
        {item?.ratio}%
      </td>
      {/* <td className={`${cl.metricsImpact} table__body-item`}>
          {Object.entries(item?.metricsImpact).map(([key, value]) => (
            <span className={cl.metricsImpact__item} key={key}>
              {key}: {value}
            </span>
          ))}
      </td> */}
    </tr>
  );
};

export default Item;
