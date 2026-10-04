import { useState } from "react";
import {
  Plus,
  Minus,
  RotateCcw,
  AlertCircle,
} from "lucide-react";

import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((previousCount) => previousCount + 1);
  };

  const handleDecrement = () => {
    setCount((previousCount) =>
      previousCount > 0 ? previousCount - 1 : 0
    );
  };

  const handleReset = () => {
    setCount(0);
  };

  const isMinimum = count === 0;

  return (
    <section className="utility-card">

      <div className="card-header">
        <div>
          <h2>Counter</h2>
          <p className="card-description">
            Manage your counter value
          </p>
        </div>

        <span className="badge">STATE</span>
      </div>

      <div className="counter-display">
        <span>{count}</span>
      </div>

      {isMinimum && (
        <div className="status-message">
          <AlertCircle size={16} />
          <span>Minimum limit reached</span>
        </div>
      )}

      <div className="button-group">

        <Button
          onClick={handleIncrement}
          icon={Plus}
        >
          Increment
        </Button>

        <Button
          onClick={handleDecrement}
          variant="secondary"
          icon={Minus}
        >
          Decrement
        </Button>

        <Button
          onClick={handleReset}
          variant="danger"
          icon={RotateCcw}
        >
          Reset
        </Button>

      </div>

    </section>
  );
};

export default Counter;