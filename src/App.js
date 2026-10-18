import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import MainLayout from './components/common/MainLayout';
import DashboardPage from './pages/DashboardPage';
import FarmersPage from './pages/FarmersPage';
import ReceiptsPage from './pages/ReceiptsPage';
import QualityCheckPage from './pages/QualityCheckPage';
import StoragePage from './pages/StoragePage';
import PaymentsPage from './pages/PaymentsPage';
import ReportsPage from './pages/ReportsPage';
import UsersPage from './pages/UsersPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import './styles/global.css';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<MainLayout />}>
              <Route index element={<DashboardPage />} />
              <Route path="farmers" element={<FarmersPage />} />
              <Route path="receipts" element={<ReceiptsPage />} />
              <Route path="quality" element={<QualityCheckPage />} />
              <Route path="storage" element={<StoragePage />} />
              <Route path="payments" element={<PaymentsPage />} />
              <Route path="reports" element={<ReportsPage />} />
              <Route path="users" element={<UsersPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;