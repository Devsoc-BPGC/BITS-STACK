import React, { useState } from 'react';
import { Card, CardActions, Collapse, IconButton, CardContent } from '@material-ui/core';
import useStyles from './style';
import Grid from '@material-ui/core/Grid';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const MessageFilterCard = ({ index, body, date, question, name }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [showPrimaryText, setShowPrimaryText] = useState(false);



  return (
    <Card className={classes.msgCard} raised={true} >
      <div> 
        <Grid container>
        <Grid item xs={2} sm={2} md={1} lg={1}> 
        <div className={classes.cardwrap}>
            <div className={classes.cardLeftavatar}>
              <div className={classes.cardLefty}>
                
                  <ArrowUpwardIcon/>
  
                </div>
                <div className={classes.cardLeftyflex}>
                69

              </div>
              </div>
        </div>  
        </Grid>  

        <Grid item xs={10} sm={10} md={11} lg={11} className={classes.cardRight}>
        <div className={classes.cardContent}>
              {question}?
        </div>

        <CardContent>
        <div style={{ whiteSpace: 'pre-line' }}>
            <span className={classes.index}></span>
            {!showPrimaryText
              ? body.length > 80
                ? `${body.substr(0, 80)}...`
                : `${body}`
              : ''}
            <Collapse
              in={expanded}
              timeout="auto"
              unmountOnExit
              component="div"
            >
              {body}
            </Collapse>
          </div>
          <span
            onClick={() => {
              setExpanded(!expanded);
              setShowPrimaryText(!showPrimaryText);
            }}
          >
            {body.length > 80 ? (!expanded ? 'Read More' : 'Read Less') : ''}
          </span>
        </CardContent>

        <div className={classes.cardFooter}>
          <CardActions disableSpacing>
            <IconButton classes={{ root: classes.iconButton }}>
            </IconButton>
          </CardActions>
        </div>
        </Grid>
        </Grid> 

        <Grid container>
        <Grid item xs={2} sm={2} md={1} lg={1}> 
        <div className={classes.cardwrap}>
            <div className={classes.cardLeftavatar}>
                <div className={classes.cardLefty1}>

                  <ArrowDownwardIcon/>
 
                </div>
                <div className={classes.cardLeftyflex1}>
                69

              </div>
              </div>
        </div>  
        </Grid>  

        <Grid item xs={10} sm={10} md={11} lg={11} className={classes.cardRight}>


        <div className={classes.cardFooter}>
          <CardActions disableSpacing>
            

            <div className={classes.photodabba}>

            </div>
            <div className={classes.manfont}>
              {name}
              <br/>
              <i className={classes.manfont}>asked 1d ago</i>
            </div>

            <IconButton classes={{ root: classes.iconButton }}>
              
            </IconButton>
          </CardActions>
        </div>
        </Grid>
        </Grid> 
      </div>
    </Card>
  );
};

export default MessageFilterCard;
