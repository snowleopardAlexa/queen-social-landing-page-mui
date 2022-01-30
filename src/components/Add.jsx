import { makeStyles, Fab, Tooltip } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    fab: {
        position: "fixed",
        bottom: 20,
        right: 20,
    },
}));

function Add() {

  const classes = useStyles();

  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip 
        title="Add" 
        aria-label="add" 
        onClick={() => setOpen(true)}>
          <Fab color="secondary" className={classes.fab}>
              <AddIcon />
          </Fab>
      </Tooltip>
    </>
  );
}

export default Add;