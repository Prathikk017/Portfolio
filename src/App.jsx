import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Main from './components/Main';
import Projects from './components/Projects';
import Sidenav from './components/Sidenav';
import ProjectDisplay from './components/ProjectDisplay';

function App() {
  return (
    <div>
      <Router>
        <Sidenav />

        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/experience' element={<Experience />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/project/:id' element={<ProjectDisplay />} />
          <Route path='/contact' element={<Contact />}/>
        </Routes>

        
      </Router>
    </div>
  );
}

export default App;
