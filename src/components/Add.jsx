import { makeStyles, Fab, Tooltip } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  
}));

function Add() {

  const classes = useStyles()

  return (
    <>
      <Tooltip title="Add" aria-label="add">
          <Fab color="secondary" className={classes.absolute}>
              <Add />
          </Fab>
      </Tooltip>
    </>
  );
}

export default Add;