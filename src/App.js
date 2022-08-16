import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from './Routes/Home';
import About from './Routes/About';
import Contact from './Routes/Contact';
import Nav from './Routes/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/about' element={<About/>}></Route>
          <Route exact path='/contact' element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
