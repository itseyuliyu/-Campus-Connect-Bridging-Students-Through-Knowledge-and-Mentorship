import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import QAForum from "./pages/QAForum";
import ProjectArchive from "./pages/ProjectArchive";
import KnowledgeHub from "./pages/KnowledgeHub";
import StudentProfiles from "./pages/StudentProfiles";
import DiscussionGroups from "./pages/DiscussionGroups";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "qa-forum":
        return <QAForum />;
      case "project-archive":
        return <ProjectArchive />;
      case "knowledge-hub":
        return <KnowledgeHub />;
      case "student-profiles":
        return <StudentProfiles />;
      case "discussion-groups":
        return <DiscussionGroups />;
      case "admin-dashboard":
        return <AdminDashboard />;
      case "Login":
        return <Login />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main-content">{renderPage()}</main>
    </div>
  );
}

export default App;
