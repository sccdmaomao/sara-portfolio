import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import ContactPage from './components/ContactPage'
import LandingPage from './components/LandingPage'
import ProjectDetailPage from './components/ProjectDetailPage'
import ProjectListPage from './components/ProjectListPage'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/projects" element={<ProjectListPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/projects/:id" element={<ProjectDetailPage />} />
            </Routes>
        </Router>
    )
}

export default App
