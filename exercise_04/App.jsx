import React, { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
const App = () => {
  const [temperature, setTemp] = useState(25);
  const decreaseTemperature = () => setTemp((prevTemp) => prevTemp - 1);
  const increaseTemperature = () => setTemp((prevTemp) => prevTemp + 1);
  return (
    <>
      <Header temperature={temperature} />;
      <Content temperature={temperature} />
      <Footer
        setTempUp={increaseTemperature}
        setTempDown={decreaseTemperature}
      />
    </>
  );
};

export default App;
