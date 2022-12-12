import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import AuthRoute from './components/AuthRoute';
import Login from './pages/Login';
import ScrollToTop from './utils/ScrollToTop';

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop>
        <Routes>
          <Route path='/*' element={
            <AuthRoute>
              <Main />
            </AuthRoute>
          }
          />
          <Route path='login' element={<Login />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
