import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Header/Navbar';
import Shop from './components/Shop/Shop';


function App() {

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  )
}

export default App
