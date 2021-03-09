import React, { useState } from 'react';
import useStyles from './style';

const TipsCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.tipContainer}>
    <div className={classes.titleContainer}>
      <div
        className={classes.tipTitle}
        style={{ paddingBottom: 0 }}
      >
        Don’t know how to frame
        <br />
        your Question?
      </div>
    </div>

    <div className={classes.block}>
      <div className={classes.text}>Here are a few tips:</div>
      <div className={classes.text}>
        <strong>1. Summarize the problem</strong>
      </div>
      <div className={classes.text}>
        <strong>2. Describe what you've tried</strong>
      </div>
      <div className={classes.text}>
        <strong>3. When appropriate, show some code</strong>
      </div>
    </div>
  </div>           
  );
};

export default TipsCard;
