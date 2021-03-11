import { makeStyles } from '@material-ui/core/styles';


  const useStyles = makeStyles({
    root: {
      backgroundColor: '#EF4646',
      width: '100%',
      overflowX: 'hidden',
    },
    messages: {
      width: '90%',
      display: 'flex',
      justifyContent: 'center',
      padding: '10px',
      margin: '0px auto 40px auto',
      minHeight: '30vh',
    },
      '@media(min-width: 1280px)': {
        cardRight: {
          marginLeft:'-40px',
        },
      },
      '@media(min-width: 1420px)': {
        cardRight: {
          marginLeft:'-50px',
        },
      },
    mainContent: {
      width: '100%',
      backgroundColor: '#EF4646',
      margin: '0px auto',
    },
    centreAt1: {
        display: 'flex',
        flexDirection: 'column',
      },
    '@media(max-width: 600px)': {
      mobile: {
        display:'none',
      },
    },
    headprofile: {
      position:'absolute', 
      left:'30vw',
      transform: 'scale(1.1)',
    },
    hot: {
      color: '#EF4646',
      fontFamily: 'Oxygen',
      fontWeight: 'bold',
      fontSize: '2.6vmax',
    },
    filter :{
      width:'90%',
      minHeight:'40px',
      marginLeft:'10px',
      marginTop:'30px',
      '&:hover': {
        cursor: 'pointer',
      },
    },
    '@media(min-width: 820px)': {
      filter :{
        width:'90%',   
        marginLeft:'56px',
        marginTop:'100px',
      },
    },
    inner: {
      backgroundColor: '#FFFDE8',
      padding: '1.5rem',
      minHeight: '89.5vh',
      '@media(max-height 900px)': {
        minHeight: '90vh',
      },
    },
    footer: {
      width: '100%',
      backgroundColor: '#EF4646',
      height: '1px',
    },
    '@media(min-width: 320px)': {
      messages: {
        minHeight: '40vh',
      },
    },
    '@media(min-width: 360px)': {
      messages: {
        minHeight: '45vh',
      },
    },
    '@media(min-width: 414px)': {
      messages: {
        minHeight: '60vh',
      },
    },
    '@media(min-width: 768px)': {
      messages: {
        minHeight: '50vh',
      },
    },
    '@media(min-width: 1024px)': {
      messages: {
        minHeight: '40vh',
      },
    },
  });

  export default useStyles;