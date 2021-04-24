import React, { useState, useEffect } from 'react';
import Cardlist from '../components/Cardlist'
import PrimarySearchAppBar from '../components/PrimarySearchAppBar'


import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles((theme) => ({
  button: {
    '& > *': {
      margin: theme.spacing(7),
    },
  },
}));


function App() {
  const classes = useStyles();

  const getDataFromUrl = (count) => {
      const url = 'https://randomuser.me/api/?results=' + count
      // get the data from the api and convert into js object for use in this app
      fetch(url).then((response)=> response.json())
      // store the data in an array
      .then((data)=>{
          setApiData( data['results']);
      }).then(()=>{
    })
  }
  const [apiData, setApiData] = useState([])
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You are creeping ${count} people`;
  });

  const handleCreepClick = () => {
    getDataFromUrl(15);
    setCount(prevCount => prevCount + 1);
  }


  if (apiData.length == 0) {
  console.log('nodata');
  return (
    <>
        <CssBaseline />
        <Container maxWidth="lg">
        <PrimarySearchAppBar></PrimarySearchAppBar>

        <Button className={classes.button} onClick={handleCreepClick} variant="contained">InstaCreep - Click Me - </Button>


        <Cardlist JSONdataArray={apiData}></Cardlist>
      </Container>

    
    </>
  )
} else {
    return (
    <>
        <CssBaseline />
        <Container maxWidth="lg">
        <PrimarySearchAppBar></PrimarySearchAppBar>

        <Button onClick={handleCreepClick} variant="contained">Click here to creep more people - You have creeped {count} times!</Button> 
        <Cardlist JSONdataArray={apiData}></Cardlist>

      </Container>

    
    </>
  );
}



}


export default App;