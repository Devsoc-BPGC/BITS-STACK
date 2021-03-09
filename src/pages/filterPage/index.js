import React,{Fragment} from 'react';
import PrimarySearchAppBar from '../../components/navbar/navbar';
import useStyles from './styles';

const FilterPage = () => {
    const classes = useStyles();
  
return(
  <Fragment>
    <div className={classes.root} id="root">
      <div className="nav1">
        <PrimarySearchAppBar />
      </div>
    </div>
  </Fragment>
 );
}

export default FilterPage;

