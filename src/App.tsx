import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Layout from './components/Layout/Layout';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import CoachDashboard from './components/Dashboard/CoachDashboard';
import ClientDashboard from './components/Dashboard/ClientDashboard';
import Clients from './pages/Clients';
import ClientStore from './pages/ClientStore';
import FreePassManager from './pages/FreePassManager';
import SessionBooking from './pages/client/SessionBooking';
import MyProgress from './pages/client/MyProgress';
import ResourceCenter from './pages/client/ResourceCenter';
import MyAchievements from './pages/client/MyAchievements';
import ChatWithCoach from './pages/client/ChatWithCoach';
import SupportCenter from './pages/client/SupportCenter';
import CoachClients from './pages/coach/CoachClients';
import CoachSchedule from './pages/coach/CoachSchedule';
import ClientProgress from './pages/coach/ClientProgress';
import CoachResources from './pages/coach/CoachResources';
import EarningsReport from './pages/coach/EarningsReport';
import CoachSettings from './pages/coach/CoachSettings';
import Login from './components/Auth/Login';

const AppRoutes: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return <Login />;
  }

  return (
    <Layout>
      <Routes>
        {/* Admin/Team Routes */}
        {(user.role === 'admin' || user.role === 'team') && (
          <>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/free-passes" element={<FreePassManager />} />
            <Route path="/coaches" element={<div>Coaches Management</div>} />
            <Route path="/scheduling" element={<div>Scheduling Panel</div>} />
            <Route path="/invoices" element={<div>Invoice Management</div>} />
            <Route path="/communications" element={<div>Communications</div>} />
            <Route path="/reports" element={<div>Reports</div>} />
            <Route path="/milestones" element={<div>Milestone Management</div>} />
            <Route path="/settings" element={<div>Settings</div>} />
          </>
        )}

        {/* Coach Routes */}
        {user.role === 'coach' && (
          <>
            <Route path="/coach" element={<CoachDashboard />} />
            <Route path="/coach/clients" element={<CoachClients />} />
            <Route path="/coach/schedule" element={<CoachSchedule />} />
            <Route path="/coach/progress" element={<ClientProgress />} />
            <Route path="/coach/resources" element={<CoachResources />} />
            <Route path="/coach/earnings" element={<EarningsReport />} />
            <Route path="/coach/settings" element={<CoachSettings />} />
            <Route path="/" element={<Navigate to="/coach" replace />} />
          </>
        )}

        {/* Client Routes */}
        {user.role === 'client' && (
          <>
            <Route path="/client" element={<ClientDashboard />} />
            <Route path="/client/booking" element={<SessionBooking />} />
            <Route path="/client/progress" element={<MyProgress />} />
            <Route path="/client/resources" element={<ResourceCenter />} />
            <Route path="/client/store" element={<ClientStore />} />
            <Route path="/client/achievements" element={<MyAchievements />} />
            <Route path="/client/chat" element={<ChatWithCoach />} />
            <Route path="/client/support" element={<SupportCenter />} />
            <Route path="/" element={<Navigate to="/client" replace />} />
          </>
        )}

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <AppRoutes />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;