import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Form from "./components/Form";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await callJson();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  const callJson = async () => {
    let uri = "http://localhost:5000/tasks";

    const call = await fetch(uri);
    const response = await call.json();

    return response;
  };

  const callTask = async (id) => {
    let uri = `http://localhost:5000/tasks/${id}`;

    const call = await fetch(uri);
    const response = await call.json();

    return response;
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  const remindTask = async (id) => {
    const getTask = await callTask(id);
    const updTask = { ...getTask, reminder: !getTask.reminder };

    const updateTask = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    const data = await updateTask.json();

    console.log(data);

    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              reminder: !task.reminder,
            }
          : task
      )
    );
  };

  const onAdd = async (task) => {
    //const id = Math.floor(Math.random() * 10000) + 1;
    //const newTask = { id, ...task };

    const response = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await response.json();

    setTasks([...tasks, data]);
  };

  return (
    <Router>
      <div className="container">
        <Header
          buttonClick={() => setShowForm(!showForm)}
          showForm={showForm}
        />

        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {showForm && <Form onAdd={onAdd} />}
              {tasks.length === 0 ? (
                <p>There's no curent tasks</p>
              ) : (
                <Tasks
                  tasks={tasks}
                  deleteTask={deleteTask}
                  remindTask={remindTask}
                />
              )}
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
