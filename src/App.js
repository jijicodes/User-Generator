import "./App.css";
import React, { useState } from "react";
import { SearchBar } from "./SearchBar/SearchBar";
import { UserDisplay } from "./UserDisplay/UserDisplay";

function App() {
  const [searchT, setSearchT] = useState("");
  const showUserDisplay = searchT.length > 0;

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        height: "100vh",
      }}
    >
      {showUserDisplay ? (
        <UserDisplay userName={searchT} />
      ) : (
        <SearchBar onSubmit={(text) => setSearchT(text)} />
      )}
    </div>
  );
}

export default App;
