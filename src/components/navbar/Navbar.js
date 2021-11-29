import React from 'react';
import './navbar.scss';
import { Search,ShoppingCart
} from '@mui/icons-material';
import Badge from '@mui/material/Badge';





function Navbar() {
    return (
        <div className="navContainer">
           <div className="left">
              
               <div className="searchContainer">
                   <Search className="searchIcon"/>
                   <input type="text" className="searchInput" />
               </div>
           </div>
           <div className="middle">
               <h1 className="logo">Maison Lara</h1>
               <ul>
                   <li>Home</li>
                   <li></li>
               </ul>
           </div>
           <div className="right">
               <ul className="rightItem">
                   <li className="login">Login</li>
                   <li className="signup">Sign up</li>
               </ul>
               <Badge badgeContent={4} color="primary">
                 <ShoppingCart color="success" className="shoppingCart" />
               </Badge>
               
              <p className="language">EN</p>
           </div>
        </div>
    )
}

export default Navbar
