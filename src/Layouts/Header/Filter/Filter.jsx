
const Filter = ({setValue, setSearchParams}) => {

  const handleSubmit = (e) => {
    const query = e.target.value
    setValue(query)
    setSearchParams({search:  query})
  }

  return (
    <div className="filter">
      <div className="filter-form">
        <span className="search-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 256 256"
            class="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
            font-size="24"
          >
            <path
              fill="currentColor"
              d="m228.24 219.76l-51.38-51.38a86.15 86.15 0 1 0-8.48 8.48l51.38 51.38a6 6 0 0 0 8.48-8.48ZM38 112a74 74 0 1 1 74 74a74.09 74.09 0 0 1-74-74Z"
            ></path>
          </svg>
        </span>
        <input onChange={(e) => handleSubmit(e)} type="text" placeholder="Qidirish ..." name="search" />
        <button className="drawer__btn"><svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24" color="#858585" font-size="20"><path fill="currentColor" d="M14 12v7.88c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0l-2.01-2.01a.989.989 0 0 1-.29-.83V12h-.03L4.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L14.03 12H14Z"></path></svg></button>
      </div>
    </div>
  );
};

export default Filter;
