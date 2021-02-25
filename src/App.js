import React , {useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from '../src/components/pages/Homepage';
import Checkoutpage from "./components/pages/Checkoutpage";
import Login from "../src/components/pages/Login";
import Shoppage from "../src/components/pages/Shoppage";
import { useStateValue } from "./components/StateProvider";
import {auth} from "./firebase";


function App() {
  const [{basket}, dispatch] = useStateValue();
  useEffect(() => {
  const unSubscribe = auth.onAuthStateChanged((authUser) => {
     if(authUser){
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
     } else {
        dispatch({
          type: "SET_USER",
          user: null,
        })
     }
   })

   return () => {
     unSubscribe();
   }
  }, []);

  return (
    <>
    <Router>
      <div className="App">
      <Switch>
        <Route exact path="/" component = {Homepage} />
        <Route path="/checkout" component = {Checkoutpage} />
        <Route path="/shop" component={Shoppage}/>
        <Route path="/login" component = {Login} />
      </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
