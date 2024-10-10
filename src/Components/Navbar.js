import React, { useState } from 'react'
import Logo from '../Assets/Logo.svg';
import { BsCart2 } from 'react-icons/bs';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { Box, Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import CommentRoundedIcon from '@mui/icons-material/CommentRounded'
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded'
import ShoppingCardRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";


const NavBar = () => {

  const [openMenu, setOpenMenu] = useState(false)
  const menuOptions = [
    { text: 'Home' },
    { text: 'Practise Area' },
    { text: 'Team' },
    { text: 'Contact Us' },
  ];

  return (
    <nav>
      <div className='nav-logo-container'>
        {/* <img src={Logo} alt=''/> */}
        <h1>Aiman Looi</h1>
      </div>
      <div className='navbar-links-container'>
        <a href=''>Home</a>
        <a href=''>Practise Area</a>
        <a href=''>Team</a>
        <button className='primary-button'>Contact Us</button>
      </div>
      <div className='navbar-menu-container'>
        <HiOutlineBars3 className="burger-icon" onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right" className={openMenu ? 'drawerOpen' : 'drawerClosed'} >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                <ListItemText 
                    primary={item.text} 
                    primaryTypographyProps={{ style: { fontSize: '0.6rem' } }}  // Change text size here
                />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default NavBar;