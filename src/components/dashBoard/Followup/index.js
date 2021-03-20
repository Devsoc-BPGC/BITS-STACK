import React from 'react';
import useStyles from './style';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Divider } from '@material-ui/core';



export default function Followup() {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root} variant="outlined" className="crey">
        <CardContent>
          <Typography variant="h6" component="h2" style={{textAlign:'center'}}>
            <b>Following</b>
          </Typography>
          <List>
            {[
              'BITS F111 BITS F111BITS F111',
              'BITS F112 BITS F111BITS F111',
              'BITS F113 BITS F111BITS F111',
              'BITS F211 BITS F111BITS F111',
              'BITS F211 BITS F111BITS F111',
            ].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText style={{textAlign:'center'}}  primary={text} />
              </ListItem>
            ))}
          </List>

          <div>
            <Divider />
          </div>
          <Typography variant="h6" style={{textAlign:'center'}} component="h2">
            <b>Answered</b>
          </Typography>
          <List>
            {[
              'BITS F111 BITS F111BITS F111',
              'BITS F112 BITS F111BITS F111',
              'BITS F113 BITS F111BITS F111',
              'BITS F111 BITS F111BITS F111',
              'BITS F211 BITS F111BITS F111',
            ].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText style={{textAlign:'center'}} primary={text} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </div>
  );
}
