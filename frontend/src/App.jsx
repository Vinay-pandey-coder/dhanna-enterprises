import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import UserProtectedRoute from './components/UserProtectedRoute'
import TopBar from './components/layout/TopBar'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Payment from './pages/Payment'
import Contact from './pages/Contact'
import GoogleForm from './pages/GoogleForm'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Refund from './pages/Refund'
import Register from './pages/Register'
import Login from './pages/Login'
import AdminLogin from './pages/admin/AdminLogin'
import AdminDashboard from './pages/admin/AdminDashboard'

// Service pages
import Gst from './pages/services/Gst'
import Itr from './pages/services/Itr'
import Accounting from './pages/services/Accounting'
import Audit from './pages/services/Audit'
import Msme from './pages/services/Msme'
import Fssai from './pages/services/Fssai'
import Iec from './pages/services/Iec'
import BusinessRegistration from './pages/services/BusinessRegistration'
import Trademark from './pages/services/Trademark'
import Dsc from './pages/services/Dsc'
import PanTan from './pages/services/PanTan'
import Tds from './pages/services/Tds'

function Layout({ children }) {
  return (
    <>
      <TopBar />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Admin — no layout */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={
          <ProtectedRoute><AdminDashboard /></ProtectedRoute>
        } />

        {/* Public routes */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/privacy" element={<Layout><Privacy /></Layout>} />
        <Route path="/terms" element={<Layout><Terms /></Layout>} />
        <Route path="/refund-policy" element={<Layout><Refund /></Layout>} />
        <Route path="/register" element={<Layout><Register /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />

        {/* Service detail pages */}
        <Route path="/services/gst" element={<Layout><Gst /></Layout>} />
        <Route path="/services/itr" element={<Layout><Itr /></Layout>} />
        <Route path="/services/accounting" element={<Layout><Accounting /></Layout>} />
        <Route path="/services/audit" element={<Layout><Audit /></Layout>} />
        <Route path="/services/msme" element={<Layout><Msme /></Layout>} />
        <Route path="/services/fssai" element={<Layout><Fssai /></Layout>} />
        <Route path="/services/iec" element={<Layout><Iec /></Layout>} />
        <Route path="/services/business-registration" element={<Layout><BusinessRegistration /></Layout>} />
        <Route path="/services/trademark" element={<Layout><Trademark /></Layout>} />
        <Route path="/services/dsc" element={<Layout><Dsc /></Layout>} />
        <Route path="/services/pan-tan" element={<Layout><PanTan /></Layout>} />
        <Route path="/services/tds" element={<Layout><Tds /></Layout>} />

        {/* Login ke baad dikhne wale pages */}
        <Route path="/payment" element={
          <UserProtectedRoute>
            <Layout><Payment /></Layout>
          </UserProtectedRoute>
        } />
        <Route path="/google-form" element={
          <UserProtectedRoute>
            <Layout><GoogleForm /></Layout>
          </UserProtectedRoute>
        } />
      </Routes>
    </AuthProvider>
  )
}