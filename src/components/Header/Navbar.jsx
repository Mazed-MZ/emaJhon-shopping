import React from 'react';
import './Navbar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ImageListItem from '@mui/material/ImageListItem';
import Logo from '../../images/Logo.svg';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export default function Navbar() {

    // const appTheme = createTheme({
    //     palette: {
    //         primary: {
    //             main: '#263238',
    //         },
    //     },
    // });
    // const pages = ['Shop', 'Order', 'Inventory'];
    // const settings = ['Profile', 'Account', 'Cart Information', 'Logout'];

    // const [anchorElNav, setAnchorElNav] = React.useState(null);
    // const [anchorElUser, setAnchorElUser] = React.useState(null);

    // const handleOpenNavMenu = (event) => {
    //     setAnchorElNav(event.currentTarget);
    // };
    // const handleOpenUserMenu = (event) => {
    //     setAnchorElUser(event.currentTarget);
    // };

    // const handleCloseNavMenu = () => {
    //     setAnchorElNav(null);
    // };

    // const handleCloseUserMenu = () => {
    //     setAnchorElUser(null);
    // };
    return (
        <nav className='navbar'>
            <div>
                <Link to="/"><img src={Logo} alt="" /></Link>
            </div>
            <div className='tab'>
                <Link to="/shop"><a>Shop</a></Link>
                <Link to="/match"><a>Match Tickets</a></Link>
                <Link to="/inventory"><a>Inventory</a></Link>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
}

// ___>> Original Code <<___
// <ThemeProvider theme={appTheme}>
//     <AppBar position="fixed">
//         <Container maxWidth="xl">
//             <Toolbar disableGutters>
//                 {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
//                 <ImageListItem alt="" sx={{
//                     mr: 60,
//                     display: { xs: 'none', md: 'flex' }
//                 }}><img src={Logo} alt="" /></ImageListItem>






{/* <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="https://freelogopng.com/images/all_img/1688364164amazon-logo-transparent.png"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Logo
                    </Typography> */}





// ___>> Original Code <<___
// <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//     <IconButton
//         size="large"
//         aria-label="account of current user"
//         aria-controls="menu-appbar"
//         aria-haspopup="true"
//         onClick={handleOpenNavMenu}
//         color="inherit"
//     >
//         <MenuIcon />
//     </IconButton>
//     <Menu
//         id="menu-appbar"
//         anchorEl={anchorElNav}
//         anchorOrigin={{
//             vertical: 'bottom',
//             horizontal: 'left',
//         }}
//         keepMounted
//         transformOrigin={{
//             vertical: 'top',
//             horizontal: 'left',
//         }}
//         open={Boolean(anchorElNav)}
//         onClose={handleCloseNavMenu}
//         sx={{
//             display: { xs: 'block', md: 'none' },
//         }}
//     >
//         {pages.map((page) => (
//             <MenuItem key={page} onClick={handleCloseNavMenu}>
//                 <Typography textAlign="center">{page}</Typography>
//             </MenuItem>
//         ))}
//     </Menu>
// </Box>
// <ImageListItem alt="" sx={{
//     mr: 14,
//     display: { xs: 'flex', md: 'none' }
// }}> <img src={Logo} alt="" /> </ImageListItem>






{/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */ }
{/* <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="https://freelogopng.com/images/all_img/1688364164amazon-logo-transparent.png"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography> */}





// ___>> Original Code <<___
//                 <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//                     {pages.map((page) => (
//                         <Button
//                             key={page}
//                             onClick={handleCloseNavMenu}
//                             sx={{ my: 2, color: 'white', display: 'block' }}
//                         >
//                             {page}
//                         </Button>
//                     ))}
//                 </Box>

//                 <Box sx={{ flexGrow: 0 }}>
//                     <Tooltip title="Open settings">
//                         <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                             <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//                         </IconButton>
//                     </Tooltip>
//                     <Menu
//                         sx={{ mt: '45px' }}
//                         id="menu-appbar"
//                         anchorEl={anchorElUser}
//                         anchorOrigin={{
//                             vertical: 'top',
//                             horizontal: 'right',
//                         }}
//                         keepMounted
//                         transformOrigin={{
//                             vertical: 'top',
//                             horizontal: 'right',
//                         }}
//                         open={Boolean(anchorElUser)}
//                         onClose={handleCloseUserMenu}
//                     >
//                         {settings.map((setting) => (
//                             <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                                 <Typography textAlign="center">{setting}</Typography>
//                             </MenuItem>
//                         ))}
//                     </Menu>
//                 </Box>
//             </Toolbar>
//         </Container>
//     </AppBar>
// </ThemeProvider>

