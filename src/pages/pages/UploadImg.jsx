import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import Axios from '../../helpers/Axios';

const UploadImage = () => {
  const [file, setFile] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const UploadImageCover = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);

    try {
      await Axios(
        {
          url: `/products/${id}`,
        },
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate("/");
      Swal.fire({
        title: "Good job!",
        text: "Successfully Change Cover Image!",
        icon: "success",
      });
    } catch (error) {
    //   console.log(error);
      if (error.response.status) {
        Swal.fire({
          title: "Error!",
          text: `${error.response.data.message}`,
          icon: "error",
        });
      }
    }
  };

  return (
    <div className="pl-72 p-10">
      <Link to="/">
        <svg
          className="w-3 ml-2 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
          viewBox="0 0 320.591 320.591"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
            data-original="#000000"
          />
          <path
            d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
            data-original="#000000"
          />
        </svg>
      </Link>

      <form
        onSubmit={UploadImageCover}
        className="font-[sans-serif] max-w-md mx-auto mt-20 align-middle"
      >
        <label className="text-base text-balck font-semibold mb-2 block">
          Change Image Cover
        </label>
        <input
          type="file"
          className="w-full text-gray-400 font-semibold text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-gray-500 rounded"
          name="image"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <p className="text-xs text-gray-400 mt-2">
          PNG, JPG SVG, WEBP, and GIF are Allowed.
        </p>
        <button
          type="submit"
          className="mt-5 px-5 py-2.5 rounded-full text-sm font-semibold tracking-wider border-2 border-black outline-none bg-transparent hover:bg-black text-black hover:text-white transition-all duration-300"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadImage;
