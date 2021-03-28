import React, { useState } from 'react';
import { Card, CardActions, Collapse, IconButton, CardContent } from '@material-ui/core';
import useStyles from './style';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ChatIcon from '@material-ui/icons/Chat';

const AnswerCards = ({ index, name, body, date }) => {
  const classes = useStyles();



  return (
    <Card className={classes.msgCard} raised={true} >
      <div> 
        <Grid container>
        <Grid item xs={1} sm={1} md={1} lg={1}> 
        <div>
            <Avatar className={classes.cardLeftavatar}>{name.slice(0,1)}</Avatar>
        </div>  
        </Grid>   
        <Grid item xs={11} sm={11} md={11} lg={11} className={classes.cardRight}>
        <div className={classes.cardContent}>
          {name}
        </div>

        <p className={classes.date1}>{date}</p>

        <CardContent>
            {window.innerWidth>600?body.slice(0,80):body.slice(0,49)}
        </CardContent>

        <div className={classes.cardFooter}>
          <p className={classes.date}>
          <CardActions disableSpacing>
            <IconButton classname={classes.iconButton}>
                <ArrowUpwardIcon style={{color:'red'}} className={classes.icon}/>
                
            </IconButton>
            <p className={classes.small}>69</p>

            <IconButton >
                <ArrowDownwardIcon className={classes.icon}/>
                
            </IconButton>
            <p className={classes.small}>69</p>

            <IconButton >
                <ChatIcon className={classes.icon}/>
                
            </IconButton>
            <p className={classes.small}>69</p>

          </CardActions>
          </p>
        </div>

        </Grid>
        </Grid> 
        </div>
    </Card>
  );
};

export default AnswerCards;
