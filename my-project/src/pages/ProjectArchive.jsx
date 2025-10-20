import { useState } from 'react'
import './ProjectArchive.css'

const ProjectArchive = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('all')
  const [selectedYear, setSelectedYear] = useState('all')
  const [sortBy, setSortBy] = useState('recent')

  const departments = [
    'Computer Science',
    'Information Systems',
    'Software Engineering',
    'Data Science',
    'Cybersecurity',
    'Web Development'
  ]

  const years = ['2024', '2023', '2022', '2021', '2020']

  const projects = [
    {
      id: 1,
      title: 'Web-Based Voting System',
      department: 'Information Systems',
      year: '2024',
      supervisor: 'Dr. Sarah Johnson',
      group: 'Team Alpha',
      abstract: 'A secure and user-friendly web application for conducting online elections with real-time vote counting and result visualization.',
      tags: ['Web Development', 'React', 'Node.js', 'MongoDB'],
      downloads: 45,
      rating: 4.8,
      files: ['project-report.pdf', 'source-code.zip', 'presentation.pptx']
    },
    {
      id: 2,
      title: 'AI-Powered Student Performance Predictor',
      department: 'Computer Science',
      year: '2024',
      supervisor: 'Prof. Michael Chen',
      group: 'Data Science Squad',
      abstract: 'Machine learning model that predicts student performance using academic history and engagement metrics.',
      tags: ['Machine Learning', 'Python', 'TensorFlow', 'Data Analysis'],
      downloads: 78,
      rating: 4.9,
      files: ['research-paper.pdf', 'notebooks.zip', 'dataset.csv']
    },
    {
      id: 3,
      title: 'Campus Navigation Mobile App',
      department: 'Software Engineering',
      year: '2023',
      supervisor: 'Dr. Emily Rodriguez',
      group: 'Mobile Masters',
      abstract: 'Cross-platform mobile application for campus navigation with AR features and real-time updates.',
      tags: ['Mobile Development', 'Flutter', 'AR', 'Firebase'],
      downloads: 92,
      rating: 4.7,
      files: ['app-demo.mp4', 'source-code.zip', 'documentation.pdf']
    },
    {
      id: 4,
      title: 'Blockchain-Based Certificate Verification',
      department: 'Computer Science',
      year: '2023',
      supervisor: 'Prof. David Kim',
      group: 'Blockchain Builders',
      abstract: 'Decentralized system for verifying academic certificates using blockchain technology.',
      tags: ['Blockchain', 'Solidity', 'Web3', 'Smart Contracts'],
      downloads: 34,
      rating: 4.6,
      files: ['whitepaper.pdf', 'contracts.zip', 'demo-video.mp4']
    }
  ]

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.abstract.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesDepartment = selectedDepartment === 'all' || project.department === selectedDepartment
    const matchesYear = selectedYear === 'all' || project.year === selectedYear
    return matchesSearch && matchesDepartment && matchesYear
  })

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (sortBy) {
      case 'recent':
        return b.year - a.year
      case 'downloads':
        return b.downloads - a.downloads
      case 'rating':
        return b.rating - a.rating
      case 'title':
        return a.title.localeCompare(b.title)
      default:
        return 0
    }
  })

  return (
    <div className="project-archive">
      <div className="container">
        <div className="archive-header">
          <h1>Project & Research Archive</h1>
          <p>Explore past student projects, research papers, and academic work</p>
        </div>

        <div className="archive-filters">
          <div className="search-section">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search projects, papers, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <span className="search-icon">🔍</span>
            </div>
          </div>

          <div className="filter-section">
            <div className="filter-group">
              <label>Department:</label>
              <select 
                value={selectedDepartment} 
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="filter-select"
              >
                <option value="all">All Departments</option>
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Year:</label>
              <select 
                value={selectedYear} 
                onChange={(e) => setSelectedYear(e.target.value)}
                className="filter-select"
              >
                <option value="all">All Years</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Sort by:</label>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="filter-select"
              >
                <option value="recent">Most Recent</option>
                <option value="downloads">Most Downloaded</option>
                <option value="rating">Highest Rated</option>
                <option value="title">Title A-Z</option>
              </select>
            </div>
          </div>
        </div>

        <div className="projects-grid">
          {sortedProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-meta">
                  <span className="department">{project.department}</span>
                  <span className="year">{project.year}</span>
                </div>
              </div>

              <div className="project-details">
                <div className="supervisor">
                  <strong>Supervisor:</strong> {project.supervisor}
                </div>
                <div className="group">
                  <strong>Group:</strong> {project.group}
                </div>
              </div>

              <p className="project-abstract">{project.abstract}</p>

              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              <div className="project-stats">
                <div className="stat">
                  <span className="stat-icon">📥</span>
                  <span className="stat-value">{project.downloads}</span>
                  <span className="stat-label">Downloads</span>
                </div>
                <div className="stat">
                  <span className="stat-icon">⭐</span>
                  <span className="stat-value">{project.rating}</span>
                  <span className="stat-label">Rating</span>
                </div>
              </div>

              <div className="project-files">
                <h4>Available Files:</h4>
                <div className="files-list">
                  {project.files.map(file => (
                    <div key={file} className="file-item">
                      <span className="file-icon">📄</span>
                      <span className="file-name">{file}</span>
                      <button className="download-btn">Download</button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="project-actions">
                <button className="btn btn-primary">View Details</button>
                <button className="btn btn-secondary">Download All</button>
              </div>
            </div>
          ))}
        </div>

        {sortedProjects.length === 0 && (
          <div className="no-results">
            <h3>No projects found</h3>
            <p>Try adjusting your search criteria or filters</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectArchive
