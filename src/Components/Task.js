import React, { useState } from "react";
import "./task.css";
import axios from "axios";

export default function Task(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(process.env.REACT_APP_API_URL, {
        body: {
          title,
          description,
          taskType: "pending",
        },
      });
      setTitle("");
      setDescription("");
      props.setSubmit(!props.submit);
      console.log("Task added:", response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="task">
      <form action="" className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          className="input-text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="description"
          className="input-text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" className="add-task">
          ➕ Add Task
        </button>
      </form>
    </div>
  );
}
