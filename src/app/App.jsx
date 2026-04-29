import { Navigate, Route, Routes } from 'react-router'
import LegalLayout from '../components/LegalLayout.jsx'
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage.jsx'
import TermsAndConditionsPage from '../pages/TermsAndConditionsPage.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LegalLayout />}>
        <Route index element={<Navigate replace to="privacy-policy" />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="terms-and-conditions" element={<TermsAndConditionsPage />} />
      </Route>
      <Route path="*" element={<Navigate replace to="/privacy-policy" />} />
    </Routes>
  )
}

export default App
