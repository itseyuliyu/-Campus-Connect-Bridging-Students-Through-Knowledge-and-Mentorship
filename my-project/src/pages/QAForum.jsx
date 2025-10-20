import { useState } from 'react'
import './QAForum.css'

const QAForum = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [newQuestion, setNewQuestion] = useState('')
  const [showNewQuestionForm, setShowNewQuestionForm] = useState(false)

  const categories = [
    { id: 'all', label: 'All Questions', icon: '📋' },
    { id: 'courses', label: 'Course-related', icon: '📚' },
    { id: 'projects', label: 'Project Ideas', icon: '💡' },
    { id: 'campus', label: 'Campus Life & Clubs', icon: '🏫' },
    { id: 'career', label: 'Internship/Career Tips', icon: '💼' }
  ]

  const questions = [
    {
      id: 1,
      title: 'How do I register for advanced programming courses?',
      category: 'courses',
      author: 'Sarah Johnson',
      year: 'Freshman',
      department: 'Computer Science',
      time: '2 hours ago',
      answers: 3,
      votes: 12,
      tags: ['registration', 'programming', 'courses']
    },
    {
      id: 2,
      title: 'What was last year\'s networking project like?',
      category: 'projects',
      author: 'Mike Chen',
      year: 'Sophomore',
      department: 'Information Systems',
      time: '5 hours ago',
      answers: 1,
      votes: 8,
      tags: ['networking', 'project', 'past-projects']
    },
    {
      id: 3,
      title: 'Best clubs to join for web development enthusiasts?',
      category: 'campus',
      author: 'Alex Rodriguez',
      year: 'Freshman',
      department: 'Computer Science',
      time: '1 day ago',
      answers: 5,
      votes: 15,
      tags: ['clubs', 'web-development', 'campus-life']
    },
    {
      id: 4,
      title: 'How to prepare for software engineering internships?',
      category: 'career',
      author: 'Emma Wilson',
      year: 'Junior',
      department: 'Computer Science',
      time: '2 days ago',
      answers: 7,
      votes: 23,
      tags: ['internship', 'software-engineering', 'career-prep']
    }
  ]

  const filteredQuestions = activeCategory === 'all' 
    ? questions 
    : questions.filter(q => q.category === activeCategory)

  const handleSubmitQuestion = (e) => {
    e.preventDefault()
    if (newQuestion.trim()) {
      // Here you would typically send the question to a backend
      console.log('New question:', newQuestion)
      setNewQuestion('')
      setShowNewQuestionForm(false)
    }
  }

  return (
    <div className="qa-forum">
      <div className="container">
        <div className="forum-header">
          <h1>Q&A Forum & Mentorship</h1>
          <p>Ask questions, share knowledge, and connect with mentors</p>
        </div>

        <div className="forum-content">
          <div className="forum-sidebar">
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

            <div className="ask-question-section">
              <button 
                className="ask-question-btn"
                onClick={() => setShowNewQuestionForm(!showNewQuestionForm)}
              >
                💬 Ask a Question
              </button>
            </div>
          </div>

          <div className="forum-main">
            {showNewQuestionForm && (
              <div className="new-question-form">
                <h3>Ask a New Question</h3>
                <form onSubmit={handleSubmitQuestion}>
                  <textarea
                    value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)}
                    placeholder="What would you like to know? Be specific and clear..."
                    rows="4"
                    required
                  />
                  <div className="form-actions">
                    <button type="submit" className="btn btn-primary">Post Question</button>
                    <button 
                      type="button" 
                      className="btn btn-secondary"
                      onClick={() => setShowNewQuestionForm(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            <div className="questions-list">
              <div className="questions-header">
                <h2>
                  {activeCategory === 'all' ? 'All Questions' : 
                   categories.find(c => c.id === activeCategory)?.label}
                </h2>
                <span className="questions-count">{filteredQuestions.length} questions</span>
              </div>

              {filteredQuestions.map(question => (
                <div key={question.id} className="question-card">
                  <div className="question-votes">
                    <button className="vote-btn">▲</button>
                    <span className="vote-count">{question.votes}</span>
                    <button className="vote-btn">▼</button>
                  </div>
                  
                  <div className="question-content">
                    <h3 className="question-title">{question.title}</h3>
                    <div className="question-meta">
                      <span className="author">{question.author}</span>
                      <span className="year-dept">{question.year} • {question.department}</span>
                      <span className="time">{question.time}</span>
                    </div>
                    <div className="question-tags">
                      {question.tags.map(tag => (
                        <span key={tag} className="tag">#{tag}</span>
                      ))}
                    </div>
                    <div className="question-answers">
                      <span className="answers-count">{question.answers} answers</span>
                    </div>
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

export default QAForum
