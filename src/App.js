import './App.css';
import {Link, Redirect, Router} from "@reach/router"

import NotFound from './views/NotFound';
import Form from './views/Form';
import Product from './views/Product';

function App() {
  return (
    <div className="App">
      <Router>
        <Form path="/"></Form>
        <Product path="/products/:id"></Product>
        <NotFound default></NotFound>

      </Router>
    </div>
  );
}

export default App;
