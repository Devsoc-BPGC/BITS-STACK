import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, Collapse, IconButton } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import useStyles from '../DashBoard/DashBoardStyles';
import Grid from '@material-ui/core/Grid';

const red = '#EF4646';
const grey = '#9D9D9D';

const MessageFilterCard = ({ index,body,date }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [showPrimaryText, setShowPrimaryText] = useState(false);



  return (
    <Card className={classes.msgCard} raised={true} >
      <div> 
        <Grid container>
        <Grid item xs={1} sm={1} md={1} lg={1}> 
        <div>
            <b className={classes.cardLeftavatar}>Q</b>
        </div>  
        </Grid>   
        <Grid item xs={11} sm={11} md={11} lg={11} className={classes.cardRight}>
        <div className={classes.cardContent}>
          <div style={{ whiteSpace: 'pre-line' }}>
            <span className={classes.index}></span>
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
        </Grid>
        </Grid> 
      </div>
    </Card>
  );
};

export default MessageFilterCard;
