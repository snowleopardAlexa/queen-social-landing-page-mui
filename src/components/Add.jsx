import { useState } from "react";
import {
  makeStyles,
  Fab,
  Tooltip,
  Modal,
  Container,
  TextField,
  MenuItem,
  FormLabel,
  FormControlLabel,
  RadioGroup,
} from "@material-ui/core";
import { Add as AddIcon, Radio } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: 20,
    right: 20,
  },
  container: {
    width: 500,
    height: 550,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "100vh",
    },
  },
}));

function Add() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
        <Fab color="secondary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.container}>
          <form className={classes.form} autoComplete="off">
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                label="Title"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                label="Description"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField
                id="outlined-multiple-static"
                multiline
                rows={4}
                defaultValue="Tell your story..."
                variant="outlined"
                label="Description"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField select label="Visibility" value="Public">
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Unlisted">Unlisted</MenuItem>
              </TextField>
            </div>
            <div className={classes.item}>
              <FormLabel component="legend">Who can comment?</FormLabel>
              <RadioGroup>
                <FormControlLabel
                  value="Everybody"
                  control={<Radio size="small" />}
                  label="Everybody"
                />
                <FormControlLabel
                  value="My Friends"
                  control={<Radio size="small" />}
                  label="My Friends"
                />
                <FormControlLabel
                  value="Nobody"
                  control={<Radio size="small" />}
                  label="Nobody"
                />
                <FormControlLabel
                  value="Custom"
                  disabled
                  control={<Radio size="small" />}
                  label="Custom (Premium)"
                />
              </RadioGroup>
            </div>
          </form>
        </Container>
      </Modal>
    </>
  );
}

export default Add;
