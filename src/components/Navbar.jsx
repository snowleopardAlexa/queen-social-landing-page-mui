import { makeStyles, AppBar, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  
}));

function Navbar() {

  const classes = useStyles()

  return (
    <AppBar>
        <Toolbar>
            <Typography variant="h1" component="h2">
               Heading
            </Typography>
        </Toolbar>
    </AppBar>
  );
}

export default Navbar;