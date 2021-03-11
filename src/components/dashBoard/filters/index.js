import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './style';
import Grid from '@material-ui/core/Grid';

const Filters = ({ index,body,date }) => {
  const classes = useStyles();

  return (
    <Grid container style={{marginTop:'40px',flexGrow:1}} spacing={0}>          
    Applied filters :                            
        <Grid item s={3} xs={2} className={classes.filters} >EEE<CloseIcon className={classes.iconclose} /></Grid>
        <Grid item s={3} xs={2} className={classes.filters} >TUT<CloseIcon className={classes.iconclose} /></Grid>
        <Grid item s={3} xs={2} className={classes.filters} >hello<CloseIcon className={classes.iconclose} /></Grid>             
        <Grid item s={3} xs={2} className={classes.filters} >EEE<CloseIcon className={classes.iconclose} /></Grid>
        <Grid item s={3} xs={2} className={classes.filters} >TUT<CloseIcon className={classes.iconclose} /></Grid>
        <Grid item s={3} xs={2} className={classes.filters} >hello<CloseIcon className={classes.iconclose} /></Grid>            
</Grid>
  );
};

export default Filters;
