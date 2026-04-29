import LegalDocument from '../components/LegalDocument.jsx'
import {
  clinicName,
  programName,
  supportContactPlaceholder,
} from '../content/legalContent.js'

const sections = [
  {
    heading: 'Information We Collect',
    content: (
      <p>
        We collect personal information such as name, phone number, and basic patient details
        to provide appointment-related communication and patient information verification
        services.
      </p>
    ),
  },
  {
    heading: 'How We Use Information',
    content: (
      <>
        <p>This information is used solely for:</p>
        <ul className="list-disc space-y-2 pl-6 marker:text-cyan-700">
          <li>Appointment reminders</li>
          <li>Patient information verification</li>
          <li>Communication related to healthcare services</li>
        </ul>
      </>
    ),
  },
  {
    heading: 'No Marketing Data Sharing',
    content: (
      <p>
        We do not sell, rent, or share personal information with third parties for marketing or
        promotional purposes.
      </p>
    ),
  },
  {
    heading: 'SMS Opt-In and Consent',
    content: (
      <p>
        All the above categories exclude text messaging originator opt-in data and consent; this
        information will not be shared with any third parties.
      </p>
    ),
  },
  {
    heading: 'Service Providers',
    content: (
      <p>
        We may use service providers to support our operations; however, they are contractually
        obligated to protect your data and use it only for service-related purposes.
      </p>
    ),
  },
  {
    heading: 'Questions',
    content: (
      <p>
        If you have any questions, please contact us at <strong>{supportContactPlaceholder}</strong>.
      </p>
    ),
  },
]

function PrivacyPolicyPage() {
  return (
    <LegalDocument
      title={`Privacy Policy - ${programName}`}
      subtitle={`This policy explains how ${clinicName} handles information for SMS appointment and patient verification communications.`}
      sections={sections}
    />
  )
}

export default PrivacyPolicyPage
