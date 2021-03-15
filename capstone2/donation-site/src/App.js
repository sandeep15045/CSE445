import React, { useEffect ,useState} from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Jaipur from "./locations/jaipurNGOmap"
import Payment from "./Payment";
import Orders from "./Orders";
import Navbar from "./Navbar";
import Team from "./Team";
import Download from "./Download";
import Categories from "./Categories";
import Women from "./categories/Women";
import About from "./About";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Kolkata from "./locations/kolkataNGO";
import Mathura from "./locations/mathuraNGO";
import PuffLoader from "react-spinners/PuffLoader";
import vid from "./loadingvi.mp4"
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

// const promise = loadStripe(
//   "pk_test_51HPvU9DFg5koCdLGJJbNo60QAU99BejacsvnKvT8xnCu1wFLCuQP3WBArscK3RvSQmSIB3N0Pbsc7TtbQiJ1vaOi00X9sIbazL"
// );

function App() {
  
  const [{}, dispatch] = useStateValue();

  const[loading,setLoading]=useState(false);
  useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
          setLoading(false)
        },2000)
},[])

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    loading ?
    <div className="sweet-loading">
        
       <video
        src={vid}
        loading={loading}  
        autoPlay={true}       
        />
    </div>
    :
    <Router>
      <div className="app">
        
         
        
        <Switch>

          <Route path="/orders">
            <Navbar/>
            <Orders />
          </Route>

          <Route path="/about">
            <Navbar/>
            <About/>
          </Route>

          <Route path="/login">
            <Navbar/>
            <Login />
          </Route>

          <Route path="/checkout">
             <Navbar />
            <Checkout />
          </Route>

          <Route path="/download">
             <Navbar />
            <Download/>
          </Route>


          <Route path="/payment">
            <Navbar />
            <Payment />
          </Route>

          <Route path="/team">
            <Navbar />
            <Team />
          </Route>
         
          <Route path="/jaipur">
            <Navbar />
            <Jaipur/>
          </Route>
          <Route path="/kolkata">
            <Navbar />
            <Kolkata/>
          </Route>
          <Route path="/mathura">
            <Navbar />
            <Mathura/>
          </Route>


          <Route path="/categories">
            <Navbar />
            <Categories/>
          </Route>
          <Route path="/women">
            <Navbar />
            <Women/>
          </Route>
          <Route path="/child">
            <Navbar />
            <Women/>
          </Route>
          <Route path="/enviorment">
            <Navbar />
            <Women/>
          </Route>
          <Route path="/seniorcitizens">
            <Navbar />
            <Women/>
          </Route>

          <Route path="/">
            <Navbar />
            <Home />
            {/* <Categories/> */}
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
