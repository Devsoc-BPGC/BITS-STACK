import { useState, Fragment, useEffect, createContext } from 'react';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DashBoardCards from '../DashBoard/DashBoardCards';
//export const Data = createContext();
//import axios from 'axios';
//export const Data1 = createContext();
import PrimarySearchAppBar from '../navbar/navbar';
import { Redirect } from 'react-router-dom';
import '../DashBoard/loader.css';
import useStyles from '../DashBoard/DashBoardStyles';
import LeftpaneTop from '../leftpanecomponent/leftpanetop';
import LeftpaneBottom from '../leftpanecomponent/leftpanebottom';

export default function DashBoard() {


  const classes = useStyles();


  
  const [load, setload] = useState(false);
  const [DashData, setDashData] = useState(
    Array(50)
      .fill({
        body: 'Lorem Ipsum is simply dummy Lorem Ipsum is simply dummyLorem Ipsum is simply dummyLorem Ipsum is simply dummyLorem Ipsum is simply dummyLorem Ipsum is simply dummy.',
        date: ' 28th Dec 2020, 2:31 a.m.',
      })
      .map((obj) => {
        return {
          body: obj.body ,
          date: obj.data +'aaj ka din' ,
        };
      })
  );

  const [i, seti] = useState(0);
  const [x1, setX1] = useState('#C4C4C4');
  const [x2, setX2] = useState('#EF4646');


  const hc1 = (e) => {
    if (i > 15) {
      seti(i - 15);

      setX1('#EF4646');
      setX2('#EF4646');
    } else if (i <= 15) {
      seti(0);
      setX1('#C4C4C4');
      setX2('#EF4646');
    }
  };
  const hc2 = (e) => {
    if (i + 15 < DashData.length - 15) {
      seti(i + 15);
      setX1('#EF4646');
      setX2('#EF4646');
    } else if (DashData.length - (i + 15) < 15 && DashData.length - (i + 15) > 0) {
      seti(i + 15);
      setX2('#C4C4C4');
      setX1('#EF4646');
    } else if (i + 15 == DashData.length - 15) {
      seti(i + 15);
      setX2('#C4C4C4');
      setX1('#EF4646');
    } else {
      seti(i);
      setX2('#C4C4C4');
    }
  };


  return (
    <Fragment>
      <div className={classes.root} id="root">
        <div className="nav1">
          <PrimarySearchAppBar />
        </div>

        {/*Welcome message and heading*/}

        <div className={classes.mainContent} id="divtoprint">
          </div>
          <Box className={classes.inner}>
            <Box className={classes.cA}>

              <Box style={{ textAlign: 'center',display:'none' }} className={classes.c2}>
                <Typography className={classes.centre1}>Messages</Typography>
              </Box>
            </Box>
          <Grid container spacing={3}>
          <Grid item xs={12} sm={3} md={3} lg={4}>
          <Grid container spacing={3}>   
          <Grid item xs={6} sm={12} md={12} lg={12}>
          <LeftpaneTop/>
          </Grid>
          <Grid item xs={6} sm={12} md={12} lg={12}>
          <LeftpaneBottom/>
          </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={9} md={9} lg={8}>
            {load ? (
              <div className={classes.messages}>
                <Container>
                  <div className="spinwrap">
                    <div className="spinner">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </Container>
              </div>
            ) : (
              <Fragment>
                <div className={classes.messages}>
                  <Container>
                  {DashData.length > 0 ? (
                  DashData
                    .slice(
                      i,
                      i + 15 <= DashData.length
                        ? i + 15
                        : DashData.length
                    )
                    .map((message, index) => (
                      <DashBoardCards
                        body={message.body}
                        date={message.date}
                        key={DashData.indexOf(message)}
                        index={DashData.indexOf(message)}
                      />
                    ))
                ) : (
                  <h1 className={classes.noMessages}>
                    No Messages to Display!
                  </h1>
                )}
                  </Container>
                </div>

                <Grid
                  container
                  direction="row"
                  justify="center"
                  display="flex"
                  alignItems="center"
                >
                  <Grid item style={{ textAlign: 'center' }}>
                    <svg
                      onClick={hc1}
                      width="35"
                      height="23"
                      viewBox="0 0 48 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.46392e-07 11.5L47.25 22.3253L47.25 0.674681L5.46392e-07 11.5Z"
                        fill={x1}
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
                      {i + 15 < DashData.length ? i + 15 : DashData.length} of{' '}
                      {DashData.length}
                    </Button>
                  </Grid>
                  <Grid item style={{ textAlign: 'center' }}>
                    <svg
                      onClick={hc2}
                      width="35"
                      height="23"
                      viewBox="0 0 48 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M48 11.5L0.749999 22.3253L0.75 0.674681L48 11.5Z"
                        fill={DashData.length > 15 ? x2 : x1}
                      />
                    </svg>
                  </Grid>
                </Grid>
              </Fragment>
            )}
            </Grid>
           </Grid>   
          </Box>
          <div className={classes.tabs1} id="top"></div>
        </div>
        <div className={classes.footer} />
    </Fragment>
  );
}