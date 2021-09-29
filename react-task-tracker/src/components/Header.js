//import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router";

const Header = ({ buttonClick, showForm }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>Task tracker</h1>
      {location.pathname === "/" &&
        (showForm ? (
          <Button color="grey" text="Close" onClick={buttonClick} />
        ) : (
          <Button color="green" text="Add" onClick={buttonClick} />
        ))}
    </header>
  );
};

export default Header;
