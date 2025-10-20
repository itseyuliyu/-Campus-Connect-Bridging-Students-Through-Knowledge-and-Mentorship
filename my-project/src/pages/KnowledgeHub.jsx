import { useState } from 'react'
import './KnowledgeHub.css'

const KnowledgeHub = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Articles', icon: '📚' },
    { id: 'tutorials', label: 'Tutorials', icon: '🎓' },
    { id: 'guides', label: 'How-to Guides', icon: '📖' },
    { id: 'challenges', label: 'Coding Challenges', icon: '💻' },
    { id: 'tips', label: 'Study Tips', icon: '💡' }
  ]

  const articles = [
    {
      id: 1,
      title: 'How to Write a Good Research Proposal',
      category: 'guides',
      author: 'Dr. Sarah Johnson',
      readTime: '8 min read',
      difficulty: 'Intermediate',
      rating: 4.8,
      views: 1240,
      excerpt: 'A comprehensive guide on crafting compelling research proposals that get approved and funded.',
      tags: ['Research', 'Writing', 'Academic']
    },
    {
      id: 2,
      title: 'Tips for Final Year Project Defense',
      category: 'tips',
      author: 'Prof. Michael Chen',
      readTime: '6 min read',
      difficulty: 'Beginner',
      rating: 4.9,
      views: 2100,
      excerpt: 'Essential strategies to ace your final year project presentation and defense.',
      tags: ['Presentation', 'Defense', 'Final Year']
    },
    {
      id: 3,
      title: 'React Hooks: Complete Tutorial',
      category: 'tutorials',
      author: 'Alex Rodriguez',
      readTime: '15 min read',
      difficulty: 'Intermediate',
      rating: 4.7,
      views: 890,
      excerpt: 'Master React Hooks with practical examples and real-world use cases.',
      tags: ['React', 'JavaScript', 'Web Development']
    },
    {
      id: 4,
      title: 'Algorithm Challenge: Binary Tree Traversal',
      category: 'challenges',
      author: 'Emma Wilson',
      readTime: '12 min read',
      difficulty: 'Advanced',
      rating: 4.6,
      views: 650,
      excerpt: 'Solve complex binary tree problems with step-by-step solutions and optimizations.',
      tags: ['Algorithms', 'Data Structures', 'Coding']
    }
  ]

  const filteredArticles = activeCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === activeCategory)

  return (
    <div className="knowledge-hub">
      <div className="container">
        <div className="hub-header">
          <h1>Knowledge Hub</h1>
          <p>Learn, grow, and share knowledge with the community</p>
        </div>

        <div className="hub-content">
          <div className="hub-sidebar">
            <div className="category-filters">
              <h3>Categories</h3>
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <span className="category-icon">{category.icon}</span>
                  <span className="category-label">{category.label}</span>
                </button>
              ))}
            </div>

            <div className="contribute-section">
              <h3>Contribute</h3>
              <p>Share your knowledge with the community</p>
              <button className="contribute-btn">Write Article</button>
            </div>
          </div>

          <div className="hub-main">
            <div className="articles-grid">
              {filteredArticles.map(article => (
                <div key={article.id} className="article-card">
                  <div className="article-header">
                    <h3 className="article-title">{article.title}</h3>
                    <div className="article-meta">
                      <span className="author">By {article.author}</span>
                      <span className="read-time">{article.readTime}</span>
                    </div>
                  </div>

                  <p className="article-excerpt">{article.excerpt}</p>

                  <div className="article-tags">
                    {article.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>

                  <div className="article-stats">
                    <div className="stat">
                      <span className="stat-icon">⭐</span>
                      <span className="stat-value">{article.rating}</span>
                    </div>
                    <div className="stat">
                      <span className="stat-icon">👁️</span>
                      <span className="stat-value">{article.views}</span>
                    </div>
                    <div className="stat">
                      <span className="stat-icon">📊</span>
                      <span className="stat-value">{article.difficulty}</span>
                    </div>
                  </div>

                  <div className="article-actions">
                    <button className="btn btn-primary">Read Article</button>
                    <button className="btn btn-secondary">Bookmark</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KnowledgeHub
