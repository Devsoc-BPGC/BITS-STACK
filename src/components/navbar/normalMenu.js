import React from 'react';
import Popover from '@material-ui/core/Popover';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

const useStyles = makeStyles((theme) => ({
    orange: {
        color: theme.palette.getContrastText('#aa11ff'),
        backgroundColor: '#aa11ff',
      },
}));



export default function RenderMenu({open,anchorEl,handleClose}) {
  const classes = useStyles();

  return (
    <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <List className={classes.root}>
        <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.orange} />
            </ListItemAvatar>
            <ListItemText primary="Devesh" secondary="2019XXXXXX" />
          </ListItem>
          </List>
          </Popover> 
  );
}