import "./Button.css"

// eslint-disable-next-line react/prop-types
const Button = ({ text,btnClass, icon, type }) => {
  return <button type={type} className={btnClass}>{icon}{text}</button>;
};

export default Button;
