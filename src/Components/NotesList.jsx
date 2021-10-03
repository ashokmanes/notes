import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";

import { REMOVE_NOTE_ACTION } from "../ducks/notesActions";

export const NotesList = () => {
  const dispatch = useDispatch();
  const notesList = useSelector((state) => state.notes);

  function removeNoteHandler() {
    const { id } = this;
    dispatch(REMOVE_NOTE_ACTION(id));
  }

  return (
    <List sx={{ width: "100%" }}>
      {notesList.map((note) => {
        return (
          <Fragment key={note.id}>
            <ListItem
              sx={{ wordBreak: "break-word" }}
              secondaryAction={
                <CloseIcon
                  sx={{ cursor: "pointer" }}
                  onClick={removeNoteHandler.bind(note)}
                />
              }
            >
              <ListItemText primary={note.title} secondary={note.desc} />
            </ListItem>
            <Divider />
          </Fragment>
        );
      })}
    </List>
  );
};
