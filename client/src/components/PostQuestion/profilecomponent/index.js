import React from 'react';
import useStyles from './style';
import Avatar from '@material-ui/core/Avatar';

const ProfileComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.profileContainer}>
    <div className={classes.titleContainer}>
      <div className={classes.bigTitle}>Profile</div>
    </div>

    <div className={classes.block}>
      <div style={{ paddingBottom: '1rem' }}>
        <center>
          <Avatar
            alt="profile img"
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
            className={classes.avatar}
          />
        </center>
      </div>

      <div>
        <center className={classes.smallTitle}>
          Ayush Sharma
        </center>
      </div>

      <div>
        <center className={classes.text}>
          f201xxxxx@goa.bits-pilani.ac.in
        </center>
      </div>
    </div>
  </div>            
  );
};

export default ProfileComponent;
