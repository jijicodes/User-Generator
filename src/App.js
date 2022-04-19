import "./App.css";
import React, { useState } from "react";
import { SearchBar } from "./SearchBar/SearchBar";
import { UserDisplay } from "./UserDisplay/UserDisplay";

function App() {
  const [location, setLocation] = useState("search");
  const [searchT, setSearchT] = useState("");
  // const showUserDisplay = searchT.length > 0;

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
      {/* ////////////ver1 */}
      {/* {showUserDisplay ? (
        <UserDisplay
          userName={searchT}
          onBackBtn={() => {
            setSearchT("");
          }}
        />
      ) : (
        <SearchBar onSubmit={(text) => setSearchT(text)} />
      )} */}
      {/* ////////////ver2 */}
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
  );
}

export default App;
