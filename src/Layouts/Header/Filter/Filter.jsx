
const Filter = ({setValue, setSearchParams}) => {

  const handleSubmit = (e) => {
    const query = e.target.value
    setValue(query)
    setSearchParams({search: query})
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
      </div>
    </div>
  );
};

export default Filter;
