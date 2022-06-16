import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";

import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  // const [state, dispatch] = useStore()
  // console.log(state.products)
  const user = false;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />}>
          <Route path=":category" element={<ProductList />} />
        </Route>
        <Route path="/product" element={<Product />}>
          <Route path=":id" element={<Product />} />
        </Route>
        <Route path="/cart/" element={<Cart />} />
        <Route
          path="login"
          element={user ? <Login replace to="/" /> : <Login />}
        />
        <Route
          path="/register/"
          element={user ? <Login replace to="/" /> : <Register />}
        />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
