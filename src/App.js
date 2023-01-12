import './App.css';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Profile } from './pages/Profile';
import { Error } from './pages/Error';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar } from './pages/Navbar';
import { useState, createContext } from 'react';



export const AppContext = createContext();



function App() {
  const [userName, setUserName] = useState('Gabe');


  return (
    <div className="App">
      <AppContext.Provider value={{ userName, setUserName }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </Router >
      </AppContext.Provider>
    </div>
  );
}

export default App;
