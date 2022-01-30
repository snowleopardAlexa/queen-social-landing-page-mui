import { makeStyles, AppBar, Toolbar, Typography } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  
}));

function Navbar() {

  const classes = useStyles()

  return (
    <AppBar>
        <Toolbar>
            <Typography variant="h6">
               Social Landing Page
            </Typography>
        </Toolbar>
    </AppBar>
  );
}

export default Navbar;