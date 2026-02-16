import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <Header />
      </div>

      <h1></h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
