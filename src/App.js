import './App.css';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import './components/shared/Header/Header';
import './components/shared/Footer/Footer';
import './pages/HomePage/HomePage';
import './pages/CharactersPage/CharactersPage'
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import CharactersPage from './pages/CharactersPage/CharactersPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <Router>
    <div className='App-header'>
      <Header></Header>
    </div>
    <div className='App-main'>
      <Routes>
          <Route path='/' element={<HomePage></HomePage>} />
          <Route path='/characters' element={<CharactersPage></CharactersPage>} />
      </Routes>
    </div>
    <div className="App-footer">
      <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
