import { makeStyles } from '@material-ui/core/styles';
import styles from '../../constant-style.scss'

const useStyles = makeStyles({
    root: {
      background: '#757575',
      fontSize: '17px',
      height: '100vh',
      overflowX: 'hidden',
    },
    detailContainer: {
        margin: '1.5rem',
        maxHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
      },
  });

export default useStyles;