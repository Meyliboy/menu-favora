import { Link } from "react-router-dom";
import WishlistItems from "../../Components/Items/WishlistItems/WishlistItems";
import { useEffect, useState } from "react";

const Wishlist = ({cart}) => {
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const storeData = JSON.parse(localStorage.getItem("wishlist")) || [];
    let initialValue = 0
    const total = storeData.reduce((accumulator, current) => accumulator + current.summa * current.count, initialValue)
    setTotal(total)
  },[cart])
  
  return (
    <div className="wishlist__wrapper">
      <div className="wishlist__header">
        <Link to={"/"}>
          <button className="menu__link">
            <span className="menu__link-icon">&laquo;</span>&nbsp;menu
          </button>
        </Link>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          Jami:&nbsp; <span>{total.toLocaleString()}</span> &nbsp;so'm
        </div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Sevimlilar</div>
      </div>
      <div className="wishlist__main">
        {cart.length >= 1 ? <div>
          <WishlistItems cart={cart} />
        </div> : <div className="wishlist__empty-text">
          Sevimlilar ro'yxati bo'sh 🗑️
        </div>}
      </div>
    </div>
  );
};

export default Wishlist;
 