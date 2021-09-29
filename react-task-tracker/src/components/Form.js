import { useState } from "react";

const Form = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);
  //const [error, setError] = useState(false);

  const submitTask = (e) => {
    e.preventDefault();
    if (text.trim() === "" || date.trim() === "") {
      alert("Please complete both fields");
      return;
    }

    //setError(false);
    onAdd({ text: text, day: date, reminder: reminder });
    setText("");
    setDate("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={submitTask}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add day and time"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default Form;
