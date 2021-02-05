import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Followup.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 175,
    minHeight: 200,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Followup() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Card className={classes.root} variant="outlined" className="crey">
        <CardContent>
          <Typography variant="h6" component="h2">
            <b>Following</b>
          </Typography>
          <List>
            {[
              'BITS F111',
              'BITS F112',
              'BITS F113',
              'BITS F211',
              'BITS F221',
              'BITS F121',
              'BITS F311',
            ].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon></ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>

          <div>
            <Divider />
          </div>
          <Typography variant="h6" component="h2">
            <b>Answered</b>
          </Typography>
          <List>
            {[
              'BITS F111',
              'BITS F112',
              'BITS F113',
              'BITS F211',
              'BITS F221',
              'BITS F121',
              'BITS F311',
            ].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon></ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </div>
  );
}
