import { makeStyles, Container, Typography } from "@material-ui/core";
import { AvatarGroup, Avatar } from "@material-ui/lab";
import john from ".././img/john.png";
import brian from ".././img/brian.jpeg";
import roger from ".././img/roger.png";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555"
  }
}));

function RightBar() {

  const classes = useStyles()

  return (
  <Container className={classes.container}>
     <Typography className={classes.title} gutterBottom>Online Friends</Typography>
     <AvatarGroup max={4}>
       <Avatar alt="Brian May" src={brian} />
       <Avatar alt="John Deacon" src={john} />
       <Avatar alt="Roger Tayler" src={roger} />
       <Avatar alt="Tina Turner" />
       <Avatar alt="Roger Tayler" src={roger} />
       <Avatar alt="Roger Tayler" src={roger} />
       <Avatar alt="Roger Tayler" src={roger} />
     </AvatarGroup>
  </Container> 
  );
}

export default RightBar;