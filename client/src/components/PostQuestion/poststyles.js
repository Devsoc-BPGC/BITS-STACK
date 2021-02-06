import { makeStyles } from '@material-ui/core/styles';

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
      maxHeight: '100%',
    },
    tipContainer: {
      marginTop: '1.5rem',
      backgroundColor: '#f6f6f6',
      flexGrow: 20,
      maxHeight: '100%',
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
   /* '@media(min-width: 360px)': {
        gap: {
                marginTop:'2rem',
          },
      },*/
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

export default useStyles;