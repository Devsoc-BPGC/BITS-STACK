import React, { useState } from 'react';
import useStyles from '../PostQuestion/poststyles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import QuestionMarkdown from './questionMarkdown';
import Grid from '@material-ui/core/Grid';

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
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={8} lg={9}>
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
                    onChange={(e) =>
                      setData({ ...data, title: e.target.value })
                    }
                    id="outlined-basic"
                    fullWidth
                    variant="outlined"
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
                    setBody={(body) => setData({ ...data, body })}
                    height={window.width>360?"25vh":"19vh"}
                  />
                </div>
              </div>

              <div className={classes.gap}>
                <div className={classes.smallTitle}>Tags</div>
                <div className={classes.text}>
                  Add tags that relate to your question
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <TextField
                    value={data.tags}
                    onChange={(e) => setData({ ...data, tags: e.target.value })}
                    id="outlined-basic"
                    fullWidth
                    variant="outlined"
                  />
                </div>
              </div>

              <div className={classes.cta}>
                <Button
                  variant="contained"
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
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Grid container spacing={0}>
            <div className={classes.detailContainer}>
              <Grid item xs={6} sm={6} md={12} lg={12}>
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
              </Grid>
              <Grid item xs={6} sm={6} md={12} lg={12}>
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
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default PostQuestion;
