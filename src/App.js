import { Button, makeStyles } from '@material-ui/core';
import { Person } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  button: {
   ...theme.myButton
  }
}));

function App() {

  const classes = useStyles()

  return (
    <div className="App">
        <Button
          variant="contained"
          size="large"
          startIcon={<Person />}
          className={classes.button}
        >
          Material UI
        </Button>
    </div>
  );
}

export default App;
