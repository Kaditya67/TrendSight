import './App.css'
// import IndexPage from './pages/IndexPage'
import Charts from './pages/Charts'
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import { Route, Routes } from 'react-router-dom';

function App() {  
  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route path="/" element={<IndexPage />} /> */}
      <Route path="/" element={<Charts />} />
    </Routes>
  )
}

export default App
