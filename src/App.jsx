import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cart from "./components/Cart/Cart";
import ItemDetalContainer from "./components/ItemDetailContainer/ItemDetalContainer";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route index path='/' element={<ItemListContainer />} />
          <Route path='/detalle' element={<ItemDetalContainer/>} />
          <Route path='/cart' element={ <Cart/> } />
          {/* <Route path='*' element={ <Navigate to='/' /> } /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
