import Task from "./Task";

const Tasks = ({ tasks, deleteTask, remindTask }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          remindTask={remindTask}
        />
      ))}
    </>
  );
};

export default Tasks;
