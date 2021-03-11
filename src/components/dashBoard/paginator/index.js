import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const Paginator = ({i,leftclick,rightclick,Leftcolour,Rightcolour,DashData }) => {
  return (
    <Grid
    container
    direction="row"
    justify="center"
    display="flex"
    alignItems="center"
  >
    <Grid item style={{ textAlign: 'center' }}>
      <svg
        onClick={leftclick}
        width="35"
        height="23"
        viewBox="0 0 48 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.46392e-07 11.5L47.25 22.3253L47.25 0.674681L5.46392e-07 11.5Z"
          fill={Leftcolour}
        />
      </svg>
    </Grid>
    <Grid item style={{ textAlign: 'center' }}>
      <Button
        className="ken"
        style={{
          fontWeight: '700',
          textTransform: 'none',
          fontFamily: 'Oxygen',
          margin: '1vw',
        }}
      >
        Showing {DashData.length > 0 ? i + 1 : i}-
        {i + 5 < DashData.length ? i + 5 : DashData.length} of{' '}
        {DashData.length}
      </Button>
    </Grid>
    <Grid item style={{ textAlign: 'center' }}>
      <svg
        onClick={rightclick}
        width="35"
        height="23"
        viewBox="0 0 48 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M48 11.5L0.749999 22.3253L0.75 0.674681L48 11.5Z"
          fill={DashData.length > 5 ? Rightcolour : Leftcolour}
        />
      </svg>
    </Grid>
  </Grid>
  );
};

export default Paginator;
