import cl from './Ready.module.scss';

const Ready = ({ selectedMetrics, openEdit }) => {
  return (
    <div>
      <div className={`${cl.items} flex gap-10`}>
        {selectedMetrics?.map((obj) => (
          <div className={cl.item} key={obj.orderIndex}>
            {obj.name}
          </div>
        ))}
      </div>
      <button className="link link-accent-a" onClick={openEdit}>Edit metrics</button>
    </div>
  );
};

export default Ready;
