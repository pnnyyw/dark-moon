const Filter = (props) => {
  const { category, setFilter } = props;
  const handleClick = (e) => {
    // console.log(e.target.value,"ini di Filter");
    
    setFilter(e.target.value);
  };
  return (
    <>
      <div>
        <button
          className="text-white bg-stone-700 hover:bg-stone-800 focus:ring-4 focus:outline-none focus:ring-stone-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-stone-600 dark:hover:bg-stone-700 dark:focus:ring-stone-800"
          data-dropdown-toggle="dropdown"
          id="dropdownDefaultButton"
          type="button"
        >
          Filter{" "}
          <svg
            aria-hidden="true"
            className="w-2.5 h-2.5 ms-3"
            fill="none"
            viewBox="0 0 10 6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m1 1 4 4 4-4"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>
        <div
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 max-h-60 overflow-y-auto"
          id="dropdown"
        >
          <ul
            aria-labelledby="dropdownDefaultButton"
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
          >
            {category.map((el) => (
              <li>
                <button
                  onClick={(e) => handleClick(e)}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  key={el.id}
                  value={el.name}
                >
                  {el.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Filter;
