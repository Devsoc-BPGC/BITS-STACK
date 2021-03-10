import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    pullup: {
      maxHeight: '300px',
      overflow: 'scroll',
    }
  }));

export default function LeftpaneBottomMobile() {

    const classes = useStyles();
    
  return (
    <React.Fragment>
      <List>
      <ListItem button >
        <ListItemText style={{textAlign:'center',fontWeight:900}} ><b>Subjects</b></ListItemText>
          </ListItem>
        </List>
      <List className={classes.pullup}>
        {['BITSF111','BITSF111','BITSF111','BITSF111','BITSF111','BITSF111','BITSF111','BITSF111','BITSF111','BITSF111','BITSF111'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText style={{textAlign:'center'}} primary={text} />
          </ListItem>
        ))}
      </List>
      </React.Fragment>
  );
}