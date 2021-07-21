import './App.css';
import {Link, Redirect, Router} from "@reach/router"

import NotFound from './views/NotFound';
import Form from './views/Form';
import Product from './views/Product';
import EditProduct from './views/EditProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <Form path="/"></Form>
        <Product path="/products/:id"></Product>
        <EditProduct path = "/products/:id/edit"></EditProduct>
        <NotFound default></NotFound>

      </Router>
    </div>
  );
}

export default App;
