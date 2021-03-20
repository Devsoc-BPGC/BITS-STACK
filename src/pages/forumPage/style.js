import { makeStyles } from '@material-ui/core/styles';


  const useStyles = makeStyles(theme =>({
    root: {
      backgroundColor: '#EF4646',
      width: '100%',
      overflowX: 'hidden',
    },
    mainContent: {
      width: '100%',
      backgroundColor: '#EF4646',
      margin: '0px auto',
    },
    inner: {
        backgroundColor: '#FFFDE8',
        padding: '1.5rem',
        minHeight: '89.5vh',
        '@media(max-height 900px)': {
          minHeight: '90vh',
        },
      },
      messages: {
        width: '90%',
        display: 'flex',
        justifyContent: 'center',
        padding: '10px',
        margin: '0px auto 40px auto',
        minHeight: '30vh',
      },
      '@media(min-width: 0px)': {
        mobile: {
          display:'none',
        },
      },
      '@media(min-width: 600px)': {
        mobile: {
          display:'block',
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
      '@media(min-width: 320px)': {
        messages: {
          minHeight: '40vh',
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
      messages1: {
        width: '90%',
        display: 'flex',
        justifyContent: 'center',
        padding: '10px',
        margin: '0px auto 40px auto',
      },
      messages2: {
        width: '90%',
        display: 'flex',
        justifyContent: 'center',
        padding: '10px',
        margin: '0px auto 40px auto',
      },
    '@media(max-width: 600px)': {
        messages2: {
            display:'none',
        },
      },
  }));

  export default useStyles;