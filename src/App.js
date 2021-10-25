import React, { useState } from 'react';
import Navbar from './components/pages/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Footer from './components/pages/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from './components/pages/Form'
import Works from './components/pages/Works';
import Contactus from './components/pages/Contactus';
import Mousepointer from './components/pages/Mousepointer';
import BookaCall from './components/pages/BookaCall';
function App() {
  return (
    <div id="root2"
    onMouseEnter={()=>{document.getElementById('mouseout').style.display='block';document.getElementById('mousemid').style.display='block';}}  
    onMouseLeave={()=>{document.getElementById('mouseout').style.display='none';document.getElementById('mousemid').style.display='none';}} 
    onMouseMoveCapture={(e) => {
      try {// console.log(e);
        // document.getElementById('mouseout').style.left=`${e.pageX}px`;
        // document.getElementById('mouseout').style.top=`${e.pageY}px`;
        // document.getElementById('mousemid').style.left=`${e.pageX}px`;
        // document.getElementById('mousemid').style.top=`${e.pageY}px`;
        document.getElementById('mouseout').style.transform = `translate(${(e.clientX) - 25}px,${(e.clientY) - 25}px)`;
        document.getElementById('mousemid').style.transform = `translate(${(e.clientX) - 25}px,${(e.clientY) - 25}px)`;
      } catch (e) {
        console.log(e)
      }
    }}>
      <Router>
        <Mousepointer />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/fill' component={Form} />
          <Route path='/OurWorks' component={Works} />
          <Route path='/ContactUs' component={Contactus} />
          <Route path='/BookMyCall' component={BookaCall} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
