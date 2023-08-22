import "../Assets/App.css";
import Header from "../Layouts/Header/Header";
import Main from "../Layouts/Main/Main";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useSearchParams,
} from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [category, setCategory] = useState('')

  const [value, setValue] = useState("");
  const postQuery = searchParams.get("post");

  useEffect(() => {
    fetch("https://api.favvora-urgench.uz/site/menu/")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className="wrapper">
      <div className="container">
        <Header setValue={setValue} setSearchParams={setSearchParams} setCategory={setCategory}/>
        <Routes>
          <Route
            path="/"
            element={<Main data={data} postQuery={postQuery} value={value} category={category} setData={setData}/>}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
