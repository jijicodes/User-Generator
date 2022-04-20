import "./App.css";
import React, { useState } from "react";
import { SearchBar } from "./SearchBar/SearchBar";
import { UserDisplay } from "./UserDisplay/UserDisplay";
import { Logo } from "./Logo/Logo";

function App() {
  const [location, setLocation] = useState("search");
  const [searchT, setSearchT] = useState("");
  // const showUserDisplay = searchT.length > 0;

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1,
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <div></div>
      <div>
        {location === "userDisplay" && (
          <UserDisplay
            userName={searchT}
            onBackBtn={() => {
              setLocation("search");
              setSearchT("");
            }}
          />
        )}
        {location === "search" && (
          <SearchBar
            onSubmit={(text) => {
              setLocation("userDisplay");
              setSearchT(text);
            }}
          />
        )}
      </div>

      <div>
        <Logo />
      </div>
    </div>
  );
}

export default App;
