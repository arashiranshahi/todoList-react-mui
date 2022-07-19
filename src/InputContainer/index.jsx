import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import React, { useState , useEffect } from "react";
import InputFild from "../component/customs/InputField";
import Todo from "../component/customs/Todo";


const InputContainer = () => {
  const [todos, setTodos] = useState([]);
  const [color, setColor] = useState([]);
  const [editName, setEditName] = useState('');
  const [currentValue , setCurrentValue] = useState('')

  const randColor = () => {
    return (
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
        .toUpperCase()
    );
  };



  const sendDataToParent = (value) => {
    setTodos((todos) => [...todos, value]);
    setColor((color) => [...color, randColor()]);
    setEditName()
    setCurrentValue('')
  };

  const deleteTodoHandle = (name) => {
    let index = todos.indexOf(name);
    if (index !== -1) {
      todos.splice(index, 1);
      color.splice(index, 1);
    }
    setTodos((todos)=>[...todos])
    setTodos((color)=>[...color])
  };

  const editTodoHandle = (name) => {
    setEditName(name)
    setCurrentValue(name)
  };

  const updateTodo = (value) =>{
    let index = todos.indexOf(editName)
    todos[index] = value
    setTodos([...todos])
    setEditName('')
    setCurrentValue('')
  }

  const onChange = (value) => {
    setCurrentValue(value)
  }

  useEffect(() => {
    let todos = JSON.parse(localStorage.getItem('todoList'));
    if(todos==null){todos=[]}
    if (todos[0]) {
     setTodos(todos);
    }
    let color = JSON.parse(localStorage.getItem('colorList'));
    if(color==null){color=[]}
    if (color[0]) {
      setColor(color);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todos));
    localStorage.setItem('colorList', JSON.stringify(color));
  }, [todos]);









  const inputContainerStyle = {
    position: 'relative',
    width: '25%',
    minHeight: '70%',
    backgroundColor: '#171A2B',
    padding: '0 2%',
    borderRadius: '0.5rem',
    padding : '30px 40px',
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    gap : '20px',
  }

  return (
    <Box sx={inputContainerStyle}>
      <Typography color='white' fontSize='25px' mb='20px'>Feeling productive today?</Typography>
      <InputFild sendDataToParent={sendDataToParent} inputValue={editName ? editName : ''} todos={todos} updateTodo={updateTodo} onChange={onChange} currentValue={currentValue}/>
      <div className="todo-container w-100">
        {todos.map((todo, index) => (
          <Todo
            key={color[index]}
            todoName={todo}
            bg={color[index]}
            deleteTodoHandle={deleteTodoHandle}
            editTodoHandle={editTodoHandle}
          />
        ))}
      </div>
    </Box>
  );
};

export default InputContainer;
