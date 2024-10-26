import { useNavigate } from "react-router-dom";
import Axios from "../../helpers/Axios";
import { useState } from "react";
import Swal from "sweetalert2";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bodyData = { username, email, password, phoneNumber, address };
    try {
      const { data } = await Axios({
        url: "/add-user",
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        data: bodyData,
      });

      // console.log("Registration successful", data);
      navigate("/");

      handleSubmit();
      Swal.fire({
        title: "Information",
        text: "Add new staff success",
        icon: "success",
      });
    } catch (error) {
      // console.log(error.response, "hbsabcbqbch");
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
            onSubmit={handleSubmit}
            className="max-w-lg max-md:mx-auto w-full p-6"
          >
            <div className="mb-12">
              <h3 className="text-gray-800 text-4xl font-extrabold">
                Add new user
              </h3>
            </div>
            <div>
              <label className="text-gray-800 text-[15px] mb-2 block">
                User name
              </label>
              <div className="relative flex items-center mb-4">
                <input
                  className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-stone-600"
                  name="userName"
                  placeholder="Enter user name"
                  required
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="text-gray-800 text-[15px] mb-2 block">
                Email
              </label>
              <div className="relative flex items-center mb-4">
                <input
                  className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-stone-600"
                  name="email"
                  placeholder="Enter email"
                  required
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-gray-800 text-[15px] mb-2 block">
                Password
              </label>
              <div className="relative flex items-center mb-4">
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
            <div>
              <label className="text-gray-800 text-[15px] mb-2 block">
                Address
              </label>
              <div className="relative flex items-center mb-4">
                <input
                  className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-stone-600"
                  name="address"
                  placeholder="Enter address"
                  required
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="text-gray-800 text-[15px] mb-2 block">
                Phone number
              </label>
              <div className="relative flex items-center mb-4">
                <input
                  className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-stone-600"
                  name="phoneNumber"
                  placeholder="Enter phone number"
                  required
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-8">
              <button
                className="w-full shadow-xl py-3 px-6 text-sm tracking-wide font-semibold rounded-md text-black bg-stone-300 hover:bg-stone-500 focus:outline-none"
                type="submit"
                onClick={handleSubmit}
              >
                Register
              </button>
            </div>
          </form>
          <div className="h-full md:py-6 flex items-center relative max-md:before:hidden before:absolute before:bg-gradient-to-r before:from-gray-50 before:via-[#917632] before:to-[#d8cd5ac0] before:h-full before:w-3/4 before:right-0 before:z-0">
            <img
              alt="Dining Experience"
              className="rounded-md lg:w-4/5 md:w-11/12 z-50 relative"
              src="https://i.pinimg.com/564x/65/ca/a2/65caa24886785c71b36c25d32425f9b4.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
