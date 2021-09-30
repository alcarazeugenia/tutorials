import User from "../user/User";
import "./Users.css";

function Users({ monsters }) {
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <User key={monster.id} monster={monster} />
      ))}
    </div>
  );
}

export default Users;
