import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  emailModal: false,
  nameModal: false,
  passModal: false,

  apiKeyCopied: false,
  resetApiKeyModal: false,

  delAccModal: false,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setEmailModal: (state, action) => {
      state.emailModal = action.payload;
    },
    setNameModal: (state, action) => {
      state.nameModal = action.payload;
    },
    setPassModal: (state, action) => {
      state.passModal = action.payload;
    },
    setApiKeyCopied: (state, action) => {
      state.apiKeyCopied = action.payload;
    },
    setResetApiKeyModal: (state, action) => {
      state.resetApiKeyModal = action.payload;
    },
    setDelAccModal: (state, action) => {
      state.delAccModal = action.payload;
    },
  },
});

export const {
  setEmailModal,
  setNameModal,
  setPassModal,
  setApiKeyCopied,
  setResetApiKeyModal,
  setDelAccModal,
} = settingsSlice.actions;
export const settingsSel = (state) => state.settings;

export default settingsSlice.reducer;
