import { useContext, useEffect, useState } from "react";
import { Context } from "../../../Context/Contex";

const WishlistItems = ({ cart }) => {
  const { setPrice } = useContext(Context);
  const { setCart } = useContext(Context);
  const [amount, setAmount] = useState(1);

  const handlePrice = () => {
    let ans = 0
    if(amount >= 1) {
      cart.map((item) => (
        ans += amount * item.summa
        ))
        setPrice(ans)
      }
  };
  const handleRomove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    // handlePrice()
  };
  useEffect(() => {
    handlePrice();
  });
  function handleChange(post, d) {
    setAmount(amount + d)
    console.log(post, d);
  }

  return (
    <div className="wishlist__container">
      {cart.map((post) => (
        <div className="item" key={post.id}>
          <div
            style={{
              width: "70px",
              height: "50px",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <img src={post.thumbnail} alt="img" />
          </div>
          <div className="item-text">
            <p className="item-title">{post.title}</p>
            <p style={{display: 'flex'}}>{post.summa} so'm  </p>
            {/* <div className="wishlist__product-ocunt">x{amount}</div> */}
            <p className="item-desc">{post.text}</p>
          </div>
          {/* Plus and Nimus btns ↓↓ */}
          {/* <div className="btns">
            <button
              className="btns__plus"
              onClick={() => handleChange(post, +1)}
            >
              +
            </button>
            {amount > 1 ? <button className='btns__minus' onClick={() => handleChange(post, -1)}>-</button> : <button disabled> - </button>}
          </div> */}
          <button className="delete__btn" onClick={() => handleRomove(post.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="0.8em"
              height="0.8em"
              viewBox="0 0 24 24"
              font-size="24"
              class="text-slate-400"
            >
              <path
                fill="currentColor"
                d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7Zm2-4h2V8H9v9Zm4 0h2V8h-2v9Z"
              ></path>
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
};

export default WishlistItems;
