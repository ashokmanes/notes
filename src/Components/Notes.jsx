import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';

import { NotesForm } from "./NotesForm";
import { NotesList } from "./NotesList";

const Notes = () => {
  return (
    <Container
    sx={{
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      height:"100vh"
    }}
    >
      <CssBaseline />
      <AppBar color={'inherit'} sx={{height:'40px', padding:'10px'}}>G Notes</AppBar>
      
      <Box sx={{
        marginTop: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column",
        width:"30%"
      }}>
        <NotesList />
      </Box>
      <Divider orientation="vertical" flexItem/>
      <Box sx={{
        marginTop: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column",
        width: "60%"
      }}>
        <NotesForm />
      </Box>
    
    </Container>
  );
};

export default Notes;
