import { configureStore } from '@reduxjs/toolkit'

import window from './slices/window/windowSlice'
import auth from './slices/auth/authSlice'
import settings from './slices/settings/settingsSlice'
import navbar from './slices/navbar/navbarSlice'
import expList from './slices/expList/expListSlice'
import createExp from './slices/createExp/createExpSlice'
import exp from './slices/exp/expSlice'
import treatRes from './slices/treatRes/treatResSlice'


export const store = configureStore({
  reducer: {
    window,
    auth,
    navbar,
    settings,
    expList,
    createExp,
    exp,
    treatRes,
  },
})

export const apiUrl = 'https://api.uiwave.io/v1';