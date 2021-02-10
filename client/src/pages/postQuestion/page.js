import React, { useState } from 'react';
import useStyles from '../postQuestion/styles';
import Grid from '@material-ui/core/Grid';
import PostComponent from '../../components/PostQuestion/postcomponent/index';
import Profilecomponent from '../../components/PostQuestion/profilecomponent/index';
import Tipcomponent from '../../components/PostQuestion/Tipcomponent/index';

const PostQuestion = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={8} lg={9}>
            <PostComponent/>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Grid container spacing={0}>
            <div className={classes.detailContainer}>
              <Grid item xs={12} sm={8} md={12} lg={12}>
                <Profilecomponent/>
              </Grid>
              <Grid item xs={12} sm={8} md={12} lg={12}>
                <Tipcomponent/>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default PostQuestion;
