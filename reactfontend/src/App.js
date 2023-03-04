import { useState, useEffect } from "react";
import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./App.css";
function App() {
  const [admin, setAmin] = useState([]);
  useEffect(() => {
    async function getAllAdmin() {
      try {
        const admin = await axios.get("http://127.0.0.1:8000/api/admin/");
        console.log(admin.data);
        setAmin(admin.data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllAdmin();
  }, []);
  return (
    <div className="App">
      <h1>hi, ket noi React voi Laravel</h1>
      <h2> lay thu data tu table admin ne...</h2>
      {admin.map((admin, i) => {
        return (
          <h2 key={i}>
            {admin.username} {admin.password} {admin.name} {admin.phone}
          </h2>
        );
      })}
    </div>
  );
}

export default App;
