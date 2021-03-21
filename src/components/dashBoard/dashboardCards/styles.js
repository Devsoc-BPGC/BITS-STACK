import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    msgCard: {
        padding: '15px',
        marginTop: '20px',
        backgroundColor: '#FFD94D',
        transition: 'all ease-in-out 0.3s',
        '&:hover': {
          cursor: 'pointer',
          transform: 'translateY(-2px)',
        },
      },
      cardLeftavatar:{
        fontSize:'20px',
      },
      cardContent: {
        margin: 0,
        fontFamily: 'Raleway',
        fontWeight: 500,
        fontStyle: 'normal',
      },
      '@media(min-width: 540px)': {
        cardContent: {
          fontSize: '16px',
        },
      },
      '@media(min-width: 1024px)': {
        cardContent: {
          fontSize: '18px',
        },
      },
      index: {
        fontSize: '18px',
        fontFamily: 'Oxygen, sans-serif',
        fontWeight: 700,
        padding: 0,
      },
      cardFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: 0,
      },
      date: {
        margin: '30px 15px 0 0',
        fontStyle: 'italic',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 700,
      },
      '@media(min-width: 320px)': {
        date: {
          margin: '20px 15px 0 0',
        },
      },
      '@media(min-width: 720px)': {
        date: {
          margin: '30px 15px 0 0',
          fontSize: '16px',
        },
      },
      iconButton: {
        padding: 0,
        margin: '5px 10px',
      },
  });

export default useStyles;