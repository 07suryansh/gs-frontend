import React from "react";
import "./card.css";
import CompletedTile from "./CompletedTile";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Completed(props) {
  const [taskRes, setTaskRes] = useState([]);
  // const [submit, setSubmit] = useState(false);
  const getTask = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_API_URL);
      console.log("frontend pending response-> " + response.data);
      const pendingTasks = response.data.filter(
        (task) => task.taskType === "completed"
      );
      setTaskRes(pendingTasks);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("taskRes-> " + taskRes);
  useEffect(() => {
    console.log("useeffect");
    getTask();
  }, [props.submit]);
  async function handleClick(id) {
    try {
      const response = await axios.post(process.env.REACT_APP_API_URL+"/completed/", {
        id,
      });
      console.log("successfully start");
      props.setSubmit((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="card">
      <div className="title">
        Completed Task
      </div>
      <div className="content">
        {taskRes?.map((item) => (
          <CompletedTile
            id={item._id}
            title={item.title}
            description={item.description}
            handleClick={handleClick}
            customTimestamp={item.customTimestamp}
          />
        ))}
      </div>
    </div>
  );
}
