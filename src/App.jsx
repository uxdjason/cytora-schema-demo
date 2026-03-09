import { useState } from 'react'
import { mockDatabase } from './mockData'
import './App.css'

function App() {
  const [selectedSchema, setSelectedSchema] = useState(null)
  const [activeTab, setActiveTab] = useState('File Types')

  // 우측 점 3개 아이콘 (Kebab menu)
  const KebabMenu = () => <span className="kebab-menu">⋮</span>

  const renderSchemaList = () => (
    <div className="content-section">
      <div className="section-header">
        <div>
          <h2>Digitizers / Schemas</h2>
          <p className="subtitle">Digitizer Schemas are used to define expected file types and fields to be extracted from them. Start by adding file types, select from our predefined file types or add your own. Then define the fields you want to extract...</p>
        </div>
        <button className="primary-btn">+ Create Digitizer</button>
      </div>
      
      <div className="table-container">
        <div className="table-header">
          <span className="col-main">DIGITIZER</span>
          <span className="col-date">LAST UPDATED ↓</span>
          <span className="col-action"></span>
        </div>
        {mockDatabase.schemas.map(schema => (
          <div key={schema.id} className="table-row" onClick={() => setSelectedSchema(schema)}>
            <span className="col-main text-blue">{schema.name}</span>
            <span className="col-date text-gray">{schema.lastUpdated}</span>
            <span className="col-action"><KebabMenu /></span>
          </div>
        ))}
      </div>
    </div>
  )

  const renderSchemaDetail = () => {
    const tabs = ['File Types', 'Fields', 'Mappings', 'Advanced', 'Teach', 'Settings']
    
    return (
      <div className="content-section">
        <div className="breadcrumb">
          <span onClick={() => setSelectedSchema(null)} className="back-link">Digitizers / Schemas</span>
          <span className="current-path"> / {selectedSchema.name}</span>
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

        <div className="tab-content">
          {activeTab === 'Fields' && (
            <div className="data-view">
               <div className="tab-header">
                 <p className="tab-desc">Define the Fields you want to capture. Organise the fields into sections to bring related data points together...</p>
                 <button className="secondary-btn">+ Add Field</button>
               </div>
               <div className="table-container no-border">
                 <div className="table-header">
                    <span className="col-check"><input type="checkbox" disabled/></span>
                    <span className="col-name">NAME</span>
                    <span className="col-type">FIELD TYPE</span>
                    <span className="col-desc">DESCRIPTION</span>
                    <span className="col-action"></span>
                 </div>
                 {mockDatabase.fields.filter(f => f.schemaId === selectedSchema.id).map(field => (
                   <div key={field.id} className="table-row default-cursor">
                     <span className="col-check"><input type="checkbox" /></span>
                     <span className="col-name">{field.name}</span>
                     <span className="col-type">{field.type} <span className="chevron">⌄</span></span>
                     <span className="col-desc text-gray">{field.description}</span>
                     <span className="col-action"><KebabMenu /></span>
                   </div>
                 ))}
               </div>
            </div>
          )}
          
          {activeTab === 'File Types' && (
            <div className="data-view">
              <div className="tab-header">
                 <p className="tab-desc">Create your File Types here by defining a file classification system which can have 1, 2 or 3 levels...</p>
                 <div className="action-buttons">
                   <button className="secondary-btn">+ Add Category</button>
                   <button className="secondary-btn">Upload Classification</button>
                 </div>
               </div>
               <div className="table-container no-border">
                 <div className="table-header">
                    <span className="col-check"></span>
                    <span className="col-name">NAME</span>
                    <span className="col-desc">DESCRIPTION</span>
                    <span className="col-action"></span>
                 </div>
                 {mockDatabase.fileTypes.filter(ft => ft.schemaId === selectedSchema.id).map(ft => (
                   <div key={ft.id} className="table-row default-cursor">
                     <span className="col-check"><input type="checkbox" /></span>
                     <span className="col-name text-gray">{ft.name}</span>
                     <span className="col-desc text-gray">{ft.description}</span>
                     <span className="col-action"><button className="outline-btn">Add Sub-Category</button><KebabMenu /></span>
                   </div>
                 ))}
               </div>
            </div>
          )}

          {activeTab === 'Teach' && (
            <div className="data-view">
              <div className="tab-header">
                 <p className="tab-desc">Add files and begin reviewing. We recommend you use emails with attachments...</p>
                 <button className="secondary-btn">Upload Files <span className="chevron">⌄</span></button> 
              </div>
               <div className="table-container no-border">
                 <div className="table-header">
                    <span className="col-check"><input type="checkbox" disabled/></span>
                    <span className="col-job">JOB NAME</span>
                    <span className="col-date">CREATED AT</span>
                    <span className="col-date">LAST UPDATED AT</span>
                    <span className="col-status">STATUS</span>
                    <span className="col-output">OUTPUT</span>
                    <span className="col-action"></span>
                 </div>
                 {mockDatabase.teachJobs.filter(job => job.schemaId === selectedSchema.id).map(job => (
                   <div key={job.id} className="table-row default-cursor">
                     <span className="col-check"><input type="checkbox" /></span>
                     <span className="col-job text-blue">{job.jobName}</span>
                     <span className="col-date text-gray">{job.createdAt}</span>
                     <span className="col-date text-gray">{job.createdAt}</span>
                     <span className="col-status"><span className="status-dot">■</span> Finished</span>
                     <span className="col-output"><span className={`badge ${job.output.toLowerCase()}`}>{job.output}</span></span>
                     <span className="col-action"><button className="outline-btn">Review</button><KebabMenu /></span>
                   </div>
                 ))}
               </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="app-layout">
      {/* 최상단 네비게이션 */}
      <nav className="top-nav">
        <div className="nav-left">
          <div className="logo">Cytora</div>
          <div className="nav-links">
            <span>Submissions</span>
            <span className="active">Digitize</span>
            <span>Files</span>
            <span>Analytics</span>
          </div>
          <span className="demo-disclaimer">Disclaimer: This is a technical mockup built for an interview, not the real Cytora platform.</span>
        </div>
        <div className="nav-right">
          <div className="search-bar">
            <input type="text" placeholder="Search for submissions" />
            <span className="search-icon">🔍</span>
          </div>
          <div className="user-profile">
            <span>Cytora Showhome</span>
            <div className="avatar">JA</div>
          </div>
        </div>
      </nav>

      <div className="main-body">
        {/* 좌측 사이드바 */}
        <aside className="sidebar">
          <div className="sidebar-header">
            <h3>Digitize</h3>
            <span className="hamburger">≡</span>
          </div>
          <div className="menu-group">
            <h4 className="collapsible active">⌃ Configuration</h4>
            <ul>
              <li className="active">📄 Digitizers</li>
            </ul>
          </div>
          <div className="menu-group">
            <h4 className="collapsible">⌄ Production</h4>
          </div>
          <div className="menu-group">
            <h4 className="collapsible">⌄ Human Review</h4>
          </div>
        </aside>

        {/* 메인 콘텐츠 영역 */}
        <main className="main-content">
          {selectedSchema ? renderSchemaDetail() : renderSchemaList()}
        </main>
      </div>
    </div>
  )
}

export default App