import {
  makeStyles,
  Container,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button, 
  Link
} from "@material-ui/core";
import bohemian from '.././img/bohemian.jpeg'

const useStyles = makeStyles((theme) => ({
  card: {
      marginBottom: theme.spacing(5),
  },
  title: {
    fontFamily: 'Outfit',
 },
  body: {
     fontFamily: 'Poppins',
  },
  media: {
      height: 250,
      [theme.breakpoints.down("sm")]: {
          height: 150,
      }
  },
  buttonShare: {
      backgroundColor: '#9c27b0',
      color: 'white',
      fontFamily: 'Outfit',
  },
  buttonLearnMore: {
    backgroundColor: '#00c853',
    color: 'white',
    fontFamily: 'Outfit',
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
            <Typography className={classes.title}gutterBottom variant="h5">Bohemian Rhapsody is a global success!</Typography>
            <Typography className={classes.body} variant="body2">
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
            <Button className={classes.buttonShare}><Link href="#">Share</Link></Button>
            <Button className={classes.buttonLearnMore}><Link href="#">Learn More</Link></Button>
        </CardActions>
      </Card>
    </Container>
  );
}

export default Post;
