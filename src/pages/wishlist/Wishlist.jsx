import { Link } from "react-router-dom";
import WishlistItems from "../../Components/Items/WishlistItems/WishlistItems";
import { Context } from "../../Context/Contex";
import { useContext } from "react";

const Wishlist = ({cart}) => {
  const {price, getTotal} = useContext(Context)
  return (
    <div className="wishlist__wrapper">
      <div className="wishlist__header">
        <Link to={"/"}>
          <button className="menu__link">
            <span className="menu__link-icon">&laquo;</span>&nbsp;menu
          </button>
        </Link>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          Jami:&nbsp; <span>{getTotal()}</span> so'm
        </div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Sevimlilar</div>
      </div>
      <div className="wishlist__main">
        {cart.length > 0 ? <div>
          <WishlistItems cart={cart} />
        </div> : <div className="wishlist__empty-text">
          Sevimlilar ro'yxati bo'sh 🗑️
        </div>}
      </div>
    </div>
  );
};

export default Wishlist;
