
import './App.css';
import { BrowserRouter , Switch , Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navigation from './components/shared/Navigation/Navigation';





function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' exact element={<Home />} />
        </Routes>        
  
    </BrowserRouter>
  );
}

export default App;
