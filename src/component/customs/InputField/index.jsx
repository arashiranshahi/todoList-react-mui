import { Box } from "@mui/system";
import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";

const InputFild = ({
  sendDataToParent,
  inputValue,
  todos,
  updateTodo,
  onChange,
  currentValue,
}) => {
  const inputFildStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "56px",
  };
  const textFieldStyle = {
    height: "100%",
    flexGrow: "1",
    borderRadius: "0.3rem 0 0 0.3rem",
    input: {
      color: "white",
    },
  };
  const btnStyle = {
    color: "white",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    background: "rgb(101,9,254)",
    background:
      "linear-gradient(90deg, rgba(101,9,254,1) 77%, rgba(128,55,255,1) 100%)",
    borderRadius: "0 0.3rem 0.3rem 0",
    padding: "0 20px",
    borderColor: "red",
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "rgb(101,9,254)",
      },
    },
  });

  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#341F7D',
          borderRadius: '4px 0 0 4px',
          borderWidth: '1px',
          borderRight: 'none',
        },
        '&:hover fieldset': {
          borderColor: '#341F7D',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#341F7D',
        },
      },
    },
  }));

  const classes = useStyles();

  return (
    <Box sx={inputFildStyle}>
      <ThemeProvider theme={theme}>
        <TextField
          className={classes.root}
          id="outlined-basic"
          label={inputValue ? "Edit a todo" : "Add a todo"}
          variant="outlined"
          onChange={(e) => {
            onChange(e.target.value);
          }}
          value={currentValue}
          sx={textFieldStyle}
          // color="secondary"
          InputLabelProps={{
            style: {
              color: "#fff",
            },
          }}
        />
      </ThemeProvider>

      <Button
        onClick={() => {
          sendDataToParent(currentValue);
        }}
        sx={btnStyle}
        style={{ display: `${inputValue ? "none" : "block"}` }}
      >
        Add
      </Button>
      <Button
        onClick={() => {
          updateTodo(currentValue);
        }}
        sx={btnStyle}
        style={{ display: `${inputValue ? "block" : "none"}` }}
      >
        Edit
      </Button>
    </Box>
  );
};

export default InputFild;
