import { useState } from "react";
import "./App.css";
import MSelect from "./UI/MSelect";
import MSearch from "./UI/MSearch";

function App() {
  const [location, setLocation] = useState("Ahmedabad");
  const [search, setSearch] = useState();
  return (
    <nav className='App'>
      <div
        style={{ background: "#F7F7FF", display: "flex", borderRadius: "4px" }}>
        <MSelect setLocation={setLocation} />
        <MSearch search={search} setSearch={setSearch} location={location} />
      </div>
    </nav>
  );
}

export default App;
