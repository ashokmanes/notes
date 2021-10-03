import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useInput } from "../Util/useInput";
import { useDispatch, useSelector } from "react-redux";

import { ADD_NOTE_ACTION } from "../ducks/notesActions";

export const NotesForm = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.notes.length);

  const {
    value: title,
    isValid: isTitleValid,
    handleInputValue: handleTitleValue,
    onBlurHandle: onTitleBlurHandle,
    resetFieldState: resetTitleField,
  } = useInput("");
  const {
    value: desc,
    isValid: isDescValid,
    handleInputValue: handleDescValue,
    onBlurHandle: onDescBlurHandle,
    resetFieldState: resetDescField,
  } = useInput("");

  const isFormValid = title && desc;

  const addNoteHandler = () => {
    const note = { title, desc, id: counter + 1 };
    dispatch(ADD_NOTE_ACTION(note));
    resetTitleField();
    resetDescField();
  };
  return (
    <>
      <TextField
        margin="normal"
        error={!isTitleValid}
        onChange={handleTitleValue}
        onBlur={onTitleBlurHandle}
        required
        fullWidth
        id="title"
        label="Title"
        name="title"
        autoComplete="off"
        value={title}
        helperText={!isTitleValid && "This field is required"}
      />
      <TextField
        margin="normal"
        error={!isDescValid}
        onChange={handleDescValue}
        onBlur={onDescBlurHandle}
        required
        fullWidth
        id="body"
        label="Body"
        name="body"
        autoComplete="off"
        value={desc}
        helperText={!isDescValid && "This field is required"}
        multiline
        rows={8}
      />
      <Button
        type="submit"
        onClick={addNoteHandler}
        variant="contained"
        sx={{ alignSelf: "end" }}
        disabled={!isFormValid}
      >
        Save
      </Button>
    </>
  );
};
