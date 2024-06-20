import MyPage from 'components/_ui/page/MyPage';
import Navbar from 'components/navbar/Navbar';
import cl from './ExpListPage.module.scss';
import Head from './head/Head';
import Table from './table/Table';
import { useDispatch, useSelector } from 'react-redux';
import {
  expListSel,
  getExpList,
  setCurrentFilterBtn,
} from 'store/slices/expList/expListSlice';
import { useEffect } from 'react';
import QueryString from 'qs';
import { useNavigate } from 'react-router-dom';

const ExpListPage = () => {
  const dispatch = useDispatch();
  const { expList, filterBtns, currentFilterBtn, searchValue, currentSort } =
    useSelector(expListSel);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getExpList())
  }, [dispatch])

  //выводим значения из адресной строки
  useEffect(() => {
    const queryString = window.location.search;

    if (queryString) {
      const params = QueryString.parse(queryString.substring(1));
      const queryFilterBtn = filterBtns.find(
        (btn) => btn.value === params.status,
      );
      dispatch(setCurrentFilterBtn(queryFilterBtn));
    }
  }, [dispatch]);

  //заводим значения в адресную строку
  useEffect(() => {
    const queryString = QueryString.stringify({
      status: currentFilterBtn.value,
    });

    navigate(`/experiments?${queryString}`);
  }, [currentFilterBtn]);

  const filteredList = expList?.filter((exp) => {
    const isMatchingSearch =
      exp.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      exp.description.toLowerCase().includes(searchValue.toLowerCase());
    const isMatchingFilter =
      exp.state === currentFilterBtn.value || currentFilterBtn.value === 'ALL';

    return isMatchingSearch && isMatchingFilter;
  });

  const sortedList = [...filteredList].sort((a, b) => {
    if (currentSort) {
      const propA = String(a[currentSort.value]).toLowerCase();
      const propB = String(b[currentSort.value]).toLowerCase();

      return currentSort.isAsc
        ? propA.localeCompare(propB)
        : propB.localeCompare(propA);
    }
    return filteredList;
  });

  console.log(expList)

  return (
    <>
      <Navbar />
      <MyPage
        metaTitle="UIWave | Experiments List"
        metaDescr="UIWave Experiments List"
      >
        <h1 className={`${cl.title} title title-page`}>Experiments list</h1>
        <Head />
        <Table expList={sortedList} />
      </MyPage>
    </>
  );
};

export default ExpListPage;
``;
