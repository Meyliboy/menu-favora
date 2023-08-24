import "../Assets/App.css";
import { Routes, Route, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Wishlist from "../pages/wishlist/Wishlist";
import Home from "../pages/home/Home";
import Location from "../Layouts/Header/Location/Location";
import URL from "../Middleware/GetApi";
import { Context } from "../Context/Contex";

const cartFromLocalStorage = JSON.parse(
  localStorage.getItem("wishlist") || "[]"
);

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [cart, setCart] = useState(cartFromLocalStorage);

  function getTotal() {
    let temp = cart.map((item) => {
      return parseFloat(item.summa);
    });

    let sum = temp.reduce((prev, next) => {
      return prev + next;
    }, 0);

    return sum;
  }

  const [category, setCategory] = useState("");
  const [value, setValue] = useState("");
  const [complited, setComplited] = useState(false);

  const [price, setPrice] = useState(0);
  const [itemPrice, setItemPrice] = useState(0);


  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(cart));
  }, [cart]);

  function handleClick(item, complited) {
    setComplited(complited);
    if(complited) {
      let isPresent = false;
      cart.forEach((product) => {
        if (item.id === product.id) isPresent = true;
      });
      if (isPresent) return;
      setCart([...cart, item]);
    } else if(complited === false) {
      setCart(cart.pop())
    }
  }

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
        handleClick,
        setValue,
        setSearchParams,
        setCategory,
        setCart,
        setPrice,
        price,
        itemPrice,
        setItemPrice,
        getTotal,
      }}
    >
      <div className="wrapper">
        <div className="container">
          <Location sizeCart={cart.length} />
          <Routes>
            <Route path="/" element={<Home data={data} value={value} category={category} complited={complited} />} />
          </Routes>
          <Routes>
            <Route path="/:id" element={<Home data={data} value={value} category={category} complited={complited} />} />
            <Route path="/wishlist" element={<Wishlist cart={cart} />} />
          </Routes>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
