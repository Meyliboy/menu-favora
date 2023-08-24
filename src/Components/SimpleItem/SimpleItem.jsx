const SimpleItem = ({post}) => {
  return (
    <div className="simple-item__contain">
      <div className="simple-item">
        <div className="simple-item__img-box">
            <img width={400} src={post.image ? post.image : 'https://menu.favvora-urgench.uz/assets/place-59bce3e1.jpg'} alt="" />
        </div>
        <div className="simple-item__text">
            <h4>{post.title}</h4>
            <div className="simple-tem__summa"><span>{post.summa} so'm</span></div>
            <p>Tarkibi:</p>
            <p className="simple-item__description">{post.text}</p>
        </div>
      </div>
    </div>
  );
};

export default SimpleItem;
