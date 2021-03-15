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
<<<<<<< HEAD
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
||||||| 55f8d8d
import Categories from './Categories';
import Animal from './Animal';
// import { auth } from "./firebase";
// import { useStateValue } from "./StateProvider";
=======
<<<<<<< HEAD
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
=======
import Categories from './Categories';
import Animal from './Animal';
// import { auth } from "./firebase";
// import { useStateValue } from "./StateProvider";
>>>>>>> 55f8d8d15712b4f5b9f7c5e6c9c11097b1dcb6cf
>>>>>>> bcdcef10d9e609a0123e8ac76876f0570d5263ef
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
<<<<<<< HEAD
            <Payment />
          </Route>

          <Route path="/team">
            <Navbar />
            <Team />
||||||| 55f8d8d
            {/* <Elements stripe={promise}> */}
              <Payment />
            {/* </Elements> */}
=======
            <Payment />
          </Route>
<<<<<<< HEAD

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
>>>>>>> bcdcef10d9e609a0123e8ac76876f0570d5263ef
          </Route>
<<<<<<< HEAD
         
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
||||||| 55f8d8d
          <Route path ="/categories">
=======


          <Route path="/categories">
            <Navbar />
            <Categories/>
=======
          <Route path ="/categories">
>>>>>>> bcdcef10d9e609a0123e8ac76876f0570d5263ef
            <Categories/>
          </Route>
<<<<<<< HEAD
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
||||||| 55f8d8d
          <Route path ="/Animal">
            <Animal/>
=======
          <Route path ="/Animal">
            <Animal/>
>>>>>>> 55f8d8d15712b4f5b9f7c5e6c9c11097b1dcb6cf
>>>>>>> bcdcef10d9e609a0123e8ac76876f0570d5263ef
          </Route>
<<<<<<< HEAD

||||||| 55f8d8d
=======
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

>>>>>>> bcdcef10d9e609a0123e8ac76876f0570d5263ef
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
