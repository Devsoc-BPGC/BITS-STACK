import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';


export default function LeftpaneTopMobile() {

    
  return (
    <React.Fragment>
      <List>
      <ListItem button >
            <ListItemText style={{textAlign:'center',fontWeight:900}} ><b>Control</b></ListItemText>
        </ListItem>
        {['DashBoard', 'Settings', 'My Questions', 'Answers'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText style={{textAlign:'center'}} primary={text} />
          </ListItem>
        ))}
      </List>
      </React.Fragment>
  );
}