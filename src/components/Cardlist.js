import React from 'react';
import Usercard from './Usercard'

// material ui
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";



import './Cardlist.css';

const useStyles = makeStyles((theme) => ({
  grid: {
    flexGrow: 1
  }
}));


function Cardlist(props){
    console.log('CardListprops', props.JSONdataArray);
    const {JSONdataArray} = props;
    const classes = useStyles();
    console.log('useStyles',useStyles());

    return(
       <Grid container className={classes.grid}>
           {
               
               JSONdataArray.map((JSONdataArrayToCard, index)=>{
                return <>
                <Grid item xs>
                    <Usercard 
                    key={JSONdataArrayToCard.login.uuid} 
                    {...JSONdataArrayToCard} 
                    item/>
                </Grid>

                </>
               })
           }
       </Grid>
    ) 
};

export default Cardlist;



