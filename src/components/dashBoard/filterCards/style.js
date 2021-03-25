import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) =>({
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
      photodabba:{
        //marginLeft: '100px',        
        height:'45px',
        width:'45px',
        backgroundColor:'red',   
        marginRight:'3px',
        '@media(max-width: 600px)': {
          height:'35px',
          width:'35px',
        },
        '@media(max-width: 400px)': {
          height:'28px',
          width:'28px',
        },
      },
      cardFooter: {
        width:'100%',
        display:'flex',
        justifyContent:'flex-end',
        //border: '1px solid #2d2d2d'
      },
      manfont:{
        fontSize:'14px',
        '@media(max-width: 600px)': {
          fontSize:'12px',
        },
      },
      cardLeftavatar:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        '@media(max-width: 420px)': {
          marginLeft:'-10px',
        },
        '@media(max-width: 600px)': {
          marginLeft:'-10px',
        },
        //minHeight:'10vh',
      },
      cardwrap:{
        //minHeight:'80px'
      },
      cardLefty:{
       // marginBottom:'100px',
      },
      cardLeftyflex:{
        fontSize:'15px',
        marginBottom:'20px',
       // marginBottom:'100px',
      },
      cardLefty1:{
        //marginTop:'10vh',
        //marginBottom:'100%x',
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
      iconButton: {
        padding: 0,
        margin: '5px 10px',
      },
  }));

export default useStyles;