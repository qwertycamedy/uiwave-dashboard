import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { loadStatus } from 'store/loadStatus';
import { apiUrl } from 'store/store';

export const getTreatRes = createAsyncThunk(
  'treatRes/getTreatRes',
  async ({ expId, reportId }) => {
    try {
      const config = {
        headers: {
          email: 'ilyas@uiwave.io',
        },
      };

      const { data } = await axios.get(
        `${apiUrl}/reports/${expId}/${reportId}`,
        config,
      );

      return data;
    } catch (err) {
      console.log(`get exp-list error: ${err}`);
    }
  },
);

const initialState = {
  treatResLoadStatus: 'idle',

  treatRes: [],
};

const treatResSlice = createSlice({
  name: 'treatRes',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getTreatRes.pending, (state) => {
        state.treatResLoadStatus = loadStatus.pending;
      })
      .addCase(getTreatRes.fulfilled, (state, action) => {
        state.treatResLoadStatus = loadStatus.fulfilled;
        state.treatRes =JSON.parse(
          action.payload.treatmentReportJsonString,
        );
      })
      .addCase(getTreatRes.rejected, (state) => {
        state.treatResLoadStatus = loadStatus.rejected;
      });
  },
});

// export const { } = treatResSlice.actions;
export const treatResSel = (state) => state.treatRes;

export default treatResSlice.reducer;
