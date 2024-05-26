import React, { useState } from "react";

const App = () => {
	const [temperature, setTemperature] = useState(25); // Initial temperature value

	const decreaseTemperature = () => setTemperature((prevTemp) => prevTemp - 1);
	const increaseTemperature = () => setTemperature((prevTemp) => prevTemp + 1);

	return <>{/* code here */};</>;
};

export default App;
