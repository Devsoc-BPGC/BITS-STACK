import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import useStyles from '../PostQuestion/poststyles';

export default function AnnouncementCards() {
  const classes = useStyles();

  return (
    <div className={classes.rootnew}>
      <div className={classes.tipContainer}>
        <div className={classes.titleContainer}>
          <div
            className={classes.tipTitle}
            style={{ paddingBottom: 0, textAlign: 'center' }}
          >
            Announcements
          </div>
        </div>

        <div className={classes.block}>
          <div className={classes.text}></div>
          <div className={classes.text}>
            <strong>1. Summarize the problem</strong>
          </div>
          <div className={classes.text}>
            <strong>2. Describe what you've tried</strong>
          </div>
          <div className={classes.text}>
            <strong>3. When appropriate, show some code</strong>
          </div>
          <div className={classes.text}>
            <strong>4. Summarize the problem</strong>
          </div>
          <div className={classes.text}>
            <strong>5. Describe what you've tried</strong>
          </div>
          <div className={classes.text}>
            <strong>6. When appropriate, show some code</strong>
          </div>
          <div className={classes.text}>
            <strong>7. When appropriate, show some code</strong>
          </div>
          <div className={classes.text}>
            <strong>8. When appropriate, show some code</strong>
          </div>
          <div className={classes.text}>
            <strong>9. When appropriate, show some code</strong>
          </div>
        </div>
      </div>
    </div>
  );
}