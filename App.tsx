
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from './constants';

// Layout
import MainLayout from './components/layout/MainLayout';

// Pages (Lazy loading for better initial load time)
const HomePage = React.lazy(() => import('/pages/HomePage.tsx'));
const ReportViolationPage = React.lazy(() => import('/pages/ReportViolationPage.tsx'));
const KamoteMapPage = React.lazy(() => import('/pages/KamoteMapPage.tsx'));
const MissionsPage = React.lazy(() => import('/pages/MissionsPage.tsx'));
const LeaderboardPage = React.lazy(() => import('/pages/LeaderboardPage.tsx'));
const ProfilePage = React.lazy(() => import('/pages/ProfilePage.tsx'));
const ModerationPage = React.lazy(() => import('/pages/ModerationPage.tsx'));
const LguDashboardPage = React.lazy(() => import('/pages/LguDashboardPage.tsx'));
const ViolationNotificationSearchPage = React.lazy(() => import('/pages/ViolationNotificationSearchPage.tsx'));
const PrivacyPolicyPage = React.lazy(() => import('/pages/PrivacyPolicyPage.tsx'));
const RulesAndTransparencyPage = React.lazy(() => import('/pages/RulesAndTransparencyPage.tsx'));

// Contexts
import { UserProvider } from './contexts/UserContext'; // Assuming UserContext provides user data and CiviPoints

const LoadingFallback: React.FC = () => (
  <div className="flex items-center justify-center h-screen bg-background">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
    <p className="ml-4 text-xl font-semibold text-primary">Loading CiviLenz...</p>
  </div>
);

const App: React.FC = () => {
  return (
    <UserProvider> {/* Provides user state, including CiviPoints and level */}
      <React.Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.REPORT_VIOLATION} element={<ReportViolationPage />} />
            <Route path={ROUTES.KAMOTE_MAP} element={<KamoteMapPage />} />
            {/* ParkSmart can be a section within KamoteMap or its own page */}
            {/* <Route path={ROUTES.PARK_SMART} element={<ParkSmartPage />} /> */}
            <Route path={ROUTES.MISSIONS} element={<MissionsPage />} />
            <Route path={ROUTES.LEADERBOARD} element={<LeaderboardPage />} />
            <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
            <Route path={ROUTES.MODERATION} element={<ModerationPage />} /> {/* Protected Route */}
            <Route path={ROUTES.LGU_DASHBOARD} element={<LguDashboardPage />} /> {/* Protected Route */}
            <Route path={ROUTES.VIOLATION_NOTIFICATION} element={<ViolationNotificationSearchPage />} />
            <Route path={ROUTES.PRIVACY_POLICY} element={<PrivacyPolicyPage />} />
            <Route path={ROUTES.RULES} element={<RulesAndTransparencyPage />} />
            <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
          </Route>
          {/* Add login/auth routes if needed, outside MainLayout */}
          {/* <Route path={ROUTES.LOGIN} element={<LoginPage />} /> */}
        </Routes>
      </React.Suspense>
    </UserProvider>
  );
};

export default App;