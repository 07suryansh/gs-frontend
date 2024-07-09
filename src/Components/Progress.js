import React, { useEffect, useState } from "react";
import "./card.css";
import ProgressTile from "./ProgressTile";
import axios from "axios";

export default function Progress(props) {
  const [taskRes, setTaskRes] = useState([]);
  const getTask = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_API_URL);
      const pendingTasks = response.data.filter(
        (task) => task.taskType === "progress"
      );
      setTaskRes(pendingTasks);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log("useeffect");
    getTask();
  }, [props.submit]);
  async function handleClick(id) {
    try {
      const response = await axios.post(process.env.REACT_APP_API_URL+"/completed/", { id });
      props.setSubmit((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="card">
      <div className="title">
        Progress Task
      </div>
      <div className="content">
        {taskRes?.map((item) => (
          <ProgressTile
            id={item._id}
            title={item.title}
            description={item.description}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}
