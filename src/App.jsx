import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cart from "./components/Cart/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartContextProvider from "./context/CartContext";





function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
    
      <div className="App">
        <NavBar/>
      
        <Routes>
          <Route index path='/' element={<ItemListContainer greeting="Bienvenido a CraftBeer" />} />
          <Route index path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/detail/:detailId' element={<ItemDetailContainer/>} />
          <Route path='/cart' element={ <Cart/> } />
          <Route path='*' element={ <Navigate to='/' /> } />
        </Routes>
      </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
