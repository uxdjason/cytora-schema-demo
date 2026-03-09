import { useState } from 'react'
import { mockDatabase } from './mockData'
import './App.css'

function App() {
  // 상태 관리: 선택된 스키마(없으면 전체 리스트), 선택된 탭
  const [selectedSchema, setSelectedSchema] = useState(null)
  const [activeTab, setActiveTab] = useState('Fields')

  // 전체 스키마 리스트 화면 (스크린샷 1)
  const renderSchemaList = () => (
    <div className="content-section">
      <h2>Digitizers / Schemas</h2>
      <p className="subtitle">Digitizer Schemas are used to define expected file types and fields...</p>
      <div className="table-container">
        <div className="table-header">
          <span>DIGITIZER</span>
          <span>LAST UPDATED ↓</span>
        </div>
        {mockDatabase.schemas.map(schema => (
          <div key={schema.id} className="table-row" onClick={() => setSelectedSchema(schema)}>
            <span className="text-blue">{schema.name}</span>
            <span>{schema.lastUpdated}</span>
          </div>
        ))}
      </div>
    </div>
  )

  // 특정 스키마 상세 화면 (스크린샷 2, 3, 4)
  const renderSchemaDetail = () => {
    const tabs = ['File Types', 'Fields', 'Mappings', 'Advanced', 'Teach', 'Settings']
    
    return (
      <div className="content-section">
        <div className="breadcrumb">
          <span onClick={() => setSelectedSchema(null)} className="back-link">Digitizers / Schemas</span>
          <span> / {selectedSchema.name}</span>
        </div>
        
        <div className="tabs">
          {tabs.map(tab => (
            <button 
              key={tab} 
              className={`tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 탭 내용 렌더링 */}
        <div className="tab-content">
          {activeTab === 'Fields' && (
            <div className="table-container">
               <div className="table-header">
                  <span>NAME</span>
                  <span>FIELD TYPE</span>
                  <span>DESCRIPTION</span>
               </div>
               {mockDatabase.fields.filter(f => f.schemaId === selectedSchema.id).map(field => (
                 <div key={field.id} className="table-row">
                   <span>{field.name}</span>
                   <span>{field.type}</span>
                   <span>{field.description}</span>
                 </div>
               ))}
            </div>
          )}
          
          {activeTab === 'File Types' && (
            <div className="table-container">
               <div className="table-header">
                  <span>NAME</span>
                  <span>DESCRIPTION</span>
               </div>
               {mockDatabase.fileTypes.filter(ft => ft.schemaId === selectedSchema.id).map(ft => (
                 <div key={ft.id} className="table-row">
                   <span>{ft.name}</span>
                   <span>{ft.description}</span>
                 </div>
               ))}
            </div>
          )}

          {activeTab === 'Teach' && (
            <div className="table-container">
               <div className="table-header">
                  <span>JOB NAME</span>
                  <span>CREATED AT</span>
                  <span>STATUS</span>
                  <span>OUTPUT</span>
               </div>
               {mockDatabase.teachJobs.filter(job => job.schemaId === selectedSchema.id).map(job => (
                 <div key={job.id} className="table-row">
                   <span className="text-blue">{job.jobName}</span>
                   <span>{job.createdAt}</span>
                   <span><span className="status-badge">{job.status}</span></span>
                   <span>{job.output}</span>
                 </div>
               ))}
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="app-layout">
      {/* 상단 네비게이션 */}
      <nav className="top-nav">
        <div className="logo">Cytora Demo</div>
        <div className="nav-links">
          <span>Submissions</span>
          <span className="active">Digitize</span>
          <span>Files</span>
          <span>Analytics</span>
        </div>
      </nav>

      <div className="main-body">
        {/* 좌측 사이드바 */}
        <aside className="sidebar">
          <div className="menu-group">
            <h3>Configuration</h3>
            <ul>
              <li className="active">Digitizers</li>
            </ul>
          </div>
          <div className="menu-group">
            <h3>Production</h3>
          </div>
          <div className="menu-group">
            <h3>Human Review</h3>
          </div>
        </aside>

        {/* 메인 콘텐츠 영역 (조건부 렌더링) */}
        <main className="main-content">
          {selectedSchema ? renderSchemaDetail() : renderSchemaList()}
        </main>
      </div>
    </div>
  )
}

export default App