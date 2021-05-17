import { useState } from "react";
import "./App.css";
import Maincomponent from "./components/Maincomponent";
import Navbar from "./components/Navbar.jsx";

function App() {
  const [covData, setCovData] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(search);
    fetchData(search);
  };

  const fetchData = async (query) => {
    const temp = await fetch(
      `https://api.covid19api.com/total/dayone/country/${query}`
    ).then((res) => res.json());
    let len = temp.length;
    let tempp = temp[len - 1];
    setCovData(tempp);
    console.log(tempp);
  };

  return (
    <>
      <Navbar
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      <Maincomponent covData={covData} />
    </>
  );
}

export default App;
