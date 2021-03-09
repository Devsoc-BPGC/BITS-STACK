import { makeStyles } from '@material-ui/core/styles';
import styles from '../../../constant-style.scss';

const useStyles = makeStyles({
    tipContainer: {
      marginTop: '1.5rem',
      backgroundColor: styles.primaryColor,
      flexGrow: 20,
      maxHeight: '100%',
    },
    titleContainer: {
      backgroundColor: styles.secondaryColor,
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