export const SUBMIT_ENDPOINT = '';

export const serviceOptions = [
  'Bookkeeping',
  'BAS / GST',
  'Payroll',
  'Accounts payable',
  'Accounts receivable',
  'Reconciliations',
  'Reporting',
  'Advisory',
  'Other',
];

export const urgencyOptions = [
  'Not sure / happy to cover this in the meeting',
  'No rush',
  'Within a few months',
  'Soon as practical',
];

export const documentationOptions = [
  'Not sure / happy to cover this in the meeting',
  'Mostly documented',
  'Some',
  "Mostly in people's heads",
];

export const shareExamplesOptions = [
  'Yes',
  'Some',
  'Prefer to walk through at kick-off',
  'Not sure / happy to cover this in the meeting',
];

export const systemWalkthroughOptions = [
  'Email platform',
  'Calendar',
  'Accounting software',
  'Document storage',
  'Client records / CRM',
  'Tasks / project management',
  'Forms / client intake tools',
  'Reporting tools',
  'Payroll system',
  'Other',
];

export const systemFields = [
  ['emailPlatform', 'Email platform', 'e.g. Outlook, Gmail'],
  ['calendar', 'Calendar', 'e.g. Outlook Calendar, Google Calendar'],
  ['accountingSoftware', 'Accounting software', 'e.g. Xero, MYOB, QuickBooks'],
  ['documentStorage', 'Document storage', 'e.g. SharePoint, Google Drive, Dropbox, OneDrive'],
  ['clientRecords', 'Client records / CRM', 'Where client details and notes live'],
  ['taskManagement', 'Tasks / project management', 'e.g. Trello, Asana, spreadsheets'],
  ['intakeTools', 'Forms / client intake tools', 'Any tools used to collect details from clients'],
  ['reportingTools', 'Reporting tools', 'Dashboards, spreadsheets or reporting apps'],
  ['payrollSystem', 'Payroll system', 'If separate from accounting software'],
  ['clientContact', 'How clients usually contact you', 'Phone, email, SMS, portal, etc.'],
];

export const workflowFields = [
  ['emailManagement', 'Email management', 'How email is handled, rough volume, and who responds.'],
  ['clientOnboarding', 'Client onboarding', 'How a new client gets set up.'],
  ['monthlyCycle', 'Core bookkeeping tasks / monthly cycle', 'The usual recurring bookkeeping rhythm.'],
  ['documentCollection', 'Document and information collection', 'How clients send information and documents.'],
  ['clientQueries', 'Handling client queries and requests', 'How requests come in and get resolved.'],
  ['internalAdmin', 'Internal admin tasks', 'Recurring admin that keeps the business moving.'],
  ['basCompliance', 'BAS / compliance cycles', 'What happens around BAS, GST and EOFY.'],
  ['handoverPoints', 'Handover points between people', 'Where work moves from one person to another.'],
];

export const initialFormData = {
  business: {
    businessName: 'ABC Bookkeeping WA',
    contactName: 'Alma',
    role: '',
    email: '',
    phone: '',
    website: 'abcbookkeepingwa.com.au',
    location: '',
    yearsInOperation: '',
    teamSize: '',
    services: [],
    servicesOther: '',
    clientTypes: '',
    seasonality: '',
  },
  goals: {
    clarify: '',
    goodOutcome: '',
    frustrations: '',
    automationTargets: '',
    successMeasures: '',
    urgency: '',
  },
  systems: {
    emailPlatform: '',
    calendar: '',
    accountingSoftware: '',
    documentStorage: '',
    clientRecords: '',
    taskManagement: '',
    intakeTools: '',
    reportingTools: '',
    payrollSystem: '',
    clientContact: '',
    manualMovement: '',
    existingAutomations: '',
  },
  processes: Object.fromEntries(
    workflowFields.map(([key]) => [
      key,
      {
        description: '',
        frequency: '',
        timeRequired: '',
      },
    ]),
  ),
  painPoints: {
    manualWork: '',
    duplication: '',
    inconsistentWork: '',
    keyPersonReliance: '',
    busyPeriodStress: '',
    oneThing: '',
  },
  people: {
    teamMembers: [{ name: '', role: '' }],
    dayToDayWork: '',
    approvals: '',
    processOwners: '',
    discoveryContacts: '',
    singlePointFailure: '',
  },
  knowledge: {
    sopStatus: '',
    sopLocation: '',
    templatesLocation: '',
    checklistsFaqs: '',
    clientInstructions: '',
    shareExamples: '',
  },
  access: {
    walkthroughSystems: [],
    walkthroughSystemsOther: '',
    accessApprover: '',
    securityConsiderations: '',
    availability: '',
  },
};
