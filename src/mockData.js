export const mockDatabase = {
    // 스크린샷 1: Digitizers / Schemas 리스트
    schemas: [
      { id: "s1", name: "Cyber Insurance", lastUpdated: "01/30/2025 - 12:11 pm" },
      { id: "s2", name: "Commercial Property Insurance", lastUpdated: "01/30/2025 - 12:10 pm" },
      { id: "s3", name: "Equipment Breakdown Insurance", lastUpdated: "01/30/2025 - 12:11 pm" }
    ],
  
    // 스크린샷 2: File Types (Cyber Insurance 스키마에 속한 파일 타입들)
    fileTypes: [
      { id: "ft1", schemaId: "s1", name: "Email", description: "An email, irrespective of its content" },
      { id: "ft2", schemaId: "s1", name: "Application Form", description: "An application form for insurance coverage" },
      { id: "ft3", schemaId: "s1", name: "Statement of values", description: "Statement of values listing the assets of the insured" }
    ],
  
    // 스크린샷 3: Fields (Cyber Insurance 스키마에서 추출할 데이터 필드들)
    fields: [
      { id: "f1", schemaId: "s1", name: "ApplyCriticalPatches", type: "Text", description: "Does the applicant apply critical and high severity patches within 30 days?" },
      { id: "f2", schemaId: "s1", name: "Business activity", type: "Text", description: "The business activity or business operations or industry of the insured" },
      { id: "f3", schemaId: "s1", name: "Number of employees", type: "Dropdown", description: "The number of employees of the insured" },
      { id: "f4", schemaId: "s1", name: "Backup & Recovery Frequency", type: "True/False", description: "Back up and recovery is once or more every 10 days" }
    ],
  
    // 스크린샷 4: Teach (학습/리뷰 작업 리스트)
    teachJobs: [
      { id: "job1", schemaId: "s1", jobName: "New business_Yale Electronics, quote by 05_07.eml", createdAt: "01/30/2025 - 3:50 pm", status: "Finished", output: "Ready" },
      { id: "job2", schemaId: "s1", jobName: "New business_Yale Electronics, quote by 05_07.eml", createdAt: "01/30/2025 - 1:26 pm", status: "Finished", output: "Confirmed" }
    ]
  };