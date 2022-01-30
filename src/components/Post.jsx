import { makeStyles, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  }
}));

function Post() {

  const classes = useStyles()

  return (
    <Container className={classes.container}>
      Post
    </Container>  
  );
}

export default Post;