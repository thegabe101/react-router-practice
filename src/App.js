import './App.css';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Menu } from './pages/Menu';
import { Error } from './pages/Error';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router >
    </div>
  );
}

export default App;
