import React from "react";
import { Icon } from "@iconify/react";

import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const Todo = ({ todoName, bg, deleteTodoHandle, editTodoHandle }) => {
  const todoStyle = {
    display : 'flex' ,
    padding : '15px 20px' ,
    justifyContent : 'space-between' ,
    alignItems : 'center' ,
    width : '100%' ,
    borderRadius : '0.5rem' ,
    margin : '15px 0'
  }
  return (
    <Box
      sx={todoStyle}
      style={{ backgroundColor: `${bg}` }}
    >
      <Typography color='white' >{todoName}</Typography>
      <div className="d-flex gap-1">
        <Icon
          icon="clarity:remove-line"
          color="white"
          width="23"
          height="23"
          onClick={() => deleteTodoHandle(todoName)}
        />
        <Icon
          icon="clarity:note-edit-line"
          color="white"
          width="23"
          height="23"
          onClick={() => {
            editTodoHandle(todoName);
          }}
        />
      </div>
    </Box>
  );
};

export default Todo;
