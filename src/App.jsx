import AuthPage from 'pages/auth/AuthPage';
import NotFoundPage from 'pages/notFound/NotFoundPage';
import { useEffect } from 'react';
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import ExpListPage from 'pages/expList/ExpListPage';
import SettingsPage from 'pages/settings/SettingsPage';
import TreatResPage from 'pages/treatRes/TreatResPage';
import CreateExpPage from 'pages/createExp/CreateExpPage';
import ExpPage from 'pages/exp/ExpPage';
import { useTheme } from 'hooks/useTheme';
import { useDispatch, useSelector } from 'react-redux';
import { authSel, getUserInfo } from 'store/slices/auth/authSlice';
// import { getCSRF } from 'store/slices/auth/authSlice';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { theme, element } = useTheme();
  const { isSign } = useSelector(authSel);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    if (location.pathname.includes('/register')) {
      element.classList.add('dark');
    }
  }, [theme, location]);

  useEffect(() => {
    !isSign && dispatch(getUserInfo());
  }, []);

  // useEffect(() => {
  //   dispatch(getCSRF());
  // }, []);

  return (
    <div className="site-container">
      <Routes>
        {/* {isSign ? (
          <>
            <Route path="/" element={<Navigate to="/experiments" />} />
            <Route index path="/experiments" element={<ExpListPage />} />
            <Route path="/experiments/create" element={<CreateExpPage />} />
            <Route path="/experiments/:uId" element={<ExpPage />} />
            <Route path="/treatmentResults/:uId" element={<TreatResPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<AuthPage />} />
            <Route path="/register" element={<AuthPage />} />
            <Route path="/auth/resetPassword" element={<AuthPage />} />
            <Route
              path="/auth/resetPassword/:userEmail"
              element={<AuthPage />}
            />
          </>
        )} */}

        <Route path="/" element={<Navigate to="/experiments" />} />
        <Route index path="/experiments" element={<ExpListPage />} />
        <Route path="/experiments/create" element={<CreateExpPage />} />
        <Route path="/experiments/:uId" element={<ExpPage />} />
        <Route path="/experiments/:expId/:treatResId" element={<TreatResPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/register" element={<AuthPage />} />
        <Route path="/auth/resetPassword" element={<AuthPage />} />
        <Route path="/auth/resetPassword/:userEmail" element={<AuthPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Analytics />
    </div>
  );
}

export default App;
