import { makeStyles, Grid } from "@material-ui/core";
import Navbar from './components/Navbar';
import LeftBar from './components/LeftBar';
import RightBar from './components/RightBar';
import Feed from './components/Feed';

const useStyles = makeStyles((theme) => ({
  
}));

function App() {

  const classes = useStyles()

  return (
    <div className="app">
      <Navbar />
      <Grid container>
        <Grid item sm={2}>
        <LeftBar />
        </Grid>
        <Grid item sm={7}>
          <Feed />
        </Grid>
        <Grid item sm={3}>
          <RightBar />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
