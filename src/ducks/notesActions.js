export const ADD_NOTE = "ADD_NOTE";

export const REMOVE_NOTE = "REMOVE_NOTE";

export const ADD_NOTE_ACTION = (noteData) => ({
  type: ADD_NOTE,
  payload: noteData,
});



export const REMOVE_NOTE_ACTION = (id) =>({
    type: REMOVE_NOTE,
    payload: id
})