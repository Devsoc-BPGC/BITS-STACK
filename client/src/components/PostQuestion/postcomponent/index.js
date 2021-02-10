import React, { useState, useEffect } from 'react';
import useStyles from '../postcomponent/style';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import QuestionMarkdown from './questionMarkdown';

export default function PostComponent() {
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
  );
}
