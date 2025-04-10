import './App.css';
import Intro from './Intro';
import Brands from './Brands.js'

import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewArrivals from './NewArrivals.js'
import Sales from './Sales.js';
import Favourite from './Favourite.js';
import Community from './Community.js';
import Footer from './Footer.js';

function App() {
  return (
    <Router>
      <Intro></Intro>
      <Brands/>
      <NewArrivals/>
      <Sales/>
      <Favourite/>
      <Community/>
      <Footer/>
    
      <Routes>
        <Route path="/catalog" element={<></>} />
      </Routes>
    </Router>

  );
}

export default App;
