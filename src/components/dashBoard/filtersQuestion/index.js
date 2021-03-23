import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './style';
import Grid from '@material-ui/core/Grid';

const FiltersQuestion = ({ index,body,date }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={0} className={classes.filtersetter}>                                   
        <Grid item sm={2} xs={2} className={classes.filters} >EEE<CloseIcon className={classes.iconclose} /></Grid>
        <Grid item sm={2} xs={2} className={classes.filters} >TUT<CloseIcon className={classes.iconclose} /></Grid>
        <Grid item sm={2} xs={2} className={classes.filters} >hello<CloseIcon className={classes.iconclose} /></Grid>             
        <Grid item sm={2} xs={2} className={classes.filters} >EEE<CloseIcon className={classes.iconclose} /></Grid>
        <Grid item sm={2} xs={2} className={classes.filters} >TUT<CloseIcon className={classes.iconclose} /></Grid>
        <Grid item sm={2} xs={2} className={classes.filters} >hello<CloseIcon className={classes.iconclose} /></Grid>            
</Grid>
  );
};

export default FiltersQuestion;
