import ProjectsOverviewPage from "features/projects/pages";
import ProjectDetailPage from "features/projects/pages/[id]";
import MainPage from "features/main/pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./global.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/projects" element={<ProjectsOverviewPage />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
          <Route path="/properties" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
