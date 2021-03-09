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
    <Divider />
      <List style={{maxHeight: '75%', overflow: 'auto'}} >
      {['BITSF111','BITSF111','BITSF111','BITSF111','BITSF111','BITSF111','BITSF111','BITSF111','BITSF111','BITSF111','BITSF111'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}