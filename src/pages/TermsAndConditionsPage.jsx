import { Link } from 'react-router'
import LegalDocument from '../components/LegalDocument.jsx'
import {
  clinicName,
  programName,
  supportContactPlaceholder,
} from '../content/legalContent.js'

const sections = [
  {
    heading: 'Agreement',
    content: (
      <p>
        By opting in to receive SMS messages from {clinicName}, you agree to receive
        transactional messages related to appointment reminders and patient information
        verification.
      </p>
    ),
  },
  {
    heading: 'Program Name',
    content: <p>{programName}</p>,
  },
  {
    heading: 'Program Description',
    content: (
      <p>
        This program sends SMS messages to patients for appointment-related communication and
        verification of patient information.
      </p>
    ),
  },
  {
    heading: 'Message Frequency',
    content: <p>Message frequency varies based on appointments and patient interaction.</p>,
  },
  {
    heading: 'Message and Data Rates',
    content: (
      <p>
        Message and data rates may apply depending on your mobile carrier plan.
      </p>
    ),
  },
  {
    heading: 'Customer Support',
    content: (
      <p>
        For assistance, reply{' '}
        <span className="inline-flex rounded-md border border-cyan-200 bg-cyan-50 px-2 py-0.5 text-sm font-semibold text-cyan-900">
          HELP
        </span>{' '}
        or contact us at <strong>{supportContactPlaceholder}</strong>.
      </p>
    ),
  },
  {
    heading: 'Opt-Out Instructions',
    content: (
      <p>
        You can opt out of receiving messages at any time by replying{' '}
        <span className="inline-flex rounded-md border border-rose-200 bg-rose-50 px-2 py-0.5 text-sm font-semibold text-rose-900">
          STOP
        </span>
        .
      </p>
    ),
  },
  {
    heading: 'Privacy Policy',
    content: (
      <p>
        <Link
          className="font-semibold text-cyan-800 underline decoration-cyan-300 transition hover:text-cyan-950"
          to="/privacy-policy"
        >
          View Privacy Policy
        </Link>
      </p>
    ),
  },
  {
    heading: 'Disclaimer',
    content: <p>Carriers are not liable for any delayed or undelivered messages.</p>,
  },
]

function TermsAndConditionsPage() {
  return (
    <LegalDocument
      title={`Terms and Conditions - ${programName}`}
      subtitle={`These terms govern participation in SMS communications from ${clinicName}.`}
      sections={sections}
    />
  )
}

export default TermsAndConditionsPage
