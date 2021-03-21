import React,{Fragment,useState} from 'react';
import PrimarySearchAppBar from '../../components/navbar/navbar';
import useStyles from './styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import QuestionCards from '../../components/dashBoard/questionCards/index';
import AnswerCards from '../../components/dashBoard/answerCards/index';
import LeftpaneTop from '../../components/leftpanecomponent/normalView/leftpanetop';
import LeftpaneBottom from '../../components/leftpanecomponent/normalView/leftpanebottom';
import Typography from '@material-ui/core/Typography';
import Paginator from '../../components/dashBoard/paginator/index';

const Channels = () => {
    const classes = useStyles();
    const [filterval,setfilterval]=useState("");
    const handleChange=(e)=>{
        setfilterval(e.target.value);
    }  
    const [DashQuestions, setDashQuestions] = useState(
      Array(2)
        .fill({
          body:
            'Lorem Ipsum is simply dummy Lorem Ipsum is ?',
          date: 'posted 2hrs ago by',
          name: 'Kick Buttoswki',
        })
        .map((obj) => {
          return {
            body: obj.body,
            date: obj.date,
            name: obj.name
          };
        })
    );

    const [DashAnswers, setDashAnswers] = useState(
        Array(2)
          .fill({
            body:
              'Lorem Ipsum is simply dummy Lorem Ipsum is simply dummyLorem Ipsum is simply dummyLorem Ipsum is simply dummyLorem Ipsum is simply dummyLorem Ipsum is simply dummy.',
            date: 'answered 2hrs ago',
            name: 'Kick Buttoswki'
          })
          .map((obj) => {
            return {
              body: obj.body,
              date: obj.date,
              name: obj.name
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
      if (i + 5 < DashQuestions.length - 5) {
        seti(i + 5);
        setLeftcolour('#EF4646');
        setRightcolour('#EF4646');
      } else if (DashQuestions.length - (i + 5) < 5 && DashQuestions.length - (i + 5) > 0) {
        seti(i + 5);
        setRightcolour('#C4C4C4');
        setLeftcolour('#EF4646');
      } else if (i + 5 == DashQuestions.length - 5) {
        seti(i + 5);
        setRightcolour('#C4C4C4');
        setLeftcolour('#EF4646');
      } else {
        seti(i);
        setRightcolour('#C4C4C4');
      }
    };
  
return(
  <Fragment>
    <div className={classes.root} id="root">
      <div className="nav1">
        <PrimarySearchAppBar />
      </div>
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
          <Grid container spacing={3}>
            <Grid className={classes.mobile}  item xs={12} sm={3} md={2} lg={2}>
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
                <Fragment>
                  <div className={classes.messages}>
                    <Container>
                      {DashQuestions.length > 0 ? (
                        DashQuestions.slice(
                          i,
                          i + 5 <= DashQuestions.length ? i + 5 : DashQuestions.length
                        ).map((message, index) => (
                          <QuestionCards
                            body={message.body}
                            date={message.date}
                            name={message.name}
                            key={DashQuestions.indexOf(message)}
                            index={DashQuestions.indexOf(message)}
                          />
                        ))
                      ) : (
                        <h1 className={classes.noMessages}>
                          No Messages to Display!
                        </h1>
                      )}
                    </Container>
                  </div>
                  
                  {/* Answer Cards UI Construction and Testing Below  */}  


                  <div className={classes.messages}>
                    <Container>
                      {DashAnswers.length > 0 ? (
                        DashAnswers.slice(
                          i,
                          i + 5 <= DashAnswers.length ? i + 5 : DashAnswers.length
                        ).map((message, index) => (
                          <AnswerCards
                            body={message.body}
                            date={message.date}
                            name={message.name}
                            key={DashAnswers.indexOf(message)}
                            index={DashAnswers.indexOf(message)}
                          />
                        ))
                      ) : (
                        <h1 className={classes.noMessages}>
                          No Messages to Display!
                        </h1>
                      )}
                    </Container>
                  </div>                        


                  {/* Answer Cards UI Construction and Testing Above  */}       
                  <Paginator Leftcolour={Leftcolour} Rightcolour={Rightcolour} i={i} rightclick={rightclick} leftclick={leftclick} DashData={DashQuestions}/>    
                </Fragment>
            </Grid>
          </Grid>
        </Box>
      </div>
  </Fragment>
 );
}

export default Channels;

