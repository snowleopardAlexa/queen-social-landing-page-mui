import { useState } from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  alpha,
  Badge,
  Avatar,
} from "@material-ui/core";
import { Search, Mail, Notifications, Cancel } from "@material-ui/icons";
import freddie from ".././img/freddie.jpeg";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
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
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRaius,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => props.open ? "flex" : "none",
      width: "63%",
    },
  },
   input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
   cancel: {
    [theme.breakpoints.up("sm")]: {
        display: "none",
    }
  },
   searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
        display: "none",
      },
  },
   icons: {
    alignItems: "center",
    display: (props) => (props.open ? "none" : "flex"),
  },
   badge: {
    marginRight: theme.spacing(2),
  },
}));

function Navbar() {
  const [open, setOpen] = useState(false);

  const classes = useStyles({ open });

  return (
    <AppBar color="primary">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          Social Landing Page
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          SocialP
        </Typography>
        <div className={classes.search}>
          <Search />
          <InputBase placeholder="Search..." className={classes.input} />
          <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
        </div>
        <div className={classes.icons}>
          <Search
            className={classes.searchButton}
            onClick={() => setOpen(true)}
          />
          <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="secondary" className={classes.badge}>
            <Notifications />
          </Badge>
          <Avatar alt="Freddie Mercury" src={freddie} />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
