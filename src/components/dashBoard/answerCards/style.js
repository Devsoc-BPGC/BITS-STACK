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
      date1:{
        fontStyle:'italic',
        marginLeft: '11px'
      },
      cardLeftavatar:{
        fontSize:'20px',
      },
      cardContent: {
        marginLeft: '20px',
        fontFamily: 'Raleway',
        fontWeight: 500,
        fontStyle: 'normal',
      },
      '@media(min-width: 270px)': {
        cardContent: {
          marginLeft: '31px',
          fontSize: '16px',
        },
        date1:{
          marginLeft: '31px',
          fontSize: '13px'
        },
      },
      '@media(min-width: 540px)': {
        cardContent: {
          marginLeft: '25px',
          fontSize: '16px',
        },
        date1:{
          marginLeft: '25px',
          fontSize: '14px'
        },
      },
      '@media(min-width: 1024px)': {
        cardContent: {
          marginLeft: '9px',
          fontSize: '18px',
        },
        date1:{
          marginLeft: '9px',
          fontSize: '16px'
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
      icon: {
        fontSize: 'large',
      },
      small: {
        fontSize :'18px',
      },
      '@media(min-width: 200px)': {
        date: {
          margin: '0px 15px 0 -20px',
          fontSize: '12px',
        },
        icon: {
          fontSize: 'medium',
        },
        small: {
          fontSize :'12px',
        },
      },
      '@media(min-width: 720px)': {
        date: {
          margin: '0px 15px 0 0',
          fontSize: '16px',
        },
        icon: {
          fontSize: 'large',
        },
        small: {
          fontSize :'15px',
        },
      },
      iconButton: {
        padding: 0,
        margin: '5px 10px',
      },
  });

export default useStyles;