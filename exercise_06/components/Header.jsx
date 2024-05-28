const Header = ({ temperature, isOn, onOof }) => {
  return (
    <div>
      <button onClick={onOof}>ON / OFF</button>
      {isOn && <span>Current Temperature: {temperature}°C</span>}
    </div>
  );
};
export default Header;
