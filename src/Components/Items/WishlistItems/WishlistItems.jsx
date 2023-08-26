import { useContext } from "react";
import { Context } from "../../../Context/Contex";

const WishlistItems = ({ cart }) => {
  const { setCart } = useContext(Context);

  const removeItemCart = (id) => {
    const data = JSON.parse(localStorage.getItem("wishlist"));
    const resDeleted = data.filter((item) => item.id !== id);
    localStorage.setItem("wishlist", JSON.stringify(resDeleted));
    setCart(resDeleted);
  };

  function isCounterItem(post, action) {
    const storeData = JSON.parse(localStorage.getItem("wishlist")) || [];
    const resaultData = storeData.map((item) => {
      let count = item.count;
      if (item.id === post.id) {
        if (action === "plus") {
          count++;
        } else if (action === "minus") {
          count--;
        }
      }
      return { ...item, count };
    });
    localStorage.setItem("wishlist", JSON.stringify(resaultData));
    setCart(resaultData);
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
            <p style={{ display: "flex" }}>
              {post.summa} so'm{" "}
              <div className="wishlist__product-ocunt">x{post.count}</div>
            </p>

            <p className="item-desc">{post.text}</p>
          </div>
          {/* Plus and Nimus btns ↓↓ */}
          <div className="btns">
            <button
              className="btns__plus"
              onClick={() => isCounterItem(post, "plus")}
            >
              +
            </button>
            {post.count > 1 ? (
              <button
                className="btns__minus"
                onClick={() => isCounterItem(post, "minus")}
              >
                -
              </button>
            ) : (
              <button disabled> - </button>
            )}
          </div>
          <button
            className="delete__btn"
            onClick={() => removeItemCart(post.id)}
          >
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
