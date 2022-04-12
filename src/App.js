import './App.css';
import Navbar from './components/navbar';
import Homescreen from './constentScreen/homescreen';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Cart from './constentScreen/cart';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div >
        <Routes>
          <Route path='/' element={<Homescreen />}></Route>
          <Route path='/cart' element={<Cart/>}></Route>



        </Routes>
      </div>


    </BrowserRouter>


  );
}

export default App;
