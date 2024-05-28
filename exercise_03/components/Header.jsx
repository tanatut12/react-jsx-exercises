const Header = ({ temperature }) => {
  return (
    <div>
      <button>ON / OFF</button>
      <span>Current Temperature: {temperature}°C</span>
    </div>
  );
};
export default Header;
