import MyPage from 'components/_ui/page/MyPage';
import Navbar from 'components/navbar/Navbar';
import Head from './head/Head';
import { useParams } from 'react-router-dom';
import Table from './table/Table';
import { useDispatch, useSelector } from 'react-redux';
import { getTreatRes, treatResSel } from 'store/slices/treatRes/treatResSlice';
import { useEffect } from 'react';

const TreatResPage = () => {
  const dispatch = useDispatch();
  const { treatRes } = useSelector(treatResSel);
  const { expId, treatResId } = useParams();

  useEffect(() => {
    dispatch(getTreatRes({ expId, reportId: treatResId }));
  }, [dispatch]);

  console.log(treatRes);

  return (
    <>
      <Navbar />
      <MyPage
        metaTitle="UIWave | Treatment Results"
        metaDescr="UIWave Treatment Results"
      >
        <Head uId={treatResId} />
        <Table treatRes={treatRes} />
      </MyPage>
    </>
  );
};

export default TreatResPage;
