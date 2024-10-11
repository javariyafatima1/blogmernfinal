import React from 'react';
import Navbar from './Header';
import Navbarr from './Header';

import Seco from './Seco';
import './Home.css';
import Baner from './Baner';

const Home = () => {
  
  return (
    <div>
     
      <div className='product'>
       <div className='productcanta'>
       <Baner />
       </div>
      </div>
     <h1>Latest Blogs</h1>
       <div>
      <Seco/>
       </div>
     
     {/* <Footer/> */}
    </div>
  );
}

export default Home;
