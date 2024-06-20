import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { loadStatus } from 'store/loadStatus';
import { apiUrl } from 'store/store';

export const getExp = createAsyncThunk('exp/getExp', async ({ uId }) => {
  try {
    const config = {
      headers: {
        email: 'ilyas@uiwave.io',
      },
    };

    const { data } = await axios.get(`${apiUrl}/experiments/${uId}`, config);

    console.log(data);
    return data;
  } catch (err) {
    console.log(`get experiment error: ${err}`);
  }
});

export const updExp = createAsyncThunk('exp/updExp', async ({ uId }) => {
  try {
    const config = {
      headers: {
        email: 'ilyas@uiwave.io',
      },
    };

    const { data } = await axios.put(`${apiUrl}/experiments/${uId}`, config);

    return data;
  } catch (err) {
    console.log(`get experiment error: ${err}`);
  }
});

export const startNewIteration = createAsyncThunk(
  'exp/startNewIteration',
  async ({ uId, bodyParams }) => {
    try {
      const config = {
        headers: {
          email: 'ilyas@uiwave.io',
        },
      };

      const { data } = await axios.post(
        `${apiUrl}/experiments/${uId}/startIteration`,
        bodyParams,
        config,
      );

      return data;
    } catch (err) {
      console.log(`get experiment error: ${err}`);
    }
  },
);

export const delExp = createAsyncThunk('exp/delExp', async ({ uId }) => {
  try {
    const config = {
      headers: {
        email: 'ilyas@uiwave.io',
      },
    };

    const { data } = await axios.delete(`${apiUrl}/experiments/${uId}`, config);

    console.log(data);
    return data;
  } catch (err) {
    console.log(`get experiment error: ${err}`);
  }
});

const initialState = {
  expLoadStatus: 'idle',

  exp: null,

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

  isEdit: false,

  newIterationName: '',
  addNewIterationItem: false,
  toConfigureNew: true,
  newItModal: false,

  total: 0,

  reports: [
    {
      id: 1,
      startDate: '23.12.2023',
      startTime: '12:45',
      endDate: '26.12.2023',
      endTime: '15:50',
      totalVisitors: 1500,
    },
    {
      id: 2,
      startDate: '23.12.2023',
      startTime: '12:45',
      endDate: '26.12.2023',
      endTime: '15:50',
      totalVisitors: 1500,
    },
    {
      id: 3,
      startDate: '23.12.2023',
      startTime: '12:45',
      endDate: '26.12.2023',
      endTime: '15:50',
      totalVisitors: 1500,
    },
  ],
};

const expSlice = createSlice({
  name: 'exp',
  initialState,
  reducers: {
    setIsEdit: (state, action) => {
      state.isEdit = action.payload;
    },
    setToConfigureNew: (state, action) => {
      console.log(action.payload);
      state.toConfigureNew = action.payload.toConfigureNew;
      state.exp.state = action.payload.state;
    },
    setNewItModal: (state, action) => {
      state.newItModal = action.payload;
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
        !state.selectedMetrics.find(
          (item) => item.orderIndex === action.payload.orderIndex,
        )
      ) {
        state.selectedMetrics.push(action.payload);
      }
    },
    delSelectedMetric: (state, action) => {
      state.selectedMetrics = state.selectedMetrics.filter(
        (item) => item.orderIndex !== action.payload.orderIndex,
      );
    },
    setIterationItem: (state, action) => {
      const { name, percent } = action.payload;
      const item = state.exp?.treatments?.find((obj) => obj.name === name);
      if (item) {
        item.trafficAllocation = percent;
      }
    },
    setIterationTotal: (state) => {
      state.total = state.exp?.treatments?.reduce(
        (sum, cur) => sum + cur.trafficAllocation,
        0,
      );
    },
    addNewIteraionItem: (state, action) => {
      state.addNewIterationItem = action.payload;
    },
    delIterationItem: (state, action) => {
      state.exp.treatments = state.exp.treatments.filter(
        (item) => item.name !== action.payload.name,
      );
    },
    setNewIterationName: (state, action) => {
      state.newIterationName = action.payload;
    },
    confirmNewIterationItem: (state, action) => {
      const newItem = {
        name: action.payload,
        trafficAllocation: 0,
      };

      state.exp?.treatments.push(newItem);
      state.addNewIterationItem = false;
      state.newIterationName = '';
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getExp.pending, (state) => {
        state.expLoadStatus = loadStatus.pending;
      })
      .addCase(getExp.fulfilled, (state, action) => {
        state.expLoadStatus = loadStatus.fulfilled;
        state.exp = action.payload;

        state.total = action.payload.treatments.reduce(
          (acc, cur) => acc + cur.trafficAllocation,
          0,
        );

        state.selectedMetrics = action.payload.metrics;
      })
      .addCase(getExp.rejected, (state) => {
        state.expLoadStatus = loadStatus.rejected;
      });

    builder
      .addCase(updExp.pending, (state) => {
        state.expLoadStatus = loadStatus.pending;
      })
      .addCase(updExp.fulfilled, (state, action) => {
        state.expLoadStatus = loadStatus.fulfilled;

        console.log(action.payload);
      })
      .addCase(updExp.rejected, (state) => {
        state.expLoadStatus = loadStatus.rejected;
      });

    builder
      .addCase(startNewIteration.pending, (state) => {
        state.expLoadStatus = loadStatus.pending;
      })
      .addCase(startNewIteration.fulfilled, (state, action) => {
        state.expLoadStatus = loadStatus.fulfilled;

        console.log(action.payload);
      })
      .addCase(startNewIteration.rejected, (state) => {
        state.expLoadStatus = loadStatus.rejected;
      });

    builder
      .addCase(delExp.pending, (state) => {
        state.expLoadStatus = loadStatus.pending;
      })
      .addCase(delExp.fulfilled, (state) => {
        state.expLoadStatus = loadStatus.fulfilled;
        console.log('exp deleted');
      })
      .addCase(delExp.rejected, (state) => {
        state.expLoadStatus = loadStatus.rejected;
      });
  },
});

export const {
  setIsEdit,
  setToConfigureNew,
  setNewItModal,
  setNewCustomValue,
  addCustomMetric,
  delCustomMetric,
  addSelectedMetric,
  delSelectedMetric,
  setIterationItem,
  setIterationTotal,
  addNewIteraionItem,
  delIterationItem,
  setNewIterationName,
  confirmNewIterationItem,
} = expSlice.actions;
export const expSel = (state) => state.exp;

export default expSlice.reducer;
