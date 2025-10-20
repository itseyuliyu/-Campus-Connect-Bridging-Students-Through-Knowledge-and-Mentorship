import { useState } from 'react'
import './AdminDashboard.css'

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'users', label: 'Users', icon: '👥' },
    { id: 'content', label: 'Content', icon: '📝' },
    { id: 'reports', label: 'Reports', icon: '📈' },
    { id: 'settings', label: 'Settings', icon: '⚙️' }
  ]

  const stats = [
    { label: 'Total Users', value: '1,247', change: '+12%', icon: '👥' },
    { label: 'Active Today', value: '89', change: '+5%', icon: '🟢' },
    { label: 'Questions Posted', value: '156', change: '+23%', icon: '❓' },
    { label: 'Projects Shared', value: '43', change: '+8%', icon: '📁' }
  ]

  const recentUsers = [
    { name: 'Sarah Johnson', email: 'sarah@university.edu', role: 'Student', status: 'Active', joinDate: '2 hours ago' },
    { name: 'Mike Chen', email: 'mike@university.edu', role: 'Mentor', status: 'Active', joinDate: '5 hours ago' },
    { name: 'Emma Wilson', email: 'emma@university.edu', role: 'Student', status: 'Pending', joinDate: '1 day ago' },
    { name: 'Alex Rodriguez', email: 'alex@university.edu', role: 'Admin', status: 'Active', joinDate: '2 days ago' }
  ]

  const pendingContent = [
    { type: 'Question', title: 'How to implement authentication?', author: 'John Doe', submitted: '1 hour ago' },
    { type: 'Project', title: 'E-commerce Website', author: 'Jane Smith', submitted: '3 hours ago' },
    { type: 'Article', title: 'React Best Practices', author: 'Bob Wilson', submitted: '5 hours ago' }
  ]

  const reports = [
    { title: 'User Activity Report', description: 'Daily active users and engagement metrics', date: 'Today' },
    { title: 'Content Moderation Report', description: 'Flagged content and moderation actions', date: 'Yesterday' },
    { title: 'Platform Performance', description: 'System performance and uptime statistics', date: 'This Week' }
  ]

  const renderOverview = () => (
    <div className="overview-content">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-info">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
              <span className={`stat-change ${stat.change.startsWith('+') ? 'positive' : 'negative'}`}>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Recent Users</h3>
          <div className="users-list">
            {recentUsers.map((user, index) => (
              <div key={index} className="user-item">
                <div className="user-info">
                  <h4>{user.name}</h4>
                  <p>{user.email}</p>
                </div>
                <div className="user-meta">
                  <span className={`role-badge ${user.role.toLowerCase()}`}>{user.role}</span>
                  <span className={`status-badge ${user.status.toLowerCase()}`}>{user.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-card">
          <h3>Pending Content</h3>
          <div className="content-list">
            {pendingContent.map((item, index) => (
              <div key={index} className="content-item">
                <div className="content-info">
                  <h4>{item.title}</h4>
                  <p>By {item.author} • {item.submitted}</p>
                </div>
                <div className="content-actions">
                  <button className="btn btn-sm btn-primary">Approve</button>
                  <button className="btn btn-sm btn-secondary">Review</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const renderUsers = () => (
    <div className="users-content">
      <div className="content-header">
        <h2>User Management</h2>
        <div className="header-actions">
          <button className="btn btn-primary">Add User</button>
          <button className="btn btn-secondary">Export Data</button>
        </div>
      </div>
      
      <div className="users-table">
        <div className="table-header">
          <div className="table-cell">Name</div>
          <div className="table-cell">Email</div>
          <div className="table-cell">Role</div>
          <div className="table-cell">Status</div>
          <div className="table-cell">Actions</div>
        </div>
        {recentUsers.map((user, index) => (
          <div key={index} className="table-row">
            <div className="table-cell">{user.name}</div>
            <div className="table-cell">{user.email}</div>
            <div className="table-cell">
              <span className={`role-badge ${user.role.toLowerCase()}`}>{user.role}</span>
            </div>
            <div className="table-cell">
              <span className={`status-badge ${user.status.toLowerCase()}`}>{user.status}</span>
            </div>
            <div className="table-cell">
              <button className="btn btn-sm btn-primary">Edit</button>
              <button className="btn btn-sm btn-danger">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderContent = () => (
    <div className="content-management">
      <div className="content-header">
        <h2>Content Management</h2>
        <div className="content-filters">
          <select className="filter-select">
            <option>All Content</option>
            <option>Questions</option>
            <option>Projects</option>
            <option>Articles</option>
          </select>
          <select className="filter-select">
            <option>All Status</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>
        </div>
      </div>
      
      <div className="content-grid">
        {pendingContent.map((item, index) => (
          <div key={index} className="content-card">
            <div className="content-type">{item.type}</div>
            <h3>{item.title}</h3>
            <p>By {item.author} • {item.submitted}</p>
            <div className="content-actions">
              <button className="btn btn-sm btn-success">Approve</button>
              <button className="btn btn-sm btn-warning">Edit</button>
              <button className="btn btn-sm btn-danger">Reject</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderReports = () => (
    <div className="reports-content">
      <div className="content-header">
        <h2>Reports & Analytics</h2>
        <button className="btn btn-primary">Generate Report</button>
      </div>
      
      <div className="reports-grid">
        {reports.map((report, index) => (
          <div key={index} className="report-card">
            <h3>{report.title}</h3>
            <p>{report.description}</p>
            <div className="report-meta">
              <span className="report-date">{report.date}</span>
              <button className="btn btn-sm btn-primary">View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderSettings = () => (
    <div className="settings-content">
      <div className="content-header">
        <h2>Platform Settings</h2>
      </div>
      
      <div className="settings-sections">
        <div className="settings-section">
          <h3>General Settings</h3>
          <div className="setting-item">
            <label>Platform Name</label>
            <input type="text" defaultValue="Campus Connect" className="setting-input" />
          </div>
          <div className="setting-item">
            <label>Description</label>
            <textarea className="setting-textarea" defaultValue="Bridging Students Through Knowledge and Mentorship"></textarea>
          </div>
        </div>
        
        <div className="settings-section">
          <h3>Moderation Settings</h3>
          <div className="setting-item">
            <label>
              <input type="checkbox" defaultChecked />
              Auto-approve content from verified users
            </label>
          </div>
          <div className="setting-item">
            <label>
              <input type="checkbox" />
              Require admin approval for all posts
            </label>
          </div>
        </div>
      </div>
    </div>
  )

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview': return renderOverview()
      case 'users': return renderUsers()
      case 'content': return renderContent()
      case 'reports': return renderReports()
      case 'settings': return renderSettings()
      default: return renderOverview()
    }
  }

  return (
    <div className="admin-dashboard">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1>Admin Dashboard</h1>
          <p>Manage content and moderate the platform</p>
        </div>

        <div className="dashboard-content">
          <div className="dashboard-sidebar">
            <div className="admin-tabs">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  className={`admin-tab ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="tab-icon">{tab.icon}</span>
                  <span className="tab-label">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="dashboard-main">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
