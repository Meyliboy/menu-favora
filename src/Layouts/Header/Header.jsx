import Filter from "./Filter/Filter";
import NavBar from "./NavBar/NavBar";
import { Context } from "../../Context/Contex";
import { useContext } from "react";
const Header = () => {
  const {setValue, setSearchParams, setCategory} = useContext(Context)
  return (
    <div className="header__container">
      <Filter setValue={setValue} setSearchParams={setSearchParams} />
      <NavBar setCategory={setCategory} />
    </div>
  );
};

export default Header;
