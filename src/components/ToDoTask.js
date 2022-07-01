import axios from "axios";
import React, { useEffect, useState } from "react";
import CompletedTask from "./CompletedTask";
import "./ToDoTask.css";
const ToDoTask = () => {
  const [itemText, setItemText] = useState("");
  const [listItems, setListItems] = useState([]);
  const [isUpdating, setIsUpdating] = useState("");
  const [updateItemText, setUpdateItemText] = useState("");
  const [filter, setFilter] = useState("uncompleted");

  //add new todo item to database
  const addItem = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://gentle-lake-72364.herokuapp.com/api/item", { item: itemText });
      setListItems((prev) => [...prev, res.data]);
      setItemText("");
    } catch (err) {
      console.log(err);
    }
  };

  //Create function to fetch all todo items from database -- we will use useEffect hook
  useEffect(() => {
    const getItemsList = async () => {
      try {
        const res = await axios.get("https://gentle-lake-72364.herokuapp.com/api/items");
        setListItems(res.data);
        console.log("render");
      } catch (err) {
        console.log(err);
      }
    };
    getItemsList();
  }, []);

  // Delete item when click on delete
  const deleteItem = async (id) => {
    try {
      const res = await axios.delete(`https://gentle-lake-72364.herokuapp.com/api/item/${id}`);
      const newListItems = listItems.filter((item) => item._id !== id);
      setListItems(newListItems);
    } catch (err) {
      console.log(err);
    }
  };

  //Update item
  const updateItem = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`https://gentle-lake-72364.herokuapp.com/api/item/${isUpdating}`, { item: updateItemText });
      console.log(res.data);
      const updatedItemIndex = listItems.findIndex((item) => item._id === isUpdating);
      const updatedItem = (listItems[updatedItemIndex].item = updateItemText);
      setUpdateItemText("");
      setIsUpdating("");
    } catch (err) {
      console.log(err);
    }
  };
  //before updating item we need to show input field where we will create our updated item
  const renderUpdateForm = () => (
    <form
      className="update-form"
      onSubmit={(e) => {
        updateItem(e);
      }}
    >
      <input
        className="update-new-input"
        type="text"
        placeholder="New Item"
        onChange={(e) => {
          setUpdateItemText(e.target.value);
        }}
        value={updateItemText}
      />
      <button className="update-new-btn" type="submit">
        Update
      </button>
    </form>
  );


  const toggleTodo = (id) => {
    const newTodoList = [...listItems];
    const todoItem = newTodoList.find((item) => item._id === id);
    todoItem.checked = !todoItem.checked;
    setListItems(newTodoList);
  };


  const getTodo = () => {
    return listItems.filter((item) =>
      filter === "completed" ? item.checked : !item.checked
    );
  };

  const changeFilter = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="main">
      <h1 className="text-secondary">Daily Task</h1>


      <select value={filter} onChange={(e) => changeFilter(e.target.value)}>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
<p></p>

      {getTodo().map((todo) => (
        <div key={todo._id}>
          <input
            checked={todo.checked}
            onChange={() => toggleTodo(todo._id)}
            type="checkbox"
          />
          <label>{todo.item}</label>
        </div>
      ))}


      <form className="form" onSubmit={(e) => addItem(e)}>
        <input
          type="text"
          placeholder="Add Your Task"
          onChange={(e) => {
            setItemText(e.target.value);
          }}
          value={itemText}
        />
      </form>
      <div className="todo-listItems">
        {listItems.map((item) => (
          <div className="todo-item">
            {isUpdating === item._id ? (
              renderUpdateForm()
            ) : (
              <>
                <input checked={item.checked} onChange={() => toggleTodo(item._id)} type="checkbox" />

                <p className="item-content">{item.item}</p>
                <button
                  className="update-item"
                  onClick={() => {
                    setIsUpdating(item._id);
                  }}
                >
                  Edit
                </button>
                <button
                  className="delete-item"
                  onClick={() => {
                    deleteItem(item._id);
                  }}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoTask;
