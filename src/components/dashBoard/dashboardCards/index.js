import React, { useState } from 'react';
import { Card, CardActions, Collapse, IconButton } from '@material-ui/core';
import useStyles from './styles';

const red = '#EF4646';
const grey = '#9D9D9D';

const DashBoardCards = ({ index,body,date }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [showPrimaryText, setShowPrimaryText] = useState(false);



  return (
    <Card className={classes.msgCard} raised={true} >
      <div>
        <div className={classes.cardContent}>
          <div style={{ whiteSpace: 'pre-line' }}>
            <span className={classes.index}>{index + 1}. </span>
            {!showPrimaryText
              ? body.length > 80
                ? `${body.substr(0, 80)}...`
                : `${body}`
              : ''}
            <Collapse
              in={expanded}
              timeout="auto"
              unmountOnExit
              component="div"
            >
              {body}
            </Collapse>
          </div>
          <span
            onClick={() => {
              setExpanded(!expanded);
              setShowPrimaryText(!showPrimaryText);
            }}
          >
            {body.length > 80 ? (!expanded ? 'View More' : 'View Less') : ''}
          </span>
        </div>
        <div className={classes.cardFooter}>
          <p className={classes.date}>{date}</p>
          <CardActions disableSpacing>
            <IconButton classes={{ root: classes.iconButton }}>
            </IconButton>
          </CardActions>
        </div>
      </div>
    </Card>
  );
};

export default DashBoardCards;
