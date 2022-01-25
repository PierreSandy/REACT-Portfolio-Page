import React, {useState} from 'react';

 const Navbar =() => {
   const [active,setActive] = useState('About')
   return (
     <div className='Navbar'>

       <div className='navbar-active'>
         {active}
       </div>

       <div className='navbar-items'>

          <div className='navbar-item' onClick={() => setActive('About')} >About</div>
          <div className='navbar-item' onClick={() => setActive('Resume')} >Resume</div>
          <div className='navbar-item' onClick={() => setActive('Projects')} >Projects</div>
       </div>



     </div>

   );
 };

 export default Navbar;