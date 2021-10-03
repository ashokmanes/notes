import { ADD_NOTE, REMOVE_NOTE } from "./notesActions";

export const notesReducer = (
  state = [{ title: "Note 1", desc: "Note 1 desc", id: 1 }],
  action
) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.payload];

    case REMOVE_NOTE:
      return state.filter((note) => {
        return note.id !== action.payload;
      });

    default:
      return state;
  }
};
