import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return <div className="App">Hello world {count}</div>;
}

export default App;
