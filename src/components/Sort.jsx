import { useState } from "react";

const Sort = (props) => {
  const {sort, setSort} = props;

  
  return (
    <>
      {sort === "ASC" ? (
        <div
          className="flex flex-row bg-stone-700 rounded-full  hover:bg-stone-800 focus:ring-4 focus:outline-none focus:ring-stone-300 dark:bg-stone-600 dark:hover:bg-stone-700 dark:focus:ring-stone-800"
          onClick={() => setSort("DESC")}
        >
          <div className=" p-2 border-4 border-stone-500 rounded-full ">
            <svg
              aria-hidden="true"
              className="w-4 h-4 text-white dark:text-white"
              fill="none"
              viewBox="0 0 10 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 1v12m0 0 4-4m-4 4L1 9"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      ) : (
        <div
          className="flex flex-row  bg-stone-700 rounded-full  hover:bg-stone-800 focus:ring-4 focus:outline-none focus:ring-stone-300 dark:bg-stone-600 dark:hover:bg-stone-700 dark:focus:ring-stone-800"
          onClick={() => setSort("ASC")}
        >
          <div className="p-2 border-4 border-stone-500 rounded-full">
            <svg
              aria-hidden="true"
              className="w-4 h-4 text-white dark:text-white"
              fill="none"
              viewBox="0 0 10 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 13V1m0 0L1 5m4-4 4 4"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      )}
      {/* <div className="flex flex-row font-mono ">
        <div className="flex flex-row  bg-red-600">
          <div>
            <p>Newest</p>
          </div>
          <div>
            <svg
              aria-hidden="true"
              className="w-6 h-6 text-gray-800 dark:text-white"
              fill="none"
              viewBox="0 0 10 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 13V1m0 0L1 5m4-4 4 4"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-row bg-yellow-400 font-mono">
          <div>
            <p>Oldest</p>
          </div>
          <div>
            <svg
              aria-hidden="true"
              className="w-6 h-6 text-gray-800 dark:text-white"
              fill="none"
              viewBox="0 0 10 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 1v12m0 0 4-4m-4 4L1 9"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default Sort;
