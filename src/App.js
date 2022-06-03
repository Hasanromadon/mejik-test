import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import DetailBook from './pages/DetailBook';
import Home from './pages/home';
import { Toaster } from 'react-hot-toast';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/book/:id" element={<DetailBook />} />
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
