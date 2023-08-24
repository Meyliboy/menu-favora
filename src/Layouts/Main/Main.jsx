import { useParams } from "react-router-dom";
import Items from "../../Components/Items/Items";
import { useEffect, useState } from "react";
import URL from "../../Middleware/GetApi";
import SimpleItem from "../../Components/SimpleItem/SimpleItem";

const Main = ({ data, value, category }) => {
  const {id} = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    fetch(`${URL}${id}/`)
    .then(res => res.json())
    .then(data => setPost(data))

  }, [id])

  return (
    <div className="main__container">
      {post &&  <SimpleItem post={post}/>}
      {!post && category.toLowerCase() === 'hammasi' && 
      data.filter((post) => post.title.toLowerCase().includes(value))
          .map((el) => <Items el={el} key={el.id} />)}
      {!post && category.toLowerCase() === 'yangi' && <div className="new__category">Yangi taomlar ro'yhati hozircha mavjud emas 😶‍🌫️</div>}
      {!post && data.length ? (
        data
        .filter((post) => post.parent_category.title.toLowerCase().includes(category.toLowerCase()))
        .filter((post) => post.title.toLowerCase().includes(value))
        .map((el) => <Items el={el} key={el.id}/>)
        ) : !post && (
          <div className="loader-container">
          <div className="lds-grid">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="glob__loader-text">Ma'lumotlar yuklanmoqda ...</div>
        </div>
      )}
      {!post && data.length && 
      data.filter((post) => post.category.title.toLowerCase().includes(category.toLowerCase()))
          .filter((post) => post.title.toLowerCase().includes(value))
          .map((el) => <Items el={el} key={el.id}/>)}
    </div>
  );
};

export default Main;
