import "../Assets/App.css";
import { Routes, Route, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Wishlist from "../pages/wishlist/Wishlist";
import Home from "../pages/home/Home";
import Location from "../Layouts/Header/Location/Location";
import URL from "../Middleware/GetApi";
import { Context } from "../Context/Contex";



function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [isChange, setChange] = useState(false);

  const [category, setCategory] = useState("");
  const [value, setValue] = useState("");


  useEffect(() => {
    const storeData = JSON.parse(localStorage.getItem("wishlist"));
    if (storeData) {
      setCart(storeData);
    }
  }, [isChange]);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Context.Provider
      value={{
        setCart,
        setChange,
        isChange,
        setValue,
        setSearchParams,
        setCategory,
      }}
    >
      <div className="wrapper">
        <div className="container">
          <Location sizeCart={cart.length} />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  data={data}
                  value={value}
                  category={category}
                />
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/:id"
              element={<Home data={data} value={value} category={category} />}
            />
            <Route path="/wishlist" element={<Wishlist cart={cart} />} />
          </Routes>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
