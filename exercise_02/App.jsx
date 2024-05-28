import React from "react";

const App = () => {
  const temperature = "iloveyou";

  return (
    <>
      <header>
        <button>ON/OFF</button>
        <p>Current Temperature:{temperature}</p>
      </header>
      <div>
        <span>
          <p>{temperature}</p>
        </span>
      </div>
      <div>
        <button>Down</button>
        <button>Up</button>
      </div>
    </>
  );
};

export default App;
