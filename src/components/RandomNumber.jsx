import { useState } from "react";
import { Dices, History } from "lucide-react";

import Button from "./Button";

const RandomNumber = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [history, setHistory] = useState([]);

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 100) + 1;

    setRandomNumber(number);

    setHistory((previousHistory) => [
      number,
      ...previousHistory,
    ].slice(0, 5));
  };

  const hasNumber = randomNumber !== null;

  return (
    <section className="utility-card">

      <div className="card-header">
        <div>
          <h2>Random Number Generator</h2>

          <p className="card-description">
            Generate numbers between 1 and 100
          </p>
        </div>

        <span className="badge">RANDOM</span>
      </div>

      <div className="random-display">

        {hasNumber ? (
          <span>{randomNumber}</span>
        ) : (
          <p>No number generated yet</p>
        )}

      </div>

      <Button
        onClick={generateRandomNumber}
        icon={Dices}
      >
        Generate Random Number
      </Button>

      {history.length > 0 && (
        <div className="history">

          <div className="history-header">
            <History size={17} />

            <span>Recent Numbers</span>
          </div>

          <div className="history-list">
            {history.map((number, index) => (
              <span
                className={`history-item ${
                  index === 0 ? "latest" : ""
                }`}
                key={`${number}-${index}`}
              >
                {number}
              </span>
            ))}
          </div>

        </div>
      )}

    </section>
  );
};

export default RandomNumber;