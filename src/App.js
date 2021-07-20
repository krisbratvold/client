import './App.css';
import {Link, Redirect, Router} from "@reach/router"

import NotFound from './views/NotFound';
import Form from './views/Form';

function App() {
  return (
    <div className="App">
      <Router>
        <Form path="/product/new"></Form>
        <Redirect from="/" to="/product/new" noThrow="true"></Redirect>
        <NotFound default></NotFound>
      </Router>
    </div>
  );
}

export default App;
