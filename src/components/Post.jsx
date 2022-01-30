import {
  makeStyles,
  Container,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import bohemian from '../.img/bohemian.jpeg'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

function Post() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Card>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={bohemian}
            title="Bohemian Rhapsody is a global success!"
          />
          <CardContent>
            <Typography variant="h5">My fIRST pOST</Typography>
            <Typography variant="body">
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
      </Card>
    </Container>
  );
}

export default Post;
