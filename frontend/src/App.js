import './App.css';
import Home from './core/Home'
import Signin from './core/Signin'
import Signup from './core/Signup'
import AddProduct from './core/addProduct'
import Admin from './core/adminComponents/admin';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddCategory from './core/addCategory';
function App() {
  return (
   <Router>
     <Switch>
       <Route path="/" exact component={Home}></Route>
       <Route path="/signin" exact component={Signin}></Route>
       <Route path="/signup" exact component={Signup}></Route>
       <Route path="/addProduct" exact component={AddProduct}></Route>
       <Route path="/addCategory" exact component={AddCategory}></Route>
       <Route path="/admin" exact component={Admin} ></Route>
     </Switch>
   </Router>
  );
}

export default App;
