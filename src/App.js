import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Main from './components/app/main';


const App = () => {

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Main />} />
          <Route path="/terms" element={<Main />} />
          <Route path="/privacy" element={<Main />} />
          <Route path="/tariffs" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App