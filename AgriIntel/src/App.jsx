import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import AppLayout from './layouts/AppLayout'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Visits from './pages/Visits'
import VisitDetails from './pages/VisitDetails'
import AddVisit from './pages/AddVisit'
import Farmers from './pages/Farmers'
import FarmerProfile from './pages/FarmerProfile'
import Dealers from './pages/Dealers'
import Villages from './pages/Villages'
import FollowUps from './pages/FollowUps'
import Products from './pages/Products'
import Analytics from './pages/Analytics'
import Settings from './pages/Settings'
import Profile from './pages/Profile'

function ProtectedRoute({ children }) {
  const { user } = useAuth()
  if (!user) return <Navigate to="/login" replace />
  return children
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="visits" element={<Visits />} />
        <Route path="visits/add" element={<AddVisit />} />
        <Route path="visits/:id" element={<VisitDetails />} />
        <Route path="farmers" element={<Farmers />} />
        <Route path="farmers/:id" element={<FarmerProfile />} />
        <Route path="dealers" element={<Dealers />} />
        <Route path="villages" element={<Villages />} />
        <Route path="follow-ups" element={<FollowUps />} />
        <Route path="products" element={<Products />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
