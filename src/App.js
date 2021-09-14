import React from "react";

const App = () => {
  return (
    <div className="container">
      <div className="valid-keys">
        <span className="matched">Patr</span>
        <span className="remainder">ick</span>
      </div>
      <div className="typed-keys">asdasPatrdsads</div>
      <div className="completed-words">
        <ol>
          <li>cidade</li>
          <li>carro</li>
          <li>sobre</li>
        </ol>
      </div>
    </div>
  );
};

export default App;
