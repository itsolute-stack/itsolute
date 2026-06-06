export const softwareCopy = {
  hero: {
    eyebrow: 'SOFTWARE',
    headline: 'Software licensing, set up properly.',
    sub: 'Microsoft 365, Google Workspace, Zoho One, Tally. Authorised reseller, proper licensing, full implementation — not just a key emailed to you.',
    primaryCta: 'Talk to us',
    secondaryCta: 'WhatsApp us',
  },
  features: {
    eyebrow: 'WHAT WE LICENSE',
    headline: 'The platforms Kerala SMBs actually run on.',
    items: [
      {
        title: 'Microsoft 365',
        startingFrom: 'Starting at standard Business plans',
        body: 'Email on your own domain, Teams, OneDrive, full Office suite. We migrate from Gmail, GoDaddy, or anything legacy.',
        features: ['Business Basic / Standard / Premium', 'Email migration', 'Teams rollout', 'User training'],
      },
      {
        title: 'Google Workspace',
        startingFrom: 'Starting at Business Starter',
        body: 'Gmail on your domain, Drive, Meet, Calendar. We set up sharing, security, and proper admin policies.',
        features: ['Domain setup & DNS', 'Account migration', 'Drive & sharing policies', 'Admin training'],
      },
      {
        title: 'Zoho One',
        startingFrom: 'Single license, 40+ apps',
        body: 'CRM, books, inventory, projects, HR — one suite, one login. Implementation done right makes Zoho one of the highest-ROI tools an SMB can buy.',
        features: ['CRM implementation', 'Books & invoicing', 'Custom workflows', 'Staff training'],
      },
    ],
  },
  implementation: {
    eyebrow: 'IMPLEMENTATION',
    headline: 'Licensing is the easy part. Implementation is what we do.',
    body: 'Setting up software properly means thinking about user accounts, permissions, security, data migration, training, and integration with what you already use. We handle all of it — and document it so you’re not stuck if we ever stop working together.',
  },
  migration: {
    eyebrow: 'MIGRATIONS',
    headline: 'Move off legacy without losing anything.',
    points: [
      'Tally to cloud-based accounting (Zoho Books, others).',
      'Self-hosted or POP3 email to Microsoft 365 or Google Workspace.',
      'On-prem file servers to OneDrive, Google Drive, or Zoho WorkDrive.',
      'Spreadsheet-based ops to a real CRM and inventory system.',
    ],
  },
  finalCta: {
    headline: 'Licensing should be the start, not the whole project.',
    sub: 'Talk to us about what you need. We’ll recommend a stack, license it properly, and make it work end-to-end.',
    primary: 'Talk to us',
    secondary: 'WhatsApp us',
  },
} as const
