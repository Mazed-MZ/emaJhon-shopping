import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Header/Navbar';
import { Toaster } from 'react-hot-toast';


function App() {

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Toaster position="top-left"
        reverseOrder={false} />
    </>
  )
}

export default App
