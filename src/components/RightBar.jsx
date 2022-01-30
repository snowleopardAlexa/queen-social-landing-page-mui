import { makeStyles, Container, Typography, ImageList, ImageListItem } from "@material-ui/core";
import { AvatarGroup, Avatar } from "@material-ui/lab";
import john from ".././img/john.png";
import brian from ".././img/brian.jpeg";
import roger from ".././img/roger.png";
import yellow from ".././img/yellow.jpeg";
import london from ".././img/london.jpeg";
import women from ".././img/women.png";
import tall from ".././img/tall.jpeg";
import white from ".././img/white.jpeg";
import butterflies from ".././img/butterflies.jpeg";

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
     <Typography className={classes.title} gutterBottom>Gallery</Typography>
     <ImageList rowHeight={100} style={{ marginBottom: 20 }} cols={2}>
        <ImageListItem>
          <img src={yellow} alt="Yellow Freddie" />
        </ImageListItem>
        <ImageListItem>
          <img src={london} alt="London" />
        </ImageListItem>
        <ImageListItem>
          <img src={women} alt="Queen as Women" />
        </ImageListItem>
        <ImageListItem>
          <img src={tall} alt="Tall building" />
        </ImageListItem>
        <ImageListItem>
          <img src={white} alt="White Outfits" />
        </ImageListItem>
        <ImageListItem>
          <img src={butterflies} alt="With butterflies" />
        </ImageListItem>
      </ImageList>
  </Container> 
  );
}

export default RightBar;