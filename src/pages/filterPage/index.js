import React,{Fragment,useState} from 'react';
import PrimarySearchAppBar from '../../components/navbar/navbar';
import useStyles from './styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MessageFilterCard from '../../components/dashBoard/filterCards/index';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import LeftpaneTop from '../../components/leftpanecomponent/normalView/leftpanetop';
import LeftpaneBottom from '../../components/leftpanecomponent/normalView/leftpanebottom';
import { Paper } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';
import Filters from '../../components/dashBoard/filters/index';
import Paginator from '../../components/dashBoard/paginator/index';

const FilterPage = () => {
    const classes = useStyles();
    const [filterval,setfilterval]=useState("");
    const handleChange=(e)=>{
        setfilterval(e.target.value);
    }  
    const [DashData, setDashData] = useState(
      Array(50)
        .fill({
          question:
            'Lorem Ipsum is simply dummy Lorem Ipsum is ',
            body:
            'Lorem Ipsum is simply dummy Lorem Ipsum is Lorem Ipsum is simply dummy Lorem Ipsum is Lorem Ipsum is simply dummy Lorem Ipsum is ',            
          date: ' 28th Dec 2020, 2:31 a.m.',
          name:'hemlo rendi'
        })
        .map((obj) => {
          return {
            body: obj.body,
            question: obj.question,
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
  
return(
  <Fragment>
    <div className={classes.root} id="root">
      <div className="nav1">
        <PrimarySearchAppBar />
      </div>
      <div className={classes.mainContent} id="divtoprint"></div>
        <Box className={classes.inner}>
          <Grid container spacing={2}>
            <Grid className={classes.mobile} item xs={12} sm={3} md={2} lg={2}>
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
                  <div className={classes.filter}>
                  <Paper> 
                    <FormControl fullWidth className={classes.marginleftset} variant="filled">
                        <InputLabel htmlFor="filled-adornment-amount">Filter by label</InputLabel>
                        <FilledInput
                        id="filled-adornment-amount"
                        value={filterval}
                        onChange={handleChange}
                        startAdornment={<InputAdornment position="start"><FilterListIcon/></InputAdornment>}
                    />
                    </FormControl>
                    </Paper>   
                    <Filters/>
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
                            name={message.name}
                            question={message.question}
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
                  <Paginator Leftcolour={Leftcolour} Rightcolour={Rightcolour} i={i} rightclick={rightclick} leftclick={leftclick} DashData={DashData}/>    
                </Fragment>
            </Grid>
          </Grid>
        </Box>
      </div>
  </Fragment>
 );
}

export default FilterPage;

