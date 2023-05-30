import { useMutation } from "react-query";
import axios from "axios";
import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = ({ onAddTask }) => {
  let bindTaskText;

  const sendTaskData = (taskText, data) => {
    const generatedId = data.data.name;
    const createdTask = { id: generatedId, text: taskText };
    onAddTask(createdTask);
  };

  const enterTaskHandler = (taskText) => {
    bindTaskText = sendTaskData.bind(null, taskText);
    mutate(taskText);
  };

  const { isLoading, error, mutate } = useMutation({
    mutationFn: (taskText) => {
      return axios.post(
        "https://react-http-bfa65-default-rtdb.firebaseio.com/tasks.json",
        { text: taskText },
        {
          headers: { "Content-type": "application/json" },
        }
      );
    },
    onSuccess: (data) => {
      bindTaskText(data);
    },
  });

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
