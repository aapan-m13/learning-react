import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const fetchedData = await axios(
      "https://react-http-bfa65-default-rtdb.firebaseio.com/tasks.json"
    );
    return fetchedData;
  };

  const { status, isLoading, error, data, refetch } = useQuery(
    "todo",
    fetchTasks
  );

  useEffect(() => {
    if (status === "success") {
      const loadedTasks = [];
      for (const taskKey in data.data) {
        loadedTasks.push({ id: taskKey, text: data.data[taskKey].text });
      }
      setTasks(loadedTasks);
    }
  }, [status, data]);

  const taskAddHandler = (task) => {
    console.log(task);
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={refetch}
      />
    </React.Fragment>
  );
}

export default App;
