import React from "react";
import "../component/todos.css";
import {
  Card,
  Grid,
  ListItemButton,
  ListItemText,
  Checkbox,
} from "@mui/material";

// 3. At this point we have a working button that properly creates tasks with due dates however the due date value isn't currently being used.

//    - Inside the map function above the return function make a variable called `color` and set it to `"#ffffffff"` or `"white"` (#ffffffff is white's hex color value)
//    - Then check if todays date to the due date of the task. If the due date is in the past change then set `color` to a different color.
//      1. (You do not have to keep the original card white, however you MUST make overdue cards a different color. Play around and find colors that you like.)

//      2. *** Note that your due date value is a string. You will have to use `new Date(/*due date variable*/)` to compare it to the current date

//      3. (Hint: you can get the current date with `new Date()`)
//    - Next inside the card that you used to display the tasks set the `background` to `color`.
//      1. (Hint: This is in `<Card style={{\*Code*\}}>` from last week. If you did not add a style in the card add it now)
//    - Add `data-testid={/*task-name*/}` inside the card as well. Where `task-name` is the variable that holds the task name.
//      1. (Hint: Look in `ListItemText primary={}` for this value)
//    - Finally in ListItemText change the value of `secondary={/*Somevalue*/}` with your due date value.

// 1. This component formats and returns the list of todos.
// 2. Treat the question mark like an if statement.
// If the todos array has items in the list [todos.length], we want to return the list
// Else, return a message saying "You have no todo's left"
// 3. The map function is called to assign each array item with a key
// 4. Think of lines 14-23 as a loop. For each todo in the todo list, we want to give the list item
// a key, and it's own card shown in the UI
const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      // new date(dueDate);

      return (
        <Grid key={todo.id}>
          <Card
            data-testid={todo.content}
            style={{ marginTop: 10, background: "color" }}
          >
            {/* Remember, we set the local state of this todo item when the user submits the form in 
            AddTodo.js. All we need to do is return the todo list item {todo.content} as well as its 
            current date/time {todo.date}. Also, the item's id is utilized in order to correctly delete an item from the Todo list*/}
            .
            <ListItemButton component="a" href="#simple-list">
              <Checkbox onClick={() => deleteTodo(todo.id)}>
                style={{ paddingLeft: 0, color: "primary" }}
              </Checkbox>{" "}
              <ListItemText
                style={{ marginTop: 10 }}
                primary={todo.content}
                secondary={todo.date}
              />
            </ListItemButton>
          </Card>
        </Grid>
      );
    })
  ) : (
    <p>You have no todo's left </p>
  );
  // Lastly, return the todoList constant that we created above to show all of the items on the screen.
  return (
    <div className="todoCollection" style={{ padding: "10px" }}>
      {todoList}
    </div>
  );
};

export default Todos;
