import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import './Bar.css';
import IconButton from '@material-ui/core/IconButton';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const SidebarTop=() =>{
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed"  className={classes.appBar}>
        <Toolbar>
          <Typography variant="h4" noWrap>
          <div className='zedi'>
          <div className='fro'>
          <IconButton aria-label="display more actions" edge="end" color="inherit">
          <AccountBalanceIcon/>
          </IconButton>
          </div>
              <div className='ret'>BITS Stack</div>
                <div className='rett'> 
                <Typography variant="h4" noWrap>
                Dashboard
                </Typography> 
                </div>
                <div className='kod'>
                
            
                <div><SearchIcon/></div>
                <div><NotificationsActiveIcon/></div>
                <div><AccountCircleRoundedIcon/></div>

                
                </div>
                </div>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Typography paragraph>

        </Typography>
        <Typography paragraph>
        
        </Typography>
      </main>
    </div>
  );
}

export default SidebarTop;
