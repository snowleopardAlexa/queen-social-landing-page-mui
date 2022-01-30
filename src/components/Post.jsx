import {
  makeStyles,
  Container,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button
} from "@material-ui/core";
import bohemian from '.././img/bohemian.jpeg'

const useStyles = makeStyles((theme) => ({
  card: {
      marginBottom: theme.spacing(5),
  },
  media: {
      height: 250,
  },
  buttonShare: {
      backgroundColor: '#9c27b0',
      color: 'white',
  },
  buttonLearnMore: {
    backgroundColor: '#00c853',
    color: 'white',
},
}));

function Post() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={bohemian}
            title="Bohemian Rhapsody is a global success!"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">Bohemian Rhapsody is a global success!</Typography>
            <Typography variant="body2">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
            <Button className={classes.buttonShare}>Share</Button>
            <Button className={classes.buttonLearnMore}>Learn More</Button>
        </CardActions>
      </Card>
    </Container>
  );
}

export default Post;
