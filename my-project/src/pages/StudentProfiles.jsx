import { useState } from 'react'
import './StudentProfiles.css'

const StudentProfiles = () => {
  const [activeTab, setActiveTab] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const tabs = [
    { id: 'all', label: 'All Students', count: 24 },
    { id: 'mentors', label: 'Mentors', count: 8 },
    { id: 'freshmen', label: 'Freshmen', count: 12 },
    { id: 'seniors', label: 'Seniors', count: 4 }
  ]

  const students = [
    {
      id: 1,
      name: 'Sarah Johnson',
      year: 'Senior',
      department: 'Computer Science',
      isMentor: true,
      skills: ['React', 'Node.js', 'Machine Learning'],
      projects: 5,
      rating: 4.9,
      avatar: '👩‍💻',
      bio: 'Passionate about web development and AI. Love helping others learn!',
      achievements: ['Dean\'s List', 'Hackathon Winner', 'Research Assistant']
    },
    {
      id: 2,
      name: 'Mike Chen',
      year: 'Junior',
      department: 'Information Systems',
      isMentor: true,
      skills: ['Python', 'Data Analysis', 'Database Design'],
      projects: 3,
      rating: 4.7,
      avatar: '👨‍💻',
      bio: 'Data science enthusiast with 2 years of industry experience.',
      achievements: ['Data Science Certificate', 'Internship at Tech Corp']
    },
    {
      id: 3,
      name: 'Emma Wilson',
      year: 'Freshman',
      department: 'Software Engineering',
      isMentor: false,
      skills: ['JavaScript', 'HTML/CSS'],
      projects: 1,
      rating: 4.2,
      avatar: '👩‍🎓',
      bio: 'Excited to learn and grow in the tech field!',
      achievements: ['High School Valedictorian']
    },
    {
      id: 4,
      name: 'Alex Rodriguez',
      year: 'Senior',
      department: 'Computer Science',
      isMentor: true,
      skills: ['Mobile Development', 'Flutter', 'UI/UX'],
      projects: 7,
      rating: 4.8,
      avatar: '👨‍🎨',
      bio: 'Mobile app developer and UI/UX designer. Always ready to help!',
      achievements: ['App Store Featured', 'Design Award Winner']
    }
  ]

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    
    if (activeTab === 'mentors') return student.isMentor && matchesSearch
    if (activeTab === 'freshmen') return student.year === 'Freshman' && matchesSearch
    if (activeTab === 'seniors') return student.year === 'Senior' && matchesSearch
    return matchesSearch
  })

  return (
    <div className="student-profiles">
      <div className="profiles-container">
        <div className="profiles-header">
          <h1>Student Profiles</h1>
          <p>Connect with mentors and discover student achievements</p>
        </div>

        <div className="profiles-content">
          <div className="profiles-sidebar">
            <div className="search-section">
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Search students, skills, departments..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
                <span className="search-icon">🔍</span>
              </div>
            </div>

            <div className="tabs-section">
              <h3>Filter by</h3>
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="tab-label">{tab.label}</span>
                  <span className="tab-count">{tab.count}</span>
                </button>
              ))}
            </div>

            <div className="stats-section">
              <h3>Platform Stats</h3>
              <div className="stat-item">
                <span className="stat-number">24</span>
                <span className="stat-label">Total Students</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">8</span>
                <span className="stat-label">Active Mentors</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">156</span>
                <span className="stat-label">Connections Made</span>
              </div>
            </div>
          </div>

          <div className="profiles-main">
            <div className="profiles-grid">
              {filteredStudents.map(student => (
                <div key={student.id} className="student-card">
                  <div className="student-header">
                    <div className="student-avatar">{student.avatar}</div>
                    <div className="student-info">
                      <h3 className="student-name">{student.name}</h3>
                      <p className="student-year-dept">{student.year} • {student.department}</p>
                      {student.isMentor && <span className="mentor-badge">Mentor</span>}
                    </div>
                    <div className="student-rating">
                      <span className="rating-stars">⭐</span>
                      <span className="rating-value">{student.rating}</span>
                    </div>
                  </div>

                  <p className="student-bio">{student.bio}</p>

                  <div className="student-skills">
                    <h4>Skills:</h4>
                    <div className="skills-list">
                      {student.skills.map(skill => (
                        <span key={skill} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>

                  <div className="student-achievements">
                    <h4>Achievements:</h4>
                    <ul className="achievements-list">
                      {student.achievements.map((achievement, index) => (
                        <li key={index} className="achievement-item">🏆 {achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="student-stats">
                    <div className="stat">
                      <span className="stat-icon">📁</span>
                      <span className="stat-value">{student.projects}</span>
                      <span className="stat-label">Projects</span>
                    </div>
                    <div className="stat">
                      <span className="stat-icon">⭐</span>
                      <span className="stat-value">{student.rating}</span>
                      <span className="stat-label">Rating</span>
                    </div>
                  </div>

                  <div className="student-actions">
                    <button className="btn btn-primary">View Profile</button>
                    <button className="btn btn-secondary">Connect</button>
                  </div>
                </div>
              ))}
            </div>

            {filteredStudents.length === 0 && (
              <div className="no-results">
                <h3>No students found</h3>
                <p>Try adjusting your search criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentProfiles
