import { useState } from "react";
import { exported } from "@core/dotnet-wasm-bindings";

function App() {
  const [number, setNumber] = useState(1);
  const [multiples, setMultiples] = useState([]);

  return (
    <>
      <label>
        Number (x):
        <input onInput={(e) => setNumber(+e.currentTarget.value)} />
      </label>
      <button onClick={async () => {
        const multiples = await exported.Math.FindMultiplesOf(number);
        setMultiples(Array.from(multiples))
        console.log(multiples);
      }}>
        Find
      </button>

      <ul>
        {multiples.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
