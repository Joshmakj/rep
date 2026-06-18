import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Recruitment from './pages/Recruitment';
import InsideSales from './pages/InsideSales';
import It from './pages/It';
import Jobseeker from './pages/Jobseeker';
import RemoteFrontDesk from './pages/RemoteFrontDesk';
import Blog from './pages/Blog';

function App() {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith('/blog');

  return (
    <>
      {!hideNavbar && <Navbar />}

      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/insidesales" element={<InsideSales />} />
          <Route path="/enterprise-ai" element={<It />} />
          <Route path="/jobseeker" element={<Jobseeker />} />
          <Route path="/remote-front-desk" element={<RemoteFrontDesk />} />
          <Route path="/blog/:blogKind" element={<Blog />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
