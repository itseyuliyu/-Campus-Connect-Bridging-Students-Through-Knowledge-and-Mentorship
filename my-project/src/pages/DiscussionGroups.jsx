import { useState } from 'react'
import './DiscussionGroups.css'

const DiscussionGroups = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'all', label: 'All Groups', count: 12 },
    { id: 'tech', label: 'Technology', count: 5 },
    { id: 'academic', label: 'Academic', count: 4 },
    { id: 'career', label: 'Career', count: 3 }
  ]

  const groups = [
    {
      id: 1,
      name: 'AI & Data Science Club',
      category: 'tech',
      description: 'Exploring artificial intelligence, machine learning, and data science together',
      members: 156,
      posts: 89,
      lastActivity: '2 hours ago',
      tags: ['AI', 'Machine Learning', 'Data Science'],
      isJoined: true,
      icon: '🤖'
    },
    {
      id: 2,
      name: 'Web Dev Enthusiasts',
      category: 'tech',
      description: 'Frontend and backend development discussions, project sharing, and code reviews',
      members: 234,
      posts: 156,
      lastActivity: '1 hour ago',
      tags: ['Web Development', 'React', 'Node.js'],
      isJoined: true,
      icon: '💻'
    },
    {
      id: 3,
      name: 'Research Writers Group',
      category: 'academic',
      description: 'Supporting each other in academic writing, research methodology, and publication',
      members: 89,
      posts: 45,
      lastActivity: '4 hours ago',
      tags: ['Research', 'Writing', 'Academic'],
      isJoined: false,
      icon: '📝'
    },
    {
      id: 4,
      name: 'Career Development Hub',
      category: 'career',
      description: 'Resume building, interview prep, internship opportunities, and career guidance',
      members: 178,
      posts: 67,
      lastActivity: '3 hours ago',
      tags: ['Career', 'Internships', 'Jobs'],
      isJoined: false,
      icon: '💼'
    },
    {
      id: 5,
      name: 'Mobile App Developers',
      category: 'tech',
      description: 'iOS, Android, and cross-platform mobile development discussions',
      members: 123,
      posts: 78,
      lastActivity: '6 hours ago',
      tags: ['Mobile', 'iOS', 'Android', 'Flutter'],
      isJoined: true,
      icon: '📱'
    },
    {
      id: 6,
      name: 'Cybersecurity Warriors',
      category: 'tech',
      description: 'Security best practices, ethical hacking, and cybersecurity career paths',
      members: 95,
      posts: 34,
      lastActivity: '1 day ago',
      tags: ['Security', 'Ethical Hacking', 'Cybersecurity'],
      isJoined: false,
      icon: '🔒'
    }
  ]

  const filteredGroups = groups.filter(group => {
    const matchesSearch = group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         group.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         group.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    if (activeCategory === 'all') return matchesSearch
    return group.category === activeCategory && matchesSearch
  })

  const handleJoinGroup = (groupId) => {
    // Here you would typically update the group membership
    console.log('Joining group:', groupId)
  }

  return (
    <div className="discussion-groups">
      <div className="groups-container">
        <div className="groups-header">
          <h1>Discussion Groups</h1>
          <p>Join topic-based communities and discussions</p>
        </div>

        <div className="groups-content">
          <div className="groups-sidebar">
            <div className="search-section">
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Search groups, topics, tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
                <span className="search-icon">🔍</span>
              </div>
            </div>

            <div className="categories-section">
              <h3>Categories</h3>
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <span className="category-label">{category.label}</span>
                  <span className="category-count">{category.count}</span>
                </button>
              ))}
            </div>

            <div className="create-group-section">
              <h3>Create Group</h3>
              <p>Start your own discussion group</p>
              <button className="create-group-btn">Create New Group</button>
            </div>
          </div>

          <div className="groups-main">
            <div className="groups-grid">
              {filteredGroups.map(group => (
                <div key={group.id} className="group-card">
                  <div className="group-header">
                    <div className="group-icon">{group.icon}</div>
                    <div className="group-info">
                      <h3 className="group-name">{group.name}</h3>
                      <div className="group-meta">
                        <span className="group-members">👥 {group.members} members</span>
                        <span className="group-posts">💬 {group.posts} posts</span>
                      </div>
                    </div>
                    <div className="group-status">
                      {group.isJoined ? (
                        <span className="joined-badge">Joined</span>
                      ) : (
                        <button 
                          className="join-btn"
                          onClick={() => handleJoinGroup(group.id)}
                        >
                          Join Group
                        </button>
                      )}
                    </div>
                  </div>

                  <p className="group-description">{group.description}</p>

                  <div className="group-tags">
                    {group.tags.map(tag => (
                      <span key={tag} className="tag">#{tag}</span>
                    ))}
                  </div>

                  <div className="group-footer">
                    <div className="last-activity">
                      <span className="activity-label">Last activity:</span>
                      <span className="activity-time">{group.lastActivity}</span>
                    </div>
                    <div className="group-actions">
                      <button className="btn btn-sm btn-secondary">View Posts</button>
                      {group.isJoined && (
                        <button className="btn btn-sm btn-primary">Start Discussion</button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredGroups.length === 0 && (
              <div className="no-results">
                <h3>No groups found</h3>
                <p>Try adjusting your search criteria or create a new group</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiscussionGroups
