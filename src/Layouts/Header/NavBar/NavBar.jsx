import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import URL from "../../../Middleware/GetApi";

const NavBar = ({ setCategory }) => {


  const [dataNav, setDataNav] = useState([]);
  const [selectedID, setSelectedID] = useState();
  const [selectedID2, setSelectedID2] = useState();
  const [selectedIDD, setSelectedIDD] = useState();
  const [show2, setShow2] = useState(false);
  const [showd, setShowd] = useState(false);

  useEffect(() => {
    fetch(`${URL}category`)
      .then((res) => res.json())
      .then((dataNav) => {
        setDataNav(dataNav);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleLink(id, title) {
    if (id === 2) {
      setShow2(true)
    } else {
      setShow2(false)
    } 
    if (id === 21) {
      setShowd(true)
    } else {
      setShowd(false)
    }
    setSelectedID(id);
    setCategory(title);
  }
  function handleLink2(id, title) {
    setSelectedID2(id);
    setCategory(title);
  }
  function handleLinkD(id, title) {
    setSelectedIDD(id);
    setCategory(title);
  }
  const getSelectedClass = (id) => (selectedID === id ? "selected" : "");
  const getSelectedClass2 = (id) => (selectedID2 === id ? "selected" : "");
  const getSelectedClassD = (id) => (selectedIDD === id ? "selected" : "");
  const navFilter = dataNav.filter((el) => el.parent === null);
  const nav2 = dataNav.filter((el) => el.parent === 2);
  const drinks = dataNav.filter((el) => el.parent === 21);

  return (
    <div className="nav-bar">
      <ul style={{marginBottom: '5px'}}>
        <NavLink to={"/"}>
          <li onClick={() => setCategory('hammasi')}><button className="nav-bar__all-link">Hammasi</button></li>
        </NavLink>
        {navFilter.length ? (
          navFilter.map((el) => (
            <li
              key={el.id}
              className={` ${getSelectedClass(el.id)}`}
              onClick={() => handleLink(el.id, el.title, el.parent)}
            >
              {el.title}
            </li>
          ))
        ) : (
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </ul>
      <div className="nav-bar-item-box">
      <ul className={`${show2 ? 'list__transform-on' : 'list__transform-off'}`}>
        {show2 && nav2.map((i) => (
          <li
            key={i.id}
            className={` ${getSelectedClass2(i.id)}`}
            onClick={() => handleLink2(i.id, i.title, i.parent)}
          >
            {i.title}
          </li>
        )) }
      </ul>
      <ul className={`${showd ? 'list__transform-on' : 'list__transform-off'}`}>
        {showd &&
          drinks.map((d) => (
            <li
              key={d.id}
              className={`handleFilter ${getSelectedClassD(d.id)}`}
              onClick={() => handleLinkD(d.id, d.title, d.parent)}
            >
              {d.title}
            </li>
          ))}
      </ul>
      </div>
    </div>
  );
};

export default NavBar;
