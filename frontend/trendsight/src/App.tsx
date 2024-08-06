import './App.css'
import IndexPage from './pages/IndexPage'
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import { Route, Routes } from 'react-router-dom';

function App() {  
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<IndexPage />} />
    </Routes>
  )
}

export default App
