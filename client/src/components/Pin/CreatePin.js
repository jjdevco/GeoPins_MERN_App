import React, { useState, useContext } from "react";
import { withStyles } from "@material-ui/core/styles";

import { Context } from "../../state";
import { CLEAR_DRAFT } from "../../state/types";

import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddAPhotoIcon from "@material-ui/icons/AddAPhotoTwoTone";
import LandscapeIcon from "@material-ui/icons/LandscapeOutlined";
import ClearIcon from "@material-ui/icons/Clear";
import SaveIcon from "@material-ui/icons/SaveTwoTone";

const CreatePin = ({ classes }) => {
  const { dispatch } = useContext(Context);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  const disabled = !title.trim() || !content.trim();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClearDraft = () => {
    setTitle("");
    setImage("");
    setContent("");
    dispatch({ type: CLEAR_DRAFT });
  };

  return (
    <form className={classes.form}>
      <Typography
        className={classes.alignCenter}
        component="h2"
        variant="h4"
        color="secondary"
      >
        Pin Location
      </Typography>

      <LandscapeIcon className={classes.iconLarge} />

      <div>
        <TextField
          name="title"
          label="Title"
          placeholder="Insert Pin title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className={classes.input}
          id="image"
          accept="image/*"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <label htmlFor="image">
          <Button
            className={classes.button}
            style={{ color: image && "green" }}
            component="span"
            size="small"
          >
            <AddAPhotoIcon />
          </Button>
        </label>
      </div>

      <div className={classes.contentField}>
        <TextField
          name="content"
          label="Content"
          variant="outlined"
          rows={6}
          multiline
          fullWidth
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <div>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={handleClearDraft}
        >
          <ClearIcon className={classes.leftIcon} />
          Discard
        </Button>

        <Button
          className={classes.button}
          type="submit"
          variant="contained"
          color="secondary"
          disabled={disabled}
          onSubmit={handleSubmit}
        >
          Submit
          <SaveIcon className={classes.rightIcon} />
        </Button>
      </div>
    </form>
  );
};

const styles = (theme) => ({
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingBottom: theme.spacing.unit,
  },
  contentField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "95%",
  },
  input: {
    display: "none",
  },
  alignCenter: {
    display: "flex",
    alignItems: "center",
  },
  iconLarge: {
    fontSize: 40,
    marginRight: theme.spacing.unit,
  },
  leftIcon: {
    fontSize: 20,
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    fontSize: 20,
    marginLeft: theme.spacing.unit,
  },
  button: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit,
    marginLeft: 0,
  },
});

export default withStyles(styles)(CreatePin);
