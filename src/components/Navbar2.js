import React,{useState,useEffect,useModal} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar2.css'
import Search from './Navsearch';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';


 
 function Navbar2() {
    
    
     const [click,setClick] = useState(false);
     const [button,setButton]=useState(true)
     const handleClick =()=>setClick(!click);
     const closeMobileMenu =()=> setClick(false);
     const showButton=()=>{
         if(window.innerWidth<=960){
         setButton(false);
     } else {
     setButton(true);
    }
     };
     useEffect(() => {
       showButton();
       },[]);
    
     
     return (
     <>
     <div>
     <nav className='navbar'>
       <div className='navbar-container'>
           <Link to='/Getstartedpage' className='navbar-logo' onClick={closeMobileMenu}>Paryatak<i className='fas fa-globe-asia'></i></Link>
          
           <div className='menu-icon' onClick={handleClick}>
               <i className={click ? 'fas fa-times':'fas fa-bars'}/>
               </div>
              
               <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                   
                     
                  
                   <li className='nav-item'>
                       <Link to='/Getstartedpage' className='nav-links' onClick={closeMobileMenu}>
                       <i class="fas fa-home"></i>
                       </Link>
                   </li>
                   <li className='nav-item'>
                       <Link to='/' className='nav-links'  >
                           Log out
                       </Link>
                   </li>
                   <li className='nav-item'>
                       <Link to='/' className='nav-links'  >
                       <i class="fas fa-user-circle"></i>
                       </Link>
                   </li>
                   
               </ul>
               
       </div>
     </nav>

     </div>
     </>
    
     )
 }
 
 export default Navbar2;