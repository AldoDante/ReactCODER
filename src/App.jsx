import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cart from "./components/Cart/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route index path='/' element={<ItemListContainer />} />
          <Route index path='/categoria/:categoriaId' element={<ItemListContainer />} />
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>} />
          <Route path='/cart' element={ <Cart/> } />
          {/* <Route path='*' element={ <Navigate to='/' /> } /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
