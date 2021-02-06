import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import  Divider  from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 200,
    height:300,
    backgroundColor: theme.palette.background.paper,
  },
}));


export default function LeftpaneBottom() {
  const classes = useStyles();

  return (
    <div className={classes.root}>  
    <List >
        <ListItem>
           <b>My Courses</b> 
        </ListItem>
    </List>
      <List style={{maxHeight: '80%', overflow: 'auto'}} >
        <ListItem button  >
      <ListItemText primary={`Item ${1}`} />
    </ListItem>
    <ListItem button  >
      <ListItemText primary={`Item ${1}`} />
    </ListItem>
    <ListItem button  >
      <ListItemText primary={`Item ${1}`} />
    </ListItem>
    <ListItem button  >
      <ListItemText primary={`Item ${1}`} />
    </ListItem>
    <ListItem button  >
      <ListItemText primary={`Item ${1}`} />
    </ListItem>
    <ListItem button  >
      <ListItemText primary={`Item ${1}`} />
    </ListItem>   
     <ListItem button  >
      <ListItemText primary={`Item ${1}`} />
    </ListItem>   
     <ListItem button  >
      <ListItemText primary={`Item ${1}`} />
    </ListItem>    
    <ListItem button  >
      <ListItemText primary={`Item ${1}`} />
    </ListItem>
    <ListItem button  >
      <ListItemText primary={`Item ${1}`} />
    </ListItem>
    <ListItem button  >
      <ListItemText primary={`Item ${1}`} />
    </ListItem>
    <ListItem button  >
      <ListItemText primary={`Item ${1}`} />
    </ListItem>
      </List>
    </div>
  );
}