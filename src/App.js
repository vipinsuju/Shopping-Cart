import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from "./pages/Login"
import Register from "./pages/Register"
import Cart from "./pages/Cart";



function App() {
  return (
    <div>
      <Router>
        <Switch>

          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/cart" component={Cart}/>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
