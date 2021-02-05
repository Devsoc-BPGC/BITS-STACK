import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import QuestionMarkdown from '../components/questionMarkdown';

const useStyles = makeStyles({
  root: {
    background: '#757575',
    fontSize: '17px',
    height: '100vh',
    overflowX: 'hidden',
  },
  avatar: {
    width: '7.5rem',
    height: '7.5rem',
    padding: 0,
    margin: 0,
  },
  body: {
    height: '30vh',
    marginBottom: '1.5rem',
  },
  container: {
    margin: '1.5rem',
    display: 'flex',
    height: '95%',
  },
  detailContainer: {
    margin: '1.5rem',
    maxHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  postQuestionContainer: {
    margin: '1.5rem',
    maxHeight: '100%',
    backgroundColor: '#f6f6f6',
    flexGrow: 50,
    maxWidth: '75%',
  },
  cta: {},
  profileContainer: {
    marginBottom: '1.5rem',
    backgroundColor: '#f6f6f6',
    flexGrow: 19,
    maxHeight: '40%',
  },
  tipContainer: {
    marginTop: '1.5rem',
    backgroundColor: '#f6f6f6',
    flexGrow: 20,
    maxHeight: '60%',
  },
  titleContainer: {
    backgroundColor: '#c4c4c4',
    padding: '1rem',
    paddingLeft: '1.5rem',
  },
  bigTitle: {
    fontSize: '1.5rem',
    fontWeight: 700,
  },
  smallTitle: {
    fontSize: '1.25rem',
    fontWeight: 700,
    marginBottom: '1rem',
  },
  tipTitle: {
    fontSize: '1.25rem',
    fontWeight: 700,
  },
  text: {
    fontSize: '1rem',
    fontWeight: 400,
    marginBottom: '1rem',
  },
  block: {
    padding: '2rem',
    paddingLeft: '1.5rem',
    maxHeight: '100%',
  },
});

const PostQuestion = () => {
  const classes = useStyles();
  const [data, setData] = useState({
    title: '',
    body: '',
    tags: '',
  });

  const handlePost = () => {
    console.log(data);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.postQuestionContainer}>
          <div className={classes.titleContainer}>
            <div className={classes.bigTitle}>Post a question</div>
          </div>
          <div className={classes.block}>
            <div>
              <div className={classes.smallTitle}>Title</div>
              <div className={classes.text}>
                Be specific and imagine you’re asking a question to another
                person
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <TextField
                  value={data.title}
                  onChange={e => setData({ ...data, title: e.target.value })}
                  id='outlined-basic'
                  fullWidth
                  variant='outlined'
                />
              </div>
            </div>

            <div>
              <div className={classes.smallTitle}>Body</div>
              <div className={classes.text}>
                Include all the information someone would need to answer your
                question
              </div>
              <div className={classes.body}>
                <QuestionMarkdown
                  setBody={body => setData({ ...data, body })}
                  height='25vh'
                />
              </div>
            </div>

            <div>
              <div className={classes.smallTitle}>Tags</div>
              <div className={classes.text}>
                Add tags that relate to your question
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <TextField
                  value={data.tags}
                  onChange={e => setData({ ...data, tags: e.target.value })}
                  id='outlined-basic'
                  fullWidth
                  variant='outlined'
                />
              </div>
            </div>

            <div className={classes.cta}>
              <Button
                variant='contained'
                style={{ marginRight: '1rem' }}
                onClick={handlePost}
              >
                Post Question
              </Button>
              <span>
                <Button>Cancel</Button>
              </span>
            </div>
          </div>
        </div>
        <div className={classes.detailContainer}>
          <div className={classes.profileContainer}>
            <div className={classes.titleContainer}>
              <div className={classes.bigTitle}>Profile</div>
            </div>

            <div className={classes.block}>
              <div style={{ paddingBottom: '1rem' }}>
                <center>
                  <Avatar
                    alt='profile img'
                    src='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'
                    className={classes.avatar}
                  />
                </center>
              </div>

              <div>
                <center className={classes.smallTitle}>Ayush Sharma</center>
              </div>

              <div>
                <center className={classes.text}>
                  f201xxxxx@goa.bits-pilani.ac.in
                </center>
              </div>
            </div>
          </div>

          <div className={classes.tipContainer}>
            <div className={classes.titleContainer}>
              <div className={classes.tipTitle} style={{ paddingBottom: 0 }}>
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
        </div>
      </div>
    </div>
  );
};

export default PostQuestion;