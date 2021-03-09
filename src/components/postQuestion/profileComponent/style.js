import { makeStyles } from '@material-ui/core/styles';
import styles from '../../../constant-style.scss'

const useStyles = makeStyles({
    avatar: {
      width: '7.5rem',
      height: '7.5rem',
      padding: 0,
      margin: 0,
    },
    profileContainer: {
      marginBottom: '1.5rem',
      backgroundColor: styles.primaryColor,
      flexGrow: 19,
      maxHeight: '100%',
    },
    titleContainer: {
      backgroundColor: styles.secondaryColor,
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