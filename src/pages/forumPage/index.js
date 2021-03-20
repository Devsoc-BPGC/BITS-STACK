import { useState, Fragment, useEffect, createContext } from 'react';
import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import PrimarySearchAppBar from '../../components/navbar/navbar';
import useStyles from './style';
import LeftpaneTop from '../../components/leftpanecomponent/normalView/leftpanetop';
import LeftpaneBottom from '../../components/leftpanecomponent/normalView/leftpanebottom';
import AnnouncementCards from '../../components/dashBoard/Announcements/index';
import Followup from '../../components/dashBoard/Followup/index';

export default function ForumPage() {
  const classes = useStyles();
  const [Announcementdata, setAnnouncementdata] = useState(
    Array(50)
      .fill({
        body:
          'Lorem Ipsum is simply dummy Lorem Ipsum is simply dummyLorem Ipsum is simply dummyLorem Ipsum is simply dummyLorem Ipsum is simply dummyLorem Ipsum is simply dummy.',
      })
      .map((obj) => {
        return {
          body: obj.body,
        };
      })
  );

  return (
    <Fragment>
      <div className={classes.root} id="root">
        <div className="nav1">
          <PrimarySearchAppBar />
        </div>
        <div className={classes.mainContent} id="divtoprint"></div>
        <Box className={classes.inner}>
          <Grid container spacing={1}>
            <Grid className={classes.mobile}  item xs={12} sm={2} md={2} lg={2}>
              <Grid container spacing={3}>
                <Grid item xs={6} sm={12} md={12} lg={12}>
                  <LeftpaneTop />
                </Grid>
                <Grid item xs={6} sm={12} md={12} lg={12}>
                  <LeftpaneBottom />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={7}>
                <Fragment>
                  <div className={classes.messages2}>
                    <IconButton style={{marginTop: '-2vh'}}>
                      <Avatar />
                    </IconButton>
                    <Typography>
                      <b>Devesh Kumar</b>
                      <br />
                      f201902xx@goa.bits-pilani.ac.in
                    </Typography>
                  </div>
                  <div className={classes.messages}>
                    <Container style={{ marginTop: '0px' }}>
                      <AnnouncementCards body={Announcementdata.body} />
                    </Container>
                  </div>
                  <div className={classes.messages1}>
                    <Button variant="contained">Ask a Question</Button>
                  </div>
                </Fragment>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={3}>
                <Fragment>
                  <Followup />
                </Fragment>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Fragment>
  );
}
