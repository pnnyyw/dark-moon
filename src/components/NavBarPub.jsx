import { Link } from "react-router-dom";


const NavbarPub = (props) => {
  const { SearchProduct, search, setSearch } = props;
  return (
    <>
      <div className="bg-white text-black text-[15px] fixed top-0 left-0 right-0">
        <header className="shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] top-0 sm:px-10 bg-stone-300 z-50 min-h-[70px]">
          <div className="flex flex-wrap items-center gap-4">
            <div>
              <img alt="logo" className="h-12" src='https://i.pinimg.com/564x/02/b4/be/02b4be873624be878b3aa98f6947f06d.jpg' />
              <div
                className="max-lg:hidden lg:!block max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
                id="collapseMenu"
              >
                <div>
                  <p className="font-Georgia font-[Georgia] text-sm text-center">
                    Dark Moon
                  </p>
                </div>
              </div>
            </div>
            <div className="ml-auto">
              <form onSubmit={SearchProduct}>
                <div className="relative flex">
                  <input
                    aria-describedby="button-addon2"
                    aria-label="Search"
                    className="relative m-0 block flex-auto rounded border border-solid border-stone-500 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
                    id="exampleFormControlInput2"
                    placeholder="Search"
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <span
                    className="flex items-center whitespace-nowrap px-3 py-[0.25rem] text-surface dark:border-neutral-400 dark:text-white [&>svg]:h-5 [&>svg]:w-5"
                    id="button-addon2"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </form>
            </div>
            <div className="flex">
              <Link to="/login">
                <button className="mr-6 font-semibold border-none outline-none">
                  <p className="text-stone-700 hover:underline text-1xl">
                    Login
                  </p>
                </button>
              </Link>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};
export default NavbarPub;
