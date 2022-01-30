import { makeStyles, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  }
}));

function Feed() {

  const classes = useStyles()

  return (
    <Container className={classes.container}>
      Feed
    </Container>  
  );
}

export default Feed;