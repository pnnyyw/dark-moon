import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Axios from "../../helpers/Axios";
import Swal from "sweetalert2";

function FormData() {
  let { id } = useParams();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [imgUrl, setImgUrl] = useState("");
  const [stock, setStock] = useState();
  const [categoryId, setCategoryId] = useState();
  const [categories, setCategories] = useState([]);

  let navigation = useNavigate();

  const AddProduct = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios({
        url: "/add-products",
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        data: {
          name: name,
          description: description,
          price: Number(price),
          imgUrl: imgUrl,
          stock: Number(stock),
          categoryId: Number(categoryId),
        },
      });
    //   console.log(data, "data add");
      
      AddProduct();
      Swal.fire({
        title: "Information!!",
        text: "Your product been added.",
        icon: "success",
      });
      navigation("/");
    } catch (error) {
    //   console.log(error.response);
        if (error.response.status) {
          Swal.fire({
            title: "Information",
            text: `${error.response.data.message}`,
            icon: "error",
          });
        }
    }
  };

  const getCategories = async () => {
    try {
      let { data } = await Axios({
        url: "/categories",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      setCategories(data);
    } catch (error) {
      if (error.response.status) {
        Swal.fire({
          title: "Information",
          text: `${error.response.data.message}`,
          icon: "error",
        });
      }
    }
  };

  const GetProductById = async () => {
    try {
      let { data } = await Axios({
        url: "/products/" + id,
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      // console.log(data);

      setName(`${data.name}`);
      setDescription(`${data.description}`);
      setPrice(`${data.price}`);
      setImgUrl(`${data.imgUrl}`);
      setStock(`${data.stock}`);
      setCategoryId(`${data.categoryId}`);
    } catch (error) {
        if (error.response.status) {
            Swal.fire({
              title: "Information",
              text: `${error.response.data.message}`,
              icon: "error",
            });
          }
    }
  };

  useEffect(() => {
    getCategories();
    if (id) GetProductById();
  }, []);

  const editProduct = async (e) => {
    e.preventDefault();
    try {
      let { data } = await Axios({
        url: `/products/` + id,
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        data: {
          name: name,
          description: description,
          price: Number(price),
          imgUrl: imgUrl,
          stock: Number(stock),
          categoryId: Number(categoryId),
        },
      });
      //   console.log(data,"data edit");

      navigation("/");
      Swal.fire({
        title: "Information!!",
        text: "Your data successfuly being edited.",
        icon: "success",
      });
    } catch (error) {
      // console.log(error.response);

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
    <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 relative">
        <div className="flex items-center">
          <h3 className="text-blue-600 text-xl font-bold flex-1">
            {id ? <>Edit Product</> : <> Add Product</>}
          </h3>
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
        </div>
        <form
          onSubmit={id ? editProduct : AddProduct}
          className="space-y-4 mt-8"
        >
          <div>
            <label className="text-gray-800 text-sm mb-2 block">
              Name of the product
            </label>
            <input
              className="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-blue-600 focus:bg-transparent rounded-lg"
              placeholder="Enter product name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">
              Descriptions
            </label>
            <textarea
              className="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-blue-600 focus:bg-transparent rounded-lg"
              placeholder="Write about the product"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Price</label>
            <input
              className="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-blue-600 focus:bg-transparent rounded-lg"
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Image</label>
            <input
              className="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-blue-600 focus:bg-transparent rounded-lg"
              type="text"
              placeholder="Image URL"
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
            />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Stock</label>
            <input
              className="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-blue-600 focus:bg-transparent rounded-lg"
              type="number"
              placeholder="Stock"
              value={stock}
              onChange={(e) => setStock(Number(e.target.value))}
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Category
            </label>
            <select
              value={categoryId}
              name="categoryId"
              onChange={(e) => {
                setCategoryId(e.target.value);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option defaultValue>
                -- Select Category --
              </option>
              {categories.map((el) => (
                <option key={el.id} value={el.id}>
                  {el.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-end gap-4 !mt-8">
            <button
              className="px-6 py-3 rounded-lg text-white text-sm border-none outline-none tracking-wide bg-blue-600 hover:bg-blue-700"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default FormData;
