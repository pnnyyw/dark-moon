import Swal from "sweetalert2";
import NavbarCat from "../../components/NavBarCat";
// import NavbarDetail from "../../components/NavbarDetail";
import Axios from "../../helpers/Axios";
import { useEffect, useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);

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

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
 <div>
        <NavbarCat/>
    </div>
<div>
    <h1 className="text-2xl font-semibold mb-5">Category List</h1>

   
        <div className="mt-5 mx-3">
          <table className="min-w-full bg-white ">
            <thead className="bg-stone-700 whitespace-nowrap">
              <tr className="">
                <th className="p-4 text-center text-1xl font-medium text-white">
                  Id
                </th>
                <th className="p-4 text-center text-1xl font-medium text-white">
                  Name
                </th>
              </tr>
            </thead>
            <tbody className="whitespace-nowrap ">
              {categories.map((el) => (
                <tr className="even:bg-blue-50">
                  <td className="p-4 text-sm text-black">
                  {el.id}
                  </td>
                  <td className="p-4 text-sm text-black">{el.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
    </div>
   
  );
};

export default Categories;
