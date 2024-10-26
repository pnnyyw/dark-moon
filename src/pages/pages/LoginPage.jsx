import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios from "../../helpers/Axios";
import Swal from "sweetalert2";

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios({
        url: "/login",
        method: "POST",
        data: { email, password },
      });
      console.log(data, "ini dadadadadada");
      localStorage.setItem("access_token", data.access_token);
      navigate("/");
    } catch (error) {
      console.log(error, ",,,,,,,,,,,");
      
      if (error.response.status) {
        Swal.fire({
          title: "Information",
          text: `${error.response.data.message}`,
          icon: "error",
        });
      }
    }
  };
  return (
    <>
      <div className="font-[sans-serif] max-w-7xl mx-auto h-screen">
        <div className="grid md:grid-cols-2 items-center gap-8 h-full ml-7">
          <form
            onSubmit={handleLogin}
            className="max-w-lg max-md:mx-auto w-full p-6"
          >
            <div className="mb-12">
              <h3 className="text-gray-800 text-4xl font-extrabold">Log in</h3>
            </div>
            <div>
              <label className="text-gray-800 text-[15px] mb-2 block">
                Email
              </label>
              <div className="relative flex items-center">
                <input
                  className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-stone-600"
                  name="email"
                  placeholder="Enter email"
                  required
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <svg
                  className="w-[18px] h-[18px] absolute right-4"
                  fill="#bbb"
                  stroke="#bbb"
                  viewBox="0 0 682.667 682.667"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <clipPath clipPathUnits="userSpaceOnUse" id="a">
                      <path d="M0 512h512V0H0Z" data-original="#000000" />
                    </clipPath>
                  </defs>
                  <g
                    clipPath="url(#a)"
                    transform="matrix(1.33 0 0 -1.33 0 682.667)"
                  >
                    <path
                      d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                      data-original="#000000"
                      fill="none"
                      strokeMiterlimit="10"
                      strokeWidth="40"
                    />
                    <path
                      d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                      data-original="#000000"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div className="mt-4">
              <label className="text-gray-800 text-[15px] mb-2 block">
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-stone-600"
                  name="password"
                  placeholder="Enter password"
                  required
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-8">
              <button
                className="w-full shadow-xl py-3 px-6 text-sm tracking-wide font-semibold rounded-md text-black bg-stone-300 hover:bg-stone-500 focus:outline-none"
                type="submit"
                onClick={handleLogin}
              >
                Log in
              </button>
            </div>
            
          </form>
          <div className="h-full md:py-6 flex items-center relative max-md:before:hidden before:absolute before:bg-gradient-to-r before:from-gray-50 before:via-[#917632] before:to-[#d8cd5ac0] before:h-full before:w-3/4 before:right-0 before:z-0">
            <img
              alt="Dining Experience"
              className="rounded-md lg:w-4/5 md:w-11/12 z-50 relative"
              src='https://i.pinimg.com/564x/8d/4e/3b/8d4e3b266e67a703c36e1b5339212897.jpg'
            />
          </div>
        </div>
      </div>
    </>
  );
}
