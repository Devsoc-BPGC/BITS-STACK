import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
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