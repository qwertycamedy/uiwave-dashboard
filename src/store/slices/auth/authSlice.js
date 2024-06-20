import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { loadStatus } from 'store/loadStatus';
import { apiUrl } from 'store/store';

export const getCSRF = createAsyncThunk('auth/getCSRF', async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/auth/csrf-token`);

    return data;
  } catch (err) {
    console.log(`Authentication error: ${err}`);
  }
});

export const getUserInfo = createAsyncThunk('auth/getUserInfo', async () => {
  try {
    const config = {
      headers: {
        'email': 'ilyas@uiwave.io',
      },
    };

    const { data } = await axios.get(
      `${apiUrl}/auth/currentUser`,
      config
    );

    return data;
  } catch (err) {
    console.log(`Authentication error: ${err}`);
  }
});

export const login = createAsyncThunk('auth/login', async ({ bodyParams }) => {
  try {
    const config = {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    const response = await axios.post(
      `${apiUrl}/auth/login`,
      bodyParams,
      config,
    );

    return response;
  } catch (err) {
    console.log(`Authentication error: ${err}`);
  }
});

export const register = createAsyncThunk(
  'auth/register',
  async ({ bodyParams }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      };

      const { data } = await axios.post(
        `${apiUrl}/auth/register`,
        bodyParams,
        config,
      );

      return data;
    } catch (err) {
      console.log(`Registration error: ${err}`);
    }
  },
);

export const previewNewPass = createAsyncThunk(
  'auth/previewNewPass',
  async ({ bodyParams }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        `https://api.uiwave.io/v1/auth/resetPassword`,
        bodyParams,
        config,
      );

      return data;
    } catch (err) {
      console.log(`Authentication error: ${err}`);
    }
  },
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({ bodyParams }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        `${apiUrl}/auth/resetPassword`,
        bodyParams,
        config,
      );

      return data;
    } catch (err) {
      console.log(`Authentication error: ${err}`);
    }
  },
);

const initialState = {
  isSign: false,
  authLoadStatus: 'idle',
  csrf: '',

  toRegister: false,
  toLogin: true,
  toEnterEmail: false,
  toNewPass: false,

  first: '',
  last: '',
  company: '',
  email: '',
  pass: '',
  confirmPass: '',
  invitationCode: '',
  newPass: '',
  repeatPass: '',
  rememberMe: false,
  mailCheck: false,
  passSaved: false,

  userData: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsSign: (state, action) => {
      state.isSign = action.payload;
    },
    setToRegister: (state) => {
      state.toRegister = true;
      state.toLogin = false;
      state.toEnterEmail = false;
      state.toNewPass = false;
    },
    setToLogin: (state) => {
      state.toRegister = false;
      state.toLogin = true;
      state.toEnterEmail = false;
      state.toNewPass = false;
    },
    setToEnterEmail: (state) => {
      state.toRegister = false;
      state.toLogin = false;
      state.toEnterEmail = true;
      state.toNewPass = false;
    },
    setToNewPass: (state) => {
      state.toRegister = false;
      state.toLogin = false;
      state.toEnterEmail = false;
      state.toNewPass = true;
    },

    setFirst: (state, action) => {
      state.first = action.payload;
    },
    setLast: (state, action) => {
      state.last = action.payload;
    },
    setCompany: (state, action) => {
      state.company = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPass: (state, action) => {
      state.pass = action.payload;
    },
    setConfirmPass: (state, action) => {
      state.confirmPass = action.payload;
    },
    setInvitationCode: (state, action) => {
      state.invitationCode = action.payload;
    },
    setNewPass: (state, action) => {
      state.newPass = action.payload;
    },
    setRepeatPass: (state, action) => {
      state.repeatPass = action.payload;
    },
    setRememberMe: (state, action) => {
      state.rememberMe = action.payload;
    },
    setMailCheck: (state, action) => {
      state.mailCheck = action.payload;
    },
    setPassSaved: (state, action) => {
      state.passSaved = action.payload;
    },

    clearAll: (state) => {
      state.first = '';
      state.last = '';
      state.company = '';
      state.pass = '';
      state.confirmPass = '';
      state.invitationCode = '';
      state.newPass = '';
      state.email = '';
      state.rememberMe = false;
      state.mailCheck = false;
      state.passSaved = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCSRF.pending, (state) => {
        state.authLoadStatus = loadStatus.pending;
      })
      .addCase(getCSRF.fulfilled, (state, action) => {
        const csrf = action.payload.csrfToken;
        state.authLoadStatus = loadStatus.fulfilled;

        if (csrf) {
          state.csrf = csrf;
          localStorage.setItem('csrf-token', csrf);
        }
      })
      .addCase(getCSRF.rejected, (state) => {
        state.authLoadStatus = loadStatus.rejected;
      });

    builder
    .addCase(getUserInfo.pending, (state) => {
      state.authLoadStatus = loadStatus.pending;
    })
    .addCase(getUserInfo.fulfilled, (state, action) => {
      state.authLoadStatus = loadStatus.fulfilled;

      state.isSign = true;
      state.userData = action.payload;
    })
    .addCase(getUserInfo.rejected, (state) => {
      state.authLoadStatus = loadStatus.rejected;
    });

    builder
      .addCase(login.pending, (state) => {
        state.authLoadStatus = loadStatus.pending;
      })
      .addCase(login.fulfilled, (state,action) => {
        state.authLoadStatus = loadStatus.fulfilled;
        state.email = '';
        state.pass = '';

        console.log(action)
      })
      .addCase(login.rejected, (state) => {
        state.authLoadStatus = loadStatus.rejected;
      });

    builder
      .addCase(register.pending, (state) => {
        state.authLoadStatus = loadStatus.pending;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.authLoadStatus = loadStatus.fulfilled;
        state.first = '';
        state.last = '';
        state.company = '';
        state.email = '';
        state.pass = '';
        state.confirmPass = '';
      })
      .addCase(register.rejected, (state) => {
        state.authLoadStatus = loadStatus.rejected;
      });

    builder
      .addCase(previewNewPass.pending, (state) => {
        state.authLoadStatus = loadStatus.pending;
      })
      .addCase(previewNewPass.fulfilled, (state, action) => {
        state.authLoadStatus = loadStatus.fulfilled;
        state.email = '';

        state.mailCheck = true;
      })
      .addCase(previewNewPass.rejected, (state) => {
        state.authLoadStatus = loadStatus.rejected;
      });

    builder
      .addCase(resetPassword.pending, (state) => {
        state.authLoadStatus = loadStatus.pending;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.authLoadStatus = loadStatus.fulfilled;

        state.newPass = '';

        if (action.payload === true) {
          state.passSaved = true;
          alert('Пароль изменен успешно!');
        } else {
          state.passSaved = false;
          alert('An error has occurred');
        }
      })
      .addCase(resetPassword.rejected, (state) => {
        state.authLoadStatus = loadStatus.rejected;
      });
  },
});

export const {
  setToRegister,
  setToLogin,
  setToEnterEmail,
  setToNewPass,
  setIsSign,
  setFirst,
  setLast,
  setCompany,
  setEmail,
  setPass,
  setConfirmPass,
  setInvitationCode,
  setNewPass,
  setRepeatPass,
  setRememberMe,
  setMailCheck,
  setPassSaved,
  clearAll,
} = authSlice.actions;
export const authSel = (state) => state.auth;

export default authSlice.reducer;
