const SimpleItem = ({post, isLike,handleItmsCart, setModal}) => {
  return (
    <div className="simple-item__contain">
      <div className="simple-item">
        <div className="simple-item__img-box">
            <img width={400} src={post.image ? post.image : 'https://menu.favvora-urgench.uz/assets/place-59bce3e1.jpg'} alt="" />
        </div>
        <div className="simple-item__text">
          <div style={{display: 'flex', justifyContent: 'flex-end', margin: '5px 0'}}><button className="btn__close-modal" onClick={() => setModal(false)}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" font-size="20" class="text-white md:text-black"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"></path></svg></button></div>
          <div style={{display: 'flex', justifyContent: 'space-between', paddingRight: '8px'}}>
            <h4>{post.title}</h4> 
            <button onClick={() => handleItmsCart(post)}>
          {isLike ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              font-size="24"
            >
              <path
                fill="currentColor"
                d="m10.65 19.8l-1.725-1.575q-2.65-2.425-4.788-4.813T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.325 0 2.5.562t2 1.538q.825-.975 2-1.538t2.5-.562q2.35 0 3.925 1.575T22 8.15q0 2.875-2.125 5.275T15.05 18.25l-1.7 1.55q-.575.525-1.35.525t-1.35-.525Z"
              ></path>
              :
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              font-size="24"
            >
              <path
                fill="currentColor"
                d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812Q2.775 11.5 2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.388 2.25t-1.362 2.412q-.975 1.313-2.625 2.963T13.45 19.7L12 21Zm0-2.7q2.4-2.15 3.95-3.688t2.45-2.674q.9-1.138 1.25-2.026T20 8.15q0-1.5-1-2.5t-2.5-1q-1.175 0-2.175.662T12.95 7h-1.9q-.375-1.025-1.375-1.688T7.5 4.65q-1.5 0-2.5 1t-1 2.5q0 .875.35 1.763t1.25 2.025q.9 1.137 2.45 2.675T12 18.3Zm0-6.825Z"
              ></path>
            </svg>
          )}
        </button>
          </div>
            <div className="simple-tem__summa"><span>{post.summa} so'm</span></div>
            <p>Tarkibi:</p>
            <p className="simple-item__description">{post.text}</p>
        </div>
      </div>
    </div>
  );
};

export default SimpleItem;
