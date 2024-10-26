import { Link } from "react-router-dom";

const Card = (props) => {
  const { products } = props;
  // console.log(products, "ini prop");

  return (
    <>
      <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-60 rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4">
        <div className="bg-black flex justify-center">
          <div className="w-[250px] h-[230px]">
            <img className="w-full h-full" src={products.imgUrl} />
          </div>
        </div>

        <div className="container px-4 py-2">
          <h3 className="text-gray-800 text-lg font-bold truncate">
            {products.name}
          </h3>
          <div className="">
            <p className=" text-sm text-gray-500 leading-relaxed truncate">
              {products.description}
            </p>
          </div>

          <div className="flex flex-wrap justify-end mt-4 text-stone-500">
            <Link to={`${products.id}`}>
              <p>view detail &gt;</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
