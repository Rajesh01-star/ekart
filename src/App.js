import './App.css';
import Top from './Components/Top';
import Home from './Components/Home';
import Cart from './Components/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Top />
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>

      </BrowserRouter>
      {/* <Home />  */}
    </div>
  );
}

export default App;
