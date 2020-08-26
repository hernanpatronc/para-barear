import React from 'react';
import MenuIcon from './images/menu.png';
import {Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => {
//     return <AppBar position="static">
//     <Toolbar>
//       <IconButton edge="start" color="inherit" aria-label="menu">
//         <MenuIcon />
//       </IconButton>
//       <Typography variant="h6" >
//         Para Barear
//       </Typography>
//     </Toolbar>
//   </AppBar>
    return <div className="navbar">
        <Link to="/" style={{textDecoration: 'none'}} ><h1>PARA BAREAR</h1></Link>
        <img src={MenuIcon}/>
    </div>
}

export default Navbar;