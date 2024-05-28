const Footer = ({ setTempUp, setTempDown }) => {
  return (
    <div>
      <button onClick={setTempDown}>Down</button>
      <button onClick={setTempUp}>Up</button>
    </div>
  );
};
export default Footer;
