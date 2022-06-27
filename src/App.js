import React, { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
function App() {
  const [data, setData] = useState([]);
  const appCollection = collection(db, "PersonalServices");

  const getData = async () => {
    const allData = await getDocs(appCollection);
    setData(allData.docs.map((doc) => ({ ...doc.data() })));
  };

  useEffect(() => {
    getData();
  }, []);

  const action = () => {
    alert("hello");
  };

  const list = () => {
    return data.map((element) => {
      return (
        <button className="card" onClick={action}>
          <div key={element.key}>
            <h2>{element.title}</h2>
            <h3>{element.Price}</h3>
          </div>
        </button>
      );
    });
  };

  return <div>{list()}</div>;
}

export default App;
