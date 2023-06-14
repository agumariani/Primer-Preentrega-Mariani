import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer';
import { NavBar } from './componentes/NavBar/NavBar';
import { ItemListContainer } from './componentes/itemListContainer/ItemListContainer';
import { CartProvider } from './Context/CartContext';
import { Cart } from './componentes/Cart/Cart';
import { Checkout } from './componentes/Checkout/Checkout';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Productos'}/>} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting={''}/>} />
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/Cart' element={<Cart/>}/>
            <Route path='/Checkout' element={<Checkout/>}/>
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
