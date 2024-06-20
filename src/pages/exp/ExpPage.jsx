import MyPage from 'components/_ui/page/MyPage';
import Navbar from 'components/navbar/Navbar';
import cl from './ExpPage.module.scss';
import Info from './info/Info';
import Metrics from 'components/experiment/metrics/Metrics';

import Head from './head/Head';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCustomMetric,
  addSelectedMetric,
  delCustomMetric,
  delSelectedMetric,
  expSel,
  getExp,
  setIsEdit,
  setNewCustomValue,
} from 'store/slices/exp/expSlice';
import Iterations from './iterations/Iterations';
import Reports from './reports/Reports';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useEffect } from 'react';

const ExpPage = () => {
  const dispatch = useDispatch();
  const {
    newCustomValue,
    uiwaveMetrics,
    customMetrics,
    selectedMetrics,
    isEdit,
  } = useSelector(expSel);
  const { uId } = useParams();

  useEffect(() => {
    dispatch(getExp({ uId }));
  }, [dispatch, uId]);

  const toReady = () => {
    dispatch(setIsEdit(false));
  };

  const openEdit = () => {
    // dispatch(setIsEdit(true));
    alert('this feature is under development');
  };

  return (
    <>
      <Navbar />
      <MyPage
        metaTitle="UIWave | Experiments List"
        metaDescr="UIWave Experiments List"
      >
        <div className="container-small">
          <Head uId={uId} />
          <Info />
          <DndProvider backend={HTML5Backend}>
            <Metrics
              uiwaveMetrics={uiwaveMetrics}
              selectedMetrics={selectedMetrics}
              customMetrics={customMetrics}
              delCustomMetric={delCustomMetric}
              addSelectedMetric={addSelectedMetric}
              delSelectedMetric={delSelectedMetric}
              newCustomValue={newCustomValue}
              setNewCustomValue={setNewCustomValue}
              addCustomMetric={addCustomMetric}
              isEdit={isEdit}
              toReady={toReady}
              openEdit={openEdit}
            />
          </DndProvider>
          <Iterations />
          <Reports />
        </div>
      </MyPage>
    </>
  );
};

export default ExpPage;
