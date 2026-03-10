export const mockDatabase = {
  // 스크린샷 1: Digitizers / Schemas 리스트
  schemas: [
    { id: "s1", name: "Cyber Insurance", lastUpdated: "01/30/2025 - 12:11 pm" },
    { id: "s2", name: "Commercial Property Insurance", lastUpdated: "01/30/2025 - 12:10 pm" },
    { id: "s3", name: "Equipment Breakdown Insurance", lastUpdated: "01/30/2025 - 12:09 pm" },
    { id: "s4", name: "Warehouse Insurance", lastUpdated: "01/30/2025 - 12:08 pm" },
    { id: "s5", name: "Inland Marine Insurance", lastUpdated: "01/30/2025 - 12:07 pm" },
    { id: "s6", name: "Business Owners Policy", lastUpdated: "01/30/2025 - 12:06 pm" },
    { id: "s7", name: "Landlord Insurance", lastUpdated: "01/30/2025 - 12:05 pm" },
    { id: "s8", name: "Management & Professional Liability", lastUpdated: "01/30/2025 - 12:04 pm" },
    { id: "s9", name: "Tool Cover", lastUpdated: "01/30/2025 - 12:03 pm" },
    { id: "s10", name: "Directors & Officers Insurance", lastUpdated: "01/30/2025 - 12:02 pm" },
    { id: "s11", name: "Crime Coverage", lastUpdated: "01/30/2025 - 12:01 pm" },
    { id: "s12", name: "Marine Insurance", lastUpdated: "01/30/2025 - 12:00 pm" },
    { id: "s13", name: "Business Interruption", lastUpdated: "01/30/2025 - 11:59 pm" },
    { id: "s14", name: "Contents Insurance", lastUpdated: "01/30/2025 - 11:58 pm" },
    { id: "s15", name: "Professional Indemnity", lastUpdated: "01/30/2025 - 1:57 pm" },
    { id: "s16", name: "Public Liability", lastUpdated: "01/30/2025 - 11:56 pm" },
    { id: "s17", name: "Product Liability", lastUpdated: "01/30/2025 - 11:55 pm" },
    { id: "s18", name: "Workers Compensation", lastUpdated: "01/30/2025 - 11:54 pm" },
    { id: "s19", name: "Business Fraud", lastUpdated: "01/30/2025 - 11:53 pm" },
    { id: "s20", name: "General Liability", lastUpdated: "01/30/2025 - 11:52 pm" }
  ],

  // 스크린샷 2: File Types 
  fileTypes: [
    { id: "ft1", schemaId: "s1", name: "Email", description: "An email, irrespective of its content" },
    { id: "ft2", schemaId: "s1", name: "Application Form", description: "An application form for insurance coverage" },
    { id: "ft3", schemaId: "s1", name: "Statement of values", description: "Statement of values listing the assets of the insured" },
    { id: "ft4", schemaId: "s1", name: "Other", description: "Other" },
    { id: "ft5", schemaId: "s1", name: "Loss History", description: "Loss history of the insured" },
    { id: "ft6", schemaId: "s1", name: "Supplemental", description: "Supplemental application" },

    { id: "ft7", schemaId: "s2", name: "Email", description: "An email, irrespective of its content" },
    { id: "ft8", schemaId: "s2", name: "Application Form", description: "An application form for insurance coverage" },
    { id: "ft9", schemaId: "s2", name: "Statement of values", description: "Statement of values listing the assets of the insured" },
    { id: "ft10", schemaId: "s2", name: "Other", description: "Other" },
    { id: "ft11", schemaId: "s2", name: "Loss History", description: "Loss history of the insured" },
    { id: "ft12", schemaId: "s2", name: "Supplemental", description: "Supplemental application" },

    { id: "ft13", schemaId: "s3", name: "Email", description: "An email, irrespective of its content" },
    { id: "ft14", schemaId: "s3", name: "Application Form", description: "An application form for insurance coverage" },
    { id: "ft15", schemaId: "s3", name: "Supplemental", description: "Supplemental application" },

    { id: "ft16", schemaId: "s4", name: "Email", description: "An email, irrespective of its content" },
    { id: "ft17", schemaId: "s4", name: "Supplemental", description: "Supplemental application" },
    { id: "ft18", schemaId: "s4", name: "Application Form", description: "An application form for insurance coverage" },
    { id: "ft19", schemaId: "s4", name: "Statement of values", description: "Statement of values listing the assets of the insured" },
    { id: "ft20", schemaId: "s4", name: "Other", description: "Other" },
    { id: "ft21", schemaId: "s4", name: "Loss History", description: "Loss history of the insured" },
    { id: "ft22", schemaId: "s4", name: "Letter", description: "Paper-based correspondence" },

    { id: "ft23", schemaId: "s5", name: "Email", description: "An email, irrespective of its content" },
    { id: "ft24", schemaId: "s5", name: "Application Form", description: "An application form for insurance coverage" }
  ],

  // 스크린샷 3: Fields (모든 항목에 subFields 적용)
  fields: [
    // --- Schema s1 (Cyber Insurance) ---
    { id: "f1", schemaId: "s1", name: "ApplyCriticalPatches", type: "Composite", description: "Does the applicant apply critical and high severity patches within 30 days?", subFields: [
      { id: "f1-1", name: "Patching SLA", type: "Dropdown", description: "Standard timeframe for critical patches" },
      { id: "f1-2", name: "Evidence Provided", type: "True/False", description: "Is documentation attached?" }
    ]},
    { id: "f2", schemaId: "s1", name: "Business activity", type: "Composite", description: "The business activity or operations of the insured", subFields: [
      { id: "f2-1", name: "Primary SIC Code", type: "Text", description: "Standard Industrial Classification Code" },
      { id: "f2-2", name: "Secondary Industry", type: "Text", description: "Any secondary operations" }
    ]},
    { id: "f3", schemaId: "s1", name: "Number of employees", type: "Composite", description: "The number of employees of the insured", subFields: [
      { id: "f3-1", name: "Full-Time (FTE)", type: "Text", description: "Number of full-time employees" },
      { id: "f3-2", name: "Part-Time/Contractors", type: "Text", description: "Number of part-time or contract workers" }
    ]},
    { id: "f4", schemaId: "s1", name: "MFAForRemoteAccess", type: "Composite", description: "Does the insured require MFA for remote access", subFields: [
      { id: "f4-1", name: "MFA Provider", type: "Dropdown", description: "Vendor (e.g., Okta, Duo, MS Authenticator)" },
      { id: "f4-2", name: "Enforcement Scope", type: "Dropdown", description: "All users, Admins only, or Partial" }
    ]},
    { id: "f5", schemaId: "s1", name: "Insured Address", type: "Composite", description: "The complete address of the insured entity", subFields: [
      { id: "f5-1", name: "Street Address", type: "Text", description: "Street and building number" },
      { id: "f5-2", name: "City", type: "Text", description: "City or town" },
      { id: "f5-3", name: "State/Province", type: "Text", description: "State or regional province" },
      { id: "f5-4", name: "ZIP/Postal Code", type: "Text", description: "Postal routing code" }
    ]},
    { id: "f6", schemaId: "s1", name: "Broker name", type: "Composite", description: "The details of the broker handling the account", subFields: [
      { id: "f6-1", name: "Title", type: "Dropdown", description: "Mr, Mrs, Ms, Dr, etc." },
      { id: "f6-2", name: "Given Name", type: "Text", description: "First name of the broker" },
      { id: "f6-3", name: "Surname", type: "Text", description: "Last name of the broker" }
    ]},
    { id: "f7", schemaId: "s1", name: "ISO Certification", type: "Composite", description: "Does the insured have ISO certification", subFields: [
      { id: "f7-1", name: "Certification Type", type: "Text", description: "e.g., ISO 27001, ISO 9001" },
      { id: "f7-2", name: "Valid Until", type: "Text", description: "Expiration date of the certificate" }
    ]},
    { id: "f8", schemaId: "s1", name: "The size of the IT team", type: "Composite", description: "The size of the IT team of the insured", subFields: [
      { id: "f8-1", name: "Internal Staff", type: "Text", description: "In-house IT head count" },
      { id: "f8-2", name: "Outsourced (MSP)", type: "True/False", description: "Do they use Managed Service Providers?" }
    ]},
    { id: "f9", schemaId: "s1", name: "Insured Name", type: "Composite", description: "The name of the insured", subFields: [
      { id: "f9-1", name: "Legal Entity Name", type: "Text", description: "Official registered company name" },
      { id: "f9-2", name: "Trading As (DBA)", type: "Text", description: "Doing Business As / Brand Name" }
    ]},
    { id: "f10", schemaId: "s1", name: "Backup & Recovery Frequency", type: "Composite", description: "Back up and recovery is once or more every 10 days", subFields: [
      { id: "f10-1", name: "Backup Type", type: "Dropdown", description: "Cloud, On-premise, or Hybrid" },
      { id: "f10-2", name: "Tested Annually", type: "True/False", description: "Are backups tested at least once a year?" }
    ]},
    { id: "f11", schemaId: "s1", name: "Broker Location", type: "Composite", description: "Broker address details", subFields: [
      { id: "f11-1", name: "Region", type: "Dropdown", description: "North America, EMEA, APAC" },
      { id: "f11-2", name: "Branch Office", type: "Text", description: "Specific branch identifier" }
    ]},

    // --- Schema s2 (Commercial Property Insurance) ---
    { id: "f12", schemaId: "s2", name: "Number of employees", type: "Composite", description: "The number of employees of the insured", subFields: [
      { id: "f12-1", name: "On-site Employees", type: "Text", description: "Number of employees at this property" },
      { id: "f12-2", name: "Total Company Employees", type: "Text", description: "Total employees globally" }
    ]},
    { id: "f13", schemaId: "s2", name: "MFAForRemoteAccess", type: "Composite", description: "Does the insured require MFA for remote access", subFields: [
      { id: "f13-1", name: "Hardware Token", type: "True/False", description: "Use of physical hardware tokens" },
      { id: "f13-2", name: "Software App", type: "True/False", description: "Use of authenticator apps" }
    ]},
    { id: "f14", schemaId: "s2", name: "Insured Address", type: "Composite", description: "The address of the insured property", subFields: [
      { id: "f14-1", name: "Building Name", type: "Text", description: "Name of the building if applicable" },
      { id: "f14-2", name: "Street Address", type: "Text", description: "Street and building number" },
      { id: "f14-3", name: "City", type: "Text", description: "City or town" },
      { id: "f14-4", name: "Country", type: "Dropdown", description: "Country of operation" }
    ]},
    { id: "f15", schemaId: "s2", name: "Broker name", type: "Composite", description: "The name of the broker", subFields: [
      { id: "f15-1", name: "First Name", type: "Text", description: "Broker's first name" },
      { id: "f15-2", name: "Last Name", type: "Text", description: "Broker's last name" }
    ]},
    { id: "f16", schemaId: "s2", name: "ISO Certification", type: "Composite", description: "Does the insured have ISO certification", subFields: [
      { id: "f16-1", name: "ISO 14001", type: "True/False", description: "Environmental Management Certification" },
      { id: "f16-2", name: "ISO 45001", type: "True/False", description: "Occupational Health and Safety" }
    ]},
    { id: "f17", schemaId: "s2", name: "The size of the IT team", type: "Composite", description: "The size of the IT team of the insured", subFields: [
      { id: "f17-1", name: "On-site IT Support", type: "Text", description: "Number of IT staff at the property" },
      { id: "f17-2", name: "Remote IT Support", type: "Text", description: "Number of remote IT staff" }
    ]},
    { id: "f18", schemaId: "s2", name: "Insured Name", type: "Composite", description: "The name of the insured", subFields: [
      { id: "f18-1", name: "Parent Company", type: "Text", description: "Name of the parent organization" },
      { id: "f18-2", name: "Subsidiary", type: "Text", description: "Name of the operating subsidiary" }
    ]},
    { id: "f19", schemaId: "s2", name: "Backup & Recovery Frequency", type: "Composite", description: "Back up and recovery is once or more every 10 days", subFields: [
      { id: "f19-1", name: "Off-site Backup", type: "True/False", description: "Are backups stored in a secondary physical location?" },
      { id: "f19-2", name: "Frequency", type: "Dropdown", description: "Daily, Weekly, Monthly" }
    ]},
    { id: "f20", schemaId: "s2", name: "Broker Location", type: "Composite", description: "Broker address is in North America", subFields: [
      { id: "f20-1", name: "State", type: "Text", description: "State where broker is licensed" },
      { id: "f20-2", name: "License Number", type: "Text", description: "Broker's operating license ID" }
    ]},

    // --- Schema s3 (Equipment Breakdown Insurance) ---
    { id: "f21", schemaId: "s3", name: "Broker name", type: "Composite", description: "The name of the broker", subFields: [
      { id: "f21-1", name: "Agency Name", type: "Text", description: "Name of the brokerage firm" },
      { id: "f21-2", name: "Agent Name", type: "Text", description: "Specific agent handling the account" }
    ]},
    { id: "f22", schemaId: "s3", name: "ISO Certification", type: "Composite", description: "Does the insured have ISO certification", subFields: [
      { id: "f22-1", name: "Certification Status", type: "Dropdown", description: "Active, Expired, In Progress" },
      { id: "f22-2", name: "Audit Date", type: "Text", description: "Date of the last external audit" }
    ]},
    { id: "f23", schemaId: "s3", name: "The size of the IT team", type: "Composite", description: "The size of the IT team of the insured", subFields: [
      { id: "f23-1", name: "Engineers", type: "Text", description: "Number of hardware/systems engineers" },
      { id: "f23-2", name: "Technicians", type: "Text", description: "Number of maintenance technicians" }
    ]},
    { id: "f24", schemaId: "s3", name: "ApplyCriticalPatches", type: "Composite", description: "Does the applicant apply critical and high severity patches within 30 days?", subFields: [
      { id: "f24-1", name: "ICS/OT Systems", type: "True/False", description: "Does patching cover Industrial Control Systems?" },
      { id: "f24-2", name: "Downtime Required", type: "True/False", description: "Do patches require equipment shutdown?" }
    ]},
    { id: "f25", schemaId: "s3", name: "Business activity", type: "Composite", description: "The business activity or business operations or industry of the insured", subFields: [
      { id: "f25-1", name: "Manufacturing Type", type: "Dropdown", description: "Heavy, Light, Assembly, etc." },
      { id: "f25-2", name: "Operating Hours", type: "Dropdown", description: "24/7, 12h shifts, 8h shifts" }
    ]},
    { id: "f26", schemaId: "s3", name: "Insured Name", type: "Composite", description: "The name of the insured", subFields: [
      { id: "f26-1", name: "Facility Name", type: "Text", description: "Name of the specific plant/facility" },
      { id: "f26-2", name: "Corporate Owner", type: "Text", description: "Holding company name" }
    ]},
    { id: "f27", schemaId: "s3", name: "Backup & Recovery Frequency", type: "Composite", description: "Back up and recovery is once or more every 10 days", subFields: [
      { id: "f27-1", name: "SCADA Backup", type: "True/False", description: "Are SCADA configurations backed up?" },
      { id: "f27-2", name: "Generator Availability", type: "True/False", description: "Is there emergency backup power?" }
    ]},
    { id: "f28", schemaId: "s3", name: "Broker Location", type: "Composite", description: "Broker address is in North America", subFields: [
      { id: "f28-1", name: "City", type: "Text", description: "Broker's operating city" },
      { id: "f28-2", name: "Zip Code", type: "Text", description: "Postal code" }
    ]},

    // --- Schema s4 (Warehouse Insurance) ---
    { id: "f29", schemaId: "s4", name: "MFAForRemoteAccess", type: "Composite", description: "Does the insured require MFA for remote access", subFields: [
      { id: "f29-1", name: "Inventory Systems MFA", type: "True/False", description: "Is MFA required for WMS access?" },
      { id: "f29-2", name: "VPN Access", type: "True/False", description: "MFA on VPN gateways?" }
    ]},
    { id: "f30", schemaId: "s4", name: "Insured Address", type: "Composite", description: "The address of the insured", subFields: [
      { id: "f30-1", name: "Warehouse Number", type: "Text", description: "Internal ID of the warehouse" },
      { id: "f30-2", name: "Zone/District", type: "Text", description: "Industrial zone designation" },
      { id: "f30-3", name: "Full Address", type: "Text", description: "Complete address string" }
    ]},
    { id: "f31", schemaId: "s4", name: "Broker name", type: "Composite", description: "The name of the broker", subFields: [
      { id: "f31-1", name: "Brokerage Group", type: "Text", description: "Parent brokerage network" },
      { id: "f31-2", name: "Contact Person", type: "Text", description: "Direct contact full name" }
    ]},
    { id: "f32", schemaId: "s4", name: "ISO Certification", type: "Composite", description: "Does the insured have ISO certification", subFields: [
      { id: "f32-1", name: "ISO 28000", type: "True/False", description: "Supply Chain Security Management" },
      { id: "f32-2", name: "Date Awarded", type: "Text", description: "Initial date of certification" }
    ]},
    { id: "f33", schemaId: "s4", name: "The size of the IT team", type: "Composite", description: "The size of the IT team of the insured", subFields: [
      { id: "f33-1", name: "Logistics IT Staff", type: "Text", description: "Staff dedicated to logistics software" },
      { id: "f33-2", name: "Network Admins", type: "Text", description: "Staff managing warehouse Wi-Fi/networks" }
    ]},
    { id: "f34", schemaId: "s4", name: "Insured Name", type: "Composite", description: "The name of the insured", subFields: [
      { id: "f34-1", name: "Logistics Company Name", type: "Text", description: "Official name of the logistics provider" },
      { id: "f34-2", name: "Tax ID / EIN", type: "Text", description: "Employer Identification Number" }
    ]},

    // --- Schema s5 (Inland Marine Insurance) ---
    { id: "f35", schemaId: "s5", name: "ISO Certification", type: "Composite", description: "Does the insured have ISO certification", subFields: [
      { id: "f35-1", name: "Quality Management", type: "True/False", description: "ISO 9001 certified?" },
      { id: "f35-2", name: "Risk Management", type: "True/False", description: "ISO 31000 aligned?" }
    ]},
    { id: "f36", schemaId: "s5", name: "The size of the IT team", type: "Composite", description: "The size of the IT team of the insured", subFields: [
      { id: "f36-1", name: "Telematics Specialists", type: "Text", description: "Staff handling fleet tracking systems" },
      { id: "f36-2", name: "General Support", type: "Text", description: "Standard IT support count" }
    ]},
    { id: "f37", schemaId: "s5", name: "Insured Name", type: "Composite", description: "The name of the insured", subFields: [
      { id: "f37-1", name: "Carrier Name", type: "Text", description: "Name of the transport carrier" },
      { id: "f37-2", name: "DOT Number", type: "Text", description: "Department of Transportation ID" }
    ]}
  ],

  // 스크린샷 4: Teach (학습/리뷰 작업 리스트)
  teachJobs: [
    { id: "job1", schemaId: "s1", jobName: "New business_Yale Electronics, quote by 05_07.eml", createdAt: "01/30/2025 - 3:50 pm", status: "Finished", output: "Ready" },
    { id: "job2", schemaId: "s1", jobName: "New business_Yale Electronics, quote by 05_06.eml", createdAt: "01/30/2025 - 1:26 pm", status: "Finished", output: "Confirmed" },

    { id: "job3", schemaId: "s2", jobName: "quote by 05_06.eml", createdAt: "01/30/2026 - 5:26 pm", status: "Finished", output: "Ready" },
    { id: "job4", schemaId: "s2", jobName: "example job by 05_07.eml", createdAt: "01/30/2026 - 2:50 pm", status: "Finished", output: "Ready" },

    { id: "job5", schemaId: "s3", jobName: "New business_Yale Electronics, quote by 05_07.eml", createdAt: "01/30/2023 - 1:11 pm", status: "Finished", output: "Confirmed" },

    { id: "job6", schemaId: "s4", jobName: "New example job, quote by 03_07.eml", createdAt: "01/30/2025 - 1:38 pm", status: "Finished", output: "Ready" },
    { id: "job7", schemaId: "s4", jobName: "New example job, quote by 03_05.eml", createdAt: "02/15/2025 - 2:36 pm", status: "Finished", output: "Confirmed" },
    { id: "job8", schemaId: "s4", jobName: "New example job, quote by 03_03.eml", createdAt: "03/22/2025 - 4:12 pm", status: "Finished", output: "Confirmed" },
    { id: "job9", schemaId: "s4", jobName: "New example job, quote by 03_01.eml", createdAt: "04/29/2025 - 7:05 pm", status: "Finished", output: "Ready" },

    { id: "job10", schemaId: "s5", jobName: "New business_Yale Electronics, quote by 05_07.eml", createdAt: "01/30/2025 - 3:50 pm", status: "Finished", output: "Ready" }
  ]
};