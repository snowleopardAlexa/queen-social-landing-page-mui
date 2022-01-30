import { makeStyles, AppBar, Toolbar, Typography } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  logoLg: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
          display: "block",
      },
    },
    logoSm: {
       display: "block",
       [theme.breakpoints.up("sm")]: {
          display: "none",
        },
     },
}));

function Navbar() {

  const classes = useStyles()

  return (
    <AppBar>
        <Toolbar>
            <Typography variant="h6" className={classes.logoLg}>
               Social Landing Page
            </Typography>
            <Typography variant="h6" className={classes.logoSm}>
               Social Page
            </Typography>
        </Toolbar>
    </AppBar>
  );
}

export default Navbar;