import { useState, Fragment, useEffect, createContext } from 'react';
import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MessageFilterCard from '../DashBoard/DashBoardFilterCards';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import CloseIcon from '@material-ui/icons/Close';
//export const Data = createContext();
//import axios from 'axios';
//export const Data1 = createContext();
import PrimarySearchAppBar from '../navbar/navbar';
import { Redirect } from 'react-router-dom';
import '../DashBoard/loader.css';
import useStyles from '../DashBoard/DashBoardStyles';
import LeftpaneTop from '../leftpanecomponent/leftpanetop';
import LeftpaneBottom from '../leftpanecomponent/leftpanebottom';
import { Paper } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';

export default function DashBoardSecond() {
  const classes = useStyles();
  const [filterval,setfilterval]=useState("");
  const handleChange=(e)=>{
      setfilterval(e.target.value);
  }  
  const [load, setload] = useState(false);
  const [DashData, setDashData] = useState(
    Array(50)
      .fill({
        body:
          'Lorem Ipsum is simply dummy Lorem Ipsum is simply dummyLorem Ipsum is simply dummyLorem Ipsum is simply dummyLorem Ipsum is simply dummyLorem Ipsum is simply dummy.',
        date: ' 28th Dec 2020, 2:31 a.m.',
      })
      .map((obj) => {
        return {
          body: obj.body,
          date: obj.data + 'aaj ka din',
        };
      })
  );

  const [i, seti] = useState(0);
  const [Leftcolour, setLeftcolour] = useState('#C4C4C4');
  const [Rightcolour, setRightcolour] = useState('#EF4646');

  const leftclick = (e) => {
    if (i > 5) {
      seti(i - 5);

      setLeftcolour('#EF4646');
      setRightcolour('#EF4646');
    } else if (i <= 5) {
      seti(0);
      setLeftcolour('#C4C4C4');
      setRightcolour('#EF4646');
    }
  };
  const rightclick = (e) => {
    if (i + 5 < DashData.length - 5) {
      seti(i + 5);
      setLeftcolour('#EF4646');
      setRightcolour('#EF4646');
    } else if (DashData.length - (i + 5) < 5 && DashData.length - (i + 5) > 0) {
      seti(i + 5);
      setRightcolour('#C4C4C4');
      setLeftcolour('#EF4646');
    } else if (i + 5 == DashData.length - 5) {
      seti(i + 5);
      setRightcolour('#C4C4C4');
      setLeftcolour('#EF4646');
    } else {
      seti(i);
      setRightcolour('#C4C4C4');
    }
  };

  return (
    <Fragment>
      <div className={classes.root} id="root">
        <div className="nav1">
          <PrimarySearchAppBar />
        </div>

        {/*Welcome message and heading*/}

        <div className={classes.mainContent} id="divtoprint"></div>
        <Box className={classes.inner}>
          <Box className={classes.cA}>
            <Box
              style={{ textAlign: 'center', display: 'none' }}
              className={classes.c2}
            >
              <Typography className={classes.centre1}>Messages</Typography>
            </Box>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3} md={2} lg={2}>
              <Grid container spacing={3}>
                <Grid item xs={6} sm={12} md={12} lg={12}>
                  <LeftpaneTop />
                </Grid>
                <Grid item xs={6} sm={12} md={12} lg={12}>
                  <LeftpaneBottom />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={9} md={8} lg={9}>
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
                  <div className={classes.filter}>
                  <Paper> 
                    <FormControl fullWidth className={classes.margin} variant="filled">
                        <InputLabel htmlFor="filled-adornment-amount">Filter by label</InputLabel>
                        <FilledInput
                        id="filled-adornment-amount"
                        value={filterval}
                        onChange={handleChange}
                        startAdornment={<InputAdornment position="start"><FilterListIcon/></InputAdornment>}
                    />
                    </FormControl>
                    </Paper>   
                    <Grid container style={{marginTop:'40px',flexGrow:1}} spacing={0}>          
                        Applied filters :                            
                            <Grid item xs={3}  className={classes.filters} >EEE<CloseIcon className={classes.iconclose} /></Grid>
                            <Grid item xs={3}  className={classes.filters} >TUT<CloseIcon className={classes.iconclose} /></Grid>
                            <Grid item xs={3}  className={classes.filters} >hello<CloseIcon className={classes.iconclose} /></Grid>             
                            <Grid item xs={3}  className={classes.filters} >EEE<CloseIcon className={classes.iconclose} /></Grid>
                            <Grid item xs={3}  className={classes.filters} >TUT<CloseIcon className={classes.iconclose} /></Grid>
                            <Grid item xs={3}  className={classes.filters} >hello<CloseIcon className={classes.iconclose} /></Grid>            
                    </Grid>
                  </div>  
                  <div className={classes.messages} style={{marginTop:'0px'}}>
                    <Container>
                      {DashData.length > 0 ? (
                        DashData.slice(
                          i,
                          i + 5 <= DashData.length ? i + 5 : DashData.length
                        ).map((message, index) => (
                          <MessageFilterCard
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
