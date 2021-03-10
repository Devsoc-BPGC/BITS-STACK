import React, { useState } from 'react';
import useStyles from './navbarstyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import RenderMenu from './normalMenu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import RenderMobileMenu from './mobileMenu';
import SwipeableTemporaryDrawer from '../leftpanecomponent/mobileView/mobileviews';

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open,setOpen]=React.useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [value,setvalue]= useState(true);


  const handleProfileMenuOpen = (event) => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handlesearch = ()=>{
    setvalue(!value);
    console.log(value);
  }

  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar style={{background:'#C4C4C4',color:'black'}}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <ExitToAppIcon className={classes.displayfull}/>
            <SwipeableTemporaryDrawer />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap style={{fontWeight:600,display:!value?'none':null}}>
            BITS Stack
          </Typography>
          <Typography variant="h6" className={classes.titlecentre}>
            
          </Typography>
          <Typography variant="h6" className={classes.hide} style={{fontWeight:600,display:!value?'none':null}}> 
            DashBoard
          </Typography>

          <div className={classes.grow} />
          <div className={value?classes.search:classes.bigsearch} onClick={handlesearch}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <RenderMobileMenu handleMobileMenuClose={handleMobileMenuClose} mobileMenuId={mobileMenuId} handleProfileMenuOpen={handleProfileMenuOpen} mobileMoreAnchorEl={mobileMoreAnchorEl} isMobileMenuOpen={isMobileMenuOpen}/>
      <RenderMenu open={open} anchorEl={anchorEl} handleClose={handleClose}/>
    </div>
  );
}