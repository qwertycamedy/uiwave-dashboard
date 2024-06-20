import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { loadStatus } from 'store/loadStatus';
import { apiUrl } from 'store/store';

export const createExp = createAsyncThunk(
  'createExp/createExp',
  async ({ bodyParams }) => {
    try {
      const config = {
        headers: {
          email: 'ilyas@uiwave.io',
        },
      };

      const { data } = await axios.post(
        `${apiUrl}/experiments`,
        bodyParams,
        config,
      );

      console.log(data);
      return data;
    } catch (err) {
      console.log(`get experiment error: ${err}`);
    }
  },
);

const initialState = {
  createExpLoadStatus: 'idle',

  nameVal: '',
  descrVal: '',

  newCustomValue: '',
  customMetrics: [
    {
      orderIndex: 1,
      name: 'CTR',
    },
  ],

  uiwaveMetrics: [
    {
      orderIndex: 2,
      name: 'Click through rate',
    },
    {
      orderIndex: 3,
      name: 'Conversation rate',
    },
    {
      orderIndex: 4,
      name: 'Click through rate',
    },
    {
      orderIndex: 5,
      name: 'Conversation rate',
    },
    {
      orderIndex: 6,
      name: 'Click through rate',
    },
    {
      orderIndex: 7,
      name: 'Conversation rate',
    },
  ],

  selectedMetrics: [],
};

const createExpSlice = createSlice({
  name: 'createExp',
  initialState,
  reducers: {
    setNameVal: (state, action) => {
      state.nameVal = action.payload;
    },
    setDescrVal: (state, action) => {
      state.descrVal = action.payload;
    },
    setNewCustomValue: (state, action) => {
      state.newCustomValue = action.payload;
    },
    addCustomMetric: (state, action) => {
      state.customMetrics.unshift(action.payload);
    },
    delCustomMetric: (state, action) => {
      state.customMetrics = state.customMetrics.filter(
        (item) => item.orderIndex !== action.payload.orderIndex,
      );
      state.selectedMetrics = state.selectedMetrics.filter(
        (item) => item.orderIndex !== action.payload.orderIndex,
      );
    },
    addSelectedMetric: (state, action) => {
      if (
        !state.selectedMetrics.find((item) => item.orderIndex === action.payload.orderIndex)
      ) {
        state.selectedMetrics.push(action.payload);
      }
    },
    delSelectedMetric: (state, action) => {
      state.selectedMetrics = state.selectedMetrics.filter(
        (item) => item.orderIndex !== action.payload.orderIndex,
      );
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(createExp.pending, (state) => {
        state.expLoadStatus = loadStatus.pending;
      })
      .addCase(createExp.fulfilled, (state) => {
        state.expLoadStatus = loadStatus.fulfilled;
        console.log('fulfilled');
      })
      .addCase(createExp.rejected, (state) => {
        state.expLoadStatus = loadStatus.rejected;
      });
  },
});

export const {
  setNameVal,
  setDescrVal,
  setNewCustomValue,
  addCustomMetric,
  delCustomMetric,
  addSelectedMetric,
  delSelectedMetric,
} = createExpSlice.actions;
export const createExpSel = (state) => state.createExp;

export default createExpSlice.reducer;
