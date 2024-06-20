import MySection from 'components/_ui/section/MySection';
import Table from './table/Table';
import { useSelector } from 'react-redux';
import { expSel } from 'store/slices/exp/expSlice';

const Reports = () => {
  const { exp, reportsSortBtn } = useSelector(expSel);
  
  const reports = exp ? exp.iterationReports : [];

  const ifelse =
    reports === null || reports.length < 1 || reports === undefined;

  return (
    <MySection>
      <h3 className={`title title-section`}>Reports ({reports.length})</h3>
      {ifelse ? (
        <p className="text-14 color-dull">No reports yet.</p>
      ) : (
        <Table items={reports} expId={exp?.id} />
      )}
    </MySection>
  );
};

export default Reports;
