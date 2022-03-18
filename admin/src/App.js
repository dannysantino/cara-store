import { BrowserRouter as Router } from 'react-router-dom';

import Main from './components/Main';
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Main />
    </Router>
  );
}

export default App;
