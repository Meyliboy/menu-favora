import Items from "../../Components/Items/Items";

const Main = ({ data, value, category }) => {
  return (
    <div className="main__container">
      {data &&
        category.toLowerCase() === "hammasi" &&
        data
          .filter((post) => post.title.toLowerCase().includes(value))
          .map((el) => <Items el={el} key={el.id} />)}
      {data && category.toLowerCase() === "yangi" && (
        <div className="new__category">
          Yangi taomlar ro'yhati hozircha mavjud emas 😶‍🌫️
        </div>
      )}
      {data.length
        ? data
            .filter((post) =>
              post.parent_category.title
                .toLowerCase()
                .includes(category.toLowerCase())
            )
            .filter((post) => post.title.toLowerCase().includes(value))
            .map((el) => <Items el={el} key={el.id} />)
        : data && (
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
              <div className="glob__loader-text">
                Ma'lumotlar yuklanmoqda ...
              </div>
            </div>
          )}
      {data.length &&
        data
          .filter((post) =>
            post.category.title.toLowerCase().includes(category.toLowerCase())
          )
          .filter((post) => post.title.toLowerCase().includes(value))
          .map((el) => <Items el={el} key={el.id} />)}
    </div>
  );
};

export default Main;
