import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';
import List from '@material-ui/core/List';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 200,
    backgroundColor: theme.palette.background.paper,
  },
}));

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem button style={style} key={index}>
      <ListItemText primary={`Item ${index + 1}`} />
    </ListItem>
  );
}

renderRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

export default function Leftpane() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     {/* <FixedSizeList height={300}  itemSize={46} itemCount={5}>
        {renderRow}
  </FixedSizeList>*/}
      <List>
        {['DashBoard', 'Settings', 'My Questions', 'Answers'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText style={{textAlign:'center'}} primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}