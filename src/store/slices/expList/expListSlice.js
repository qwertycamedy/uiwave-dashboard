import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { loadStatus } from 'store/loadStatus';
import { apiUrl } from 'store/store';

export const getExpList = createAsyncThunk('expList/getExpList', async () => {
  try {
    const config = {
      headers: {
        'email': 'ilyas@uiwave.io',
      },
    };

    const { data } = await axios.get(`${apiUrl}/experiments`, config);
    
    return data;
  } catch (err) {
    console.log(`get exp-list error: ${err}`);
  }
});

const initialState = {
  filterBtns: [
    { id: 1, label: 'All', value: 'ALL' },
    { id: 2, label: 'Active', value: 'ACTIVE' },
    { id: 3, label: 'Draft', value: 'DRAFT' },
    { id: 4, label: 'Terminated', value: 'TERMINATED' },
  ],
  currentFilterBtn: { id: 1, label: 'All', value: 'ALL' },
  searchValue: '',
  sortBtns: [
    {
      label: 'Name',
      value: 'name',
      isAsc: false,
    },
    {
      label: 'Modified',
      value: 'modificationTimestamp',
      isAsc: false,
    },
  ],
  currentSort: null,

  expList: [],
};

const expListSlice = createSlice({
  name: 'expList',
  initialState,
  reducers: {
    setCurrentFilterBtn: (state, action) => {
      state.currentFilterBtn = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },

    setToggleSort: (state, action) => {
      const currentSort = action.payload;
      state.sortBtns = state.sortBtns.map((btn) =>
        btn.label === currentSort.label
          ? {
              label: currentSort.label,
              value: currentSort.value,
              isAsc: !currentSort.isAsc,
            }
          : { label: btn.label, value: btn.value, isAsc: false },
      );

      state.currentSort = {
        label: currentSort.label,
        value: currentSort.value,
        isAsc: !currentSort.isAsc,
      };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getExpList.pending, (state) => {
        state.expListLoadStatus = loadStatus.pending;
      })
      .addCase(getExpList.fulfilled, (state, action) => {
        state.expListLoadStatus = loadStatus.fulfilled;
        state.expList = action.payload;
      })
      .addCase(getExpList.rejected, (state) => {
        state.expListLoadStatus = loadStatus.rejected;
      });
  },
});

export const { setCurrentFilterBtn, setSearchValue, setToggleSort } =
  expListSlice.actions;
export const expListSel = (state) => state.expList;

export default expListSlice.reducer;
