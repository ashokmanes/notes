import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { useInput } from "../Util/useInput";
import { useState } from "react";
import { useHistory } from "react-router-dom";


import {LOGIN_USER_ACTION} from "../ducks/loginActions"
import { useDispatch } from "react-redux";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 500);
    });
    setIsSubmitting(false);
    dispatch(LOGIN_USER_ACTION(true));
    history.replace("/notes");
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    value: inputValue,
    isValid: isUserInputValid,
    handleInputValue: handleUserValue,
    onBlurHandle: onInputBlurHandle,
  } = useInput("");
  const {
    value: passwordValue,
    isValid: isPasswordValid,
    handleInputValue: handlePasswordValue,
    onBlurHandle: onPasswordBlurHandle,
  } = useInput("");


  const isFormValid = passwordValue && inputValue;

  return (
    <>
      <Container maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <form onSubmit={onSubmitHandler}>
            <Typography component="h1" variant="h5" textAlign="center">
              Sign in
            </Typography>
            <TextField
              margin="normal"
              error={!isUserInputValid}
              onChange={handleUserValue}
              onBlur={onInputBlurHandle}
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="off"
              value={inputValue}
              autoFocus
              helperText={!isUserInputValid && "This field is required"}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="off"
              value={passwordValue}
              error={!isPasswordValid}
              onChange={handlePasswordValue}
              onBlur={onPasswordBlurHandle}
              helperText={!isPasswordValid && "This field is required"}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={!isFormValid || isSubmitting}
            >
              Sign In
            </Button>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default Login;
