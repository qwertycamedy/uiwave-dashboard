import MyPage from 'components/_ui/page/MyPage';
import Navbar from 'components/navbar/Navbar';
import cl from './CreateExpPage.module.scss';
import Info from './info/Info';
import Metrics from 'components/experiment/metrics/Metrics';
import {
  addCustomMetric,
  addSelectedMetric,
  createExp,
  createExpSel,
  delCustomMetric,
  delSelectedMetric,
  setNewCustomValue,
} from 'store/slices/createExp/createExpSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { getExpList } from 'store/slices/expList/expListSlice';

const CreateExpPage = () => {
  const dispatch = useDispatch();
  const {
    uiwaveMetrics,
    customMetrics,
    selectedMetrics,
    newCustomValue,
    nameVal,
    descrVal,
  } = useSelector(createExpSel);
  const navigate = useNavigate();

  const toReady = () => {
    if(nameVal && descrVal && selectedMetrics.length > 0) {
      dispatch(
        createExp({
          bodyParams: {
            name: nameVal,
            description: descrVal,
            metrics: selectedMetrics,
            treatments: [],
          },
        }),
      ).then(() => {
        dispatch(getExpList());
        navigate('/');
      }).catch((err) => {
        console.log(err)
      });
    } else {
      alert('Fill in all the fields')
    }
  };

  console.log(selectedMetrics);

  return (
    <>
      <Navbar />
      <MyPage
        metaTitle="UIWave | Experiments List"
        metaDescr="UIWave Experiments List"
      >
        <div className="container-small">
          <h1 className={`${cl.title} title title-page`}>Create experiment</h1>
          <Info />
          <DndProvider backend={HTML5Backend}>
            <Metrics
              uiwaveMetrics={uiwaveMetrics}
              customMetrics={customMetrics}
              delCustomMetric={delCustomMetric}
              addSelectedMetric={addSelectedMetric}
              delSelectedMetric={delSelectedMetric}
              selectedMetrics={selectedMetrics}
              newCustomValue={newCustomValue}
              setNewCustomValue={setNewCustomValue}
              addCustomMetric={addCustomMetric}
              isEdit={true}
              toReady={toReady}
            />
          </DndProvider>
        </div>
      </MyPage>
    </>
  );
};

export default CreateExpPage;
``;
