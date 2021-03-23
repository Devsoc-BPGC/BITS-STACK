import React, { useState } from 'react';
import { Card, CardActions, Collapse, IconButton } from '@material-ui/core';
import useStyles from './style';
import Grid from '@material-ui/core/Grid';
import FiltersCards from '../filtersQuestion/index';

const QuestionCards = ({ index, body, date, name }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [showPrimaryText, setShowPrimaryText] = useState(false);



  return (
    <Card className={classes.msgCard} raised={true} >
      <div> 
        <Grid container>
        <Grid item xs={1} sm={1} md={1} lg={1} className={classes.cardLeft}> 
        <div>
            <b className={classes.cardLeftavatar}>Q</b>
        </div>  
        </Grid>   
        <Grid item xs={11} sm={11} md={11} lg={11} className={classes.cardRight}>
        <div className={classes.cardContent}>
          {body}
        </div>
        <FiltersCards/>
        <div className={classes.cardFooter}>
          <p className={classes.date1}>({date} {name})</p>
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

export default QuestionCards;
