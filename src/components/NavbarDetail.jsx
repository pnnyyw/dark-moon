import { Link } from "react-router-dom";


const NavbarDetail = () => {
  return (
    <>
      <div className="bg-white text-black text-[15px]">
        <header className="shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] sticky top-0 py-3 px-4 sm:px-10 bg-stone-300 z-50 min-h-[70px]">
          <div className="flex flex-wrap items-center gap-4">
            <img alt="logo" className="h-12" src='https://i.pinimg.com/564x/02/b4/be/02b4be873624be878b3aa98f6947f06d.jpg' />
            <div className=" flex flex-wrap gap-10">
              <div>
                <p className="font-Georgia text-2xl text-stone-700">
                  Dark Moon 
                </p>
              </div>
              <Link to="/pub">
                <div>
                  <p className="font-Georgia text-2xl  text-stone-500  hover:text-black">
                    Home
                  </p>
                </div>
              </Link>
            </div>
            <div className="flex ml-auto">
              <Link to="/login">
                <button className="mr-6 font-semibold border-none outline-none">
                  <a className="text-stone-700 font-Georgia text-2xl hover:underline">
                    Login
                  </a>
                </button>
              </Link>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};
export default NavbarDetail;
