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
import SearchIcon from '@material-ui/icons/Search';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import './Bar.css';
import IconButton from '@material-ui/core/IconButton';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import OutlineCard from './Announcement';
import Followup from './Followup';   
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';     

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
    <div className={classes.root} > 
    
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
                  <b> 
                   Dashboard
                    </b>
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
    
    
      <div >
      <Drawer
        className={classes.drawer}
        variant="permanent"
       // open = {this.state.drawerOpen}
       // onRequestChange = {(drawerOpen) => this.setState({drawerOpen})}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
        <div style={{backgroundColor:'#909090'}}>
          <List>
            {['Dashboard', 'Settings', 'My questions', 'Resources'].map((text, index) => (
              <ListItem button key={text}  >
                <ListItemIcon></ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          </div>
          
          <Box m={2} /> 
          <div style={{backgroundColor:'#909090'}}>
          <Divider/>

          <h2>My Courses</h2>
          <Divider/>

          <List>
            {['BITS F111', 'BITS F112', 'BITS F113', 'BITS F211', 'BITS F221', 'BITS F121', 'BITS F311'].map((text, index) => (
              <ListItem button key={text}  >
                <ListItemIcon></ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          </div>
          </div>
          </Drawer>
      </div>
      
      <main className={classes.content}>
        <Toolbar />
        <div className='zoho'>
        <AccountBoxIcon className='puff'/>
          
           <div className='teal'><b> Binod Tharu </b><br></br>f201X0XXX@goa.bits-pilani.ac.in</div>
          
        </div>  
       <div className=''>
       
       <Grid container spacing={6}>
       <Grid item lg={8} md={7} sm={6} spacing={10}>
          <OutlineCard/>
        </Grid>
        <Grid item lg={4} md={3} sm={4} spacing={6}>
          <Paper className={classes.paper}><Followup/></Paper>
        </Grid>
        </Grid>
       </div>
      </main>
    </div>
  );
}

export default SidebarTop;
