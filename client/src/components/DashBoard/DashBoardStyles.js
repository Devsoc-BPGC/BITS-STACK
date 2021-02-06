import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   /* '@global': {
      '*::-webkit-scrollbar': {
        width: '10px',
        backgroundColor: '#FFFDE8',
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: '#EF4646',
        borderRight: '3px solid #FFFDE8',
        borderLeft: '3px solid #FFFDE8',
      },
    },*/
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
    mainContent: {
      width: '100%',
      backgroundColor: '#EF4646',
      margin: '0px auto',
    },
    cA: {
      display: 'flex',
      flexDirection: 'column',
    },
    c1: {
      padding: '2rem 0rem 0rem 4rem',
      width: '92vw',
    },
    c2: {
      width: '92vw',
    },
    fab: {
      width: '100%',
      height: '100%',
      zIndex: 1,
    },
    fabButton: {
      position: 'fixed',
      bottom: 1,
      right: 1,
      margin: '0rem 2rem 2rem 0rem',
    },
    fabButtonIcon: {
      transform: 'scale(3)',
    },
    hot: {
      color: '#EF4646',
      fontFamily: 'Oxygen',
      fontWeight: 'bold',
      fontSize: '2.6vmax',
    },
    centre1: {
      fontFamily: 'Oxygen',
      fontWeight: 'bold',
      fontSize: '2.2vmax',
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
      cA: {
        padding: 0,
        width: '100%',
        alignItems: 'center',
      },
      c1: {
        padding: 0,
        width: 'max-content',
        textAlign: 'center',
      },
      c2: {
        padding: 0,
        width: 'max-content',
        textAlign: 'center',
      },
      centre1: {
        fontSize: '1rem',
      },
      messages: {
        minHeight: '40vh',
      },
    },
    '@media(min-width: 360px)': {
      messages: {
        minHeight: '45vh',
      },
      fabButtonIcon: {
        transform: 'scale(3)',
      },
    },
    '@media(min-width: 414px)': {
      messages: {
        minHeight: '60vh',
      },
      fabButton: {
        margin: '0rem 2rem 2rem 0rem',
      },
      fabButtonIcon: {
        transform: 'scale(3)',
      },
    },
    '@media(min-width: 768px)': {
      cA: {
        padding: '0rem 1rem',
        width: 'max-content',
        alignItems: 'flex-start',
      },
      c1: {
        width: '92vw',
        textAlign: 'left',
      },
      c2: {
        width: '92vw',
      },
      centre1: {
        fontSize: '1.5rem',
      },
      messages: {
        minHeight: '50vh',
      },
    },
    '@media(min-width: 1024px)': {
      messages: {
        minHeight: '40vh',
      },
    },
  }));

  export default useStyles;