import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Getstartedpage from './components/pages/Getstart/Getstartedpage';
import Form from './components/Form';
import Form2 from './components/pages/Login/Form2';
import Hosppage from './components/pages/Hosppage';
import Cntctpage from './components/pages/Cntctpage';
import Categpage from './components/pages/Categpage';
import Aboutpage from './components/pages/Aboutpage';
import Blogpage from './components/pages/Blogpage';
import CarsPage from './components/pages/CarsPage';
import BikesPage from './components/pages/BikesPage';
import TruckPage from './components/pages/TruckPage';
import AccessoriesPage from './components/pages/AccessoriesPage';
import Periodicserpage from './components/pages/Periodicserpage';
import {Helmet} from 'react-helmet';
import Loginpage from './components/pages/Login/Loginpage';
import Signuppages from './components/pages/Signuppages';


function App() {
  return (   
    <>
    <Helmet>
      <title>
        AMS71
      </title>
    </Helmet>
    <Router> 
    
    <Navbar/>

<Switch>


  <Route path='/' exact component=
  {Home}/>
  <Route path='/Getstartedpage' exact component=
  {Getstartedpage}/>
   <Route path='/sign-up' exact component=
  {Signuppages}/>
  <Route path='/Login' exact component=
  {Loginpage}/>
  <Route path='/Automobile' exact component=
  {Hosppage}/>
  <Route path='/Contact' exact component=
  {Cntctpage}/>
  <Route path='/Categories' exact component=
  {Categpage}/>
  <Route path='/About' exact component=
  {Aboutpage}/>
  <Route path='/Blog' exact component=
  {Blogpage}/>
  <Route path='/Periodicservices' exact component=
  {Periodicserpage}/>
   <Route path='/Cars' exact component=
  {CarsPage}/>
  <Route path='/Bikes' exact component=
  {BikesPage}/>
  <Route path='/Trucks' exact component=
  {TruckPage}/>
  <Route path='/Accessories' exact component=
  {AccessoriesPage}/>

</Switch>


    </Router>
    
  
   
</>

    
  );
  
}

export default App;
