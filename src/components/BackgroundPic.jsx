

const BackGroundPic = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6 font-[sans-serif] max-w-5xl max-md:max-w-md mx-auto">
        <div className="max-md:order-1 max-md:text-center">
          <h2 className="md:text-4xl text-3xl md:leading-10 font-extrabold text-gray-800 mb-4">
            Dark Moon
          </h2>
          <p className="mt-4 text-base text-gray-600 leading-relaxed">
          Welcome to Dark Moon, your ultimate destination for exclusive branded products. Dive into a world of luxury and quality, where every item is handpicked from the most sought-after brands around the globe. Whether you are looking for the latest fashion trends, high-tech gadgets, or timeless accessories, we have got you covered.
          </p>
        </div>
        <div className="md:h-[450px]">
          <img
            className="w-full h-full object-cover rounded-lg shadow-xl"
            src= 'https://i.pinimg.com/564x/c7/fd/13/c7fd13b884d4e2bd1778da4153e82299.jpg'
          />
        </div>
      </div>
    </>
  );
};
export default BackGroundPic;
