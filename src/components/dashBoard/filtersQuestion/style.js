import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    filters: {
        minHeight:'30px',
        maxHeight:'40px',
        minWidth:'60px',
        maxWidth:'80px',
        textAlign:'center',
        borderRadius:'50px',
        background:'#2BC8D2',
        margin:'4px 3px 0 27px',
      },  
      iconclose: {
        fontSize:'small',
        marginLeft:'4px'
      },
      filtersetter:{
        marginTop:'20px', 
        marginLeft:'-30px',
        minWidth:'100%', 
        flexGrow:1,
        '@media(max-width: 470px)': {
          minWidth:'120%',
        },
        '@media(max-width: 330px)': {
          minWidth:'130%',
        },
      }
  });

export default useStyles;