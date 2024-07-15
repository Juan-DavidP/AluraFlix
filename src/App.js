import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Page404 from './pages/Page404';
import NuevoVideo from './pages/NuevoVideo';
import GlobalContextProvider from './context/GlobalContext';

function App() {
  return (
    <Router>
      <GlobalContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/nuevo-video' element={<NuevoVideo />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </GlobalContextProvider>
    </Router>
  );
}

export default App;
