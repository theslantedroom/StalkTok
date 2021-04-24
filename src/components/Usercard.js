import React from "react";
import './Usercard.css';


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    minWidth: 250,
    height: 400,
    margin: 3,
  },
  media: {
    height: 250,
  },
});

const Usercard = ({name, picture, location}) => {
    const classes = useStyles();
    return (
    <>

            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image= {picture.large}
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name.first} {name.last}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {location.country}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Insta-Creep
                    </Button>
                    <Button size="small" color="primary">
                    Message 
                    </Button>
                </CardActions>
            </Card>
    </>
    );
};

export default Usercard;