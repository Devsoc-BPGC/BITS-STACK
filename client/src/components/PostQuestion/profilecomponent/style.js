import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    avatar: {
      width: '7.5rem',
      height: '7.5rem',
      padding: 0,
      margin: 0,
    },
    cta: {},
    profileContainer: {
      marginBottom: '1.5rem',
      backgroundColor: '#f6f6f6',
      flexGrow: 19,
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