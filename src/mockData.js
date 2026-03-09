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
  
    // 스크린샷 2: File Types (Cyber Insurance 스키마에 속한 파일 타입들)
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
  
    // 스크린샷 3: Fields (Cyber Insurance 스키마에서 추출할 데이터 필드들)
    fields: [
      { id: "f1", schemaId: "s1", name: "ApplyCriticalPatches", type: "Text", description: "Does the applicant apply critical and high severity patches within 30 days?" },
      { id: "f2", schemaId: "s1", name: "Business activity", type: "Text", description: "The business activity or business operations or industry of the insured" },
      { id: "f3", schemaId: "s1", name: "Number of employees", type: "Dropdown", description: "The number of employees of the insured" },
      { id: "f4", schemaId: "s1", name: "MFAForRemoteAccess", type: "Text", description: "Does the insured require MFA for remote access" },
      { id: "f5", schemaId: "s1", name: "Insured Address", type: "Text", description: "The address of the insured" },
      { id: "f6", schemaId: "s1", name: "Broker name", type: "Text", description: "The name of the broker" },
      { id: "f7", schemaId: "s1", name: "ISO Certification", type: "Text", description: "Does the insured have ISO certification" },
      { id: "f8", schemaId: "s1", name: "The size of the IT team", type: "Text", description: "The size of the IT team of the insured" },
      { id: "f9", schemaId: "s1", name: "Insured Name", type: "Text", description: "The name of the insured" },
      { id: "f10", schemaId: "s1", name: "Backup & Recovery Frequency", type: "True/False", description: "Back up and recovery is once or more every 10 days" },
      { id: "f11", schemaId: "s1", name: "Broker Location", type: "True/False", description: "Broker address is in North America" },

      { id: "f12", schemaId: "s2", name: "Number of employees", type: "Dropdown", description: "The number of employees of the insured" },
      { id: "f13", schemaId: "s2", name: "MFAForRemoteAccess", type: "Text", description: "Does the insured require MFA for remote access" },
      { id: "f14", schemaId: "s2", name: "Insured Address", type: "Text", description: "The address of the insured" },
      { id: "f15", schemaId: "s2", name: "Broker name", type: "Text", description: "The name of the broker" },
      { id: "f16", schemaId: "s2", name: "ISO Certification", type: "Text", description: "Does the insured have ISO certification" },
      { id: "f17", schemaId: "s2", name: "The size of the IT team", type: "Text", description: "The size of the IT team of the insured" },
      { id: "f18", schemaId: "s2", name: "Insured Name", type: "Text", description: "The name of the insured" },
      { id: "f19", schemaId: "s2", name: "Backup & Recovery Frequency", type: "True/False", description: "Back up and recovery is once or more every 10 days" },
      { id: "f20", schemaId: "s2", name: "Broker Location", type: "True/False", description: "Broker address is in North America" },

      { id: "f21", schemaId: "s3", name: "Broker name", type: "Text", description: "The name of the broker" },
      { id: "f22", schemaId: "s3", name: "ISO Certification", type: "Text", description: "Does the insured have ISO certification" },
      { id: "f23", schemaId: "s3", name: "The size of the IT team", type: "Text", description: "The size of the IT team of the insured" },
      { id: "f24", schemaId: "s3", name: "ApplyCriticalPatches", type: "Text", description: "Does the applicant apply critical and high severity patches within 30 days?" },
      { id: "f25", schemaId: "s3", name: "Business activity", type: "Text", description: "The business activity or business operations or industry of the insured" },
      { id: "f26", schemaId: "s3", name: "Insured Name", type: "Text", description: "The name of the insured" },
      { id: "f27", schemaId: "s3", name: "Backup & Recovery Frequency", type: "True/False", description: "Back up and recovery is once or more every 10 days" },
      { id: "f28", schemaId: "s3", name: "Broker Location", type: "True/False", description: "Broker address is in North America" },

      { id: "f29", schemaId: "s4", name: "MFAForRemoteAccess", type: "Text", description: "Does the insured require MFA for remote access" },
      { id: "f30", schemaId: "s4", name: "Insured Address", type: "Text", description: "The address of the insured" },
      { id: "f31", schemaId: "s4", name: "Broker name", type: "Text", description: "The name of the broker" },
      { id: "f32", schemaId: "s4", name: "ISO Certification", type: "Text", description: "Does the insured have ISO certification" },
      { id: "f33", schemaId: "s4", name: "The size of the IT team", type: "Text", description: "The size of the IT team of the insured" },
      { id: "f34", schemaId: "s4", name: "Insured Name", type: "Text", description: "The name of the insured" },

      { id: "f35", schemaId: "s5", name: "ISO Certification", type: "Text", description: "Does the insured have ISO certification" },
      { id: "f36", schemaId: "s5", name: "The size of the IT team", type: "Text", description: "The size of the IT team of the insured" },
      { id: "f37", schemaId: "s5", name: "Insured Name", type: "Text", description: "The name of the insured" }
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