import './App.css';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Profile } from './pages/Profile';
import { Error } from './pages/Error';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar } from './pages/Navbar';
import { useState, createContext } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
export const AppContext = createContext();


function App() {
  const client = new QueryClient({});

  const [userName, setUserName] = useState('Gabe');
  const [getUsername, setGetUsername] = useState(localStorage.getItem('username'));

  //access to query object in const above; can use things like don't refresh on window change, etc- could be useful in the future 

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <AppContext.Provider value={{ userName, getUsername, setUserName, setGetUsername }}>
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
      </QueryClientProvider>
    </div>
  );
}

export default App;
