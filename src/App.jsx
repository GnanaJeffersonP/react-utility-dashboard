import Counter from "./components/Counter";
import RandomNumber from "./components/RandomNumber";
import "./App.css";

const App = () => {
  return (
    <main className="dashboard">

      <header className="dashboard-header">
        <p className="eyebrow">REACT PRACTICE</p>

        <h1>React Utility Dashboard</h1>

        <p>
          A collection of interactive utilities built with
          React state and event handling.
        </p>
      </header>

      <div className="utilities-grid">
        <Counter />
        <RandomNumber />
      </div>

    </main>
  );
};

export default App;