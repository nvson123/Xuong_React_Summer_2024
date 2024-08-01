
import heartIcon from '../assets/heart.png';
const ProductCard = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="grid grid-cols-4 gap-8">
        {/* start product card */}
        <div className="relative flex-col justify-start items-start gap-4">
          <div className="w-[270px] h-[250px] bg-neutral-100 rounded relative overflow-hidden group">
            {/* Add to Cart button */}
            <div className="w-full h-[41px] bg-black text-white absolute bottom-[-41px] left-0 rounded-bl rounded-br transition-all duration-300 ease-in-out group-hover:bottom-0 flex justify-center items-center z-10">
              <span className="text-base font-medium font-['Poppins']">Add To Cart</span>
            </div>
            <div className="left-[224px] top-[12px] absolute flex-col justify-start items-start gap-2 inline-flex z-0">
              <div className="w-[34px] h-[34px] relative">
                <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
                <img src={heartIcon} className="w-6 h-6 left-[5px] top-[5px] absolute" />
              </div>
              <div className="w-[34px] h-[34px] relative">
                <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
                <div className="w-6 h-6 px-[2.39px] py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex">
                  <div className="w-[19.23px] h-3.5 relative"></div>
                </div>
              </div>
            </div>
            <div className="w-[190px] h-[180px] pl-[38px] pr-[37px] left-[40px] top-[35px] absolute justify-center items-center inline-flex z-0">
              <img className="w-[115px] h-[180px]" src="https://via.placeholder.com/115x180" />
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="text-black text-base font-medium font-['Poppins'] leading-normal">Breed Dry Dog Food</div>
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="text-[#db4444] text-base font-medium font-['Poppins'] leading-normal">$100</div>
              <div className="w-8 h-5 opacity-50 text-black text-sm font-semibold font-['Poppins'] leading-[21px]">(35)</div>
            </div>
          </div>
        </div>
        {/* Add more product cards as needed */}
      </div>
      <div className="mt-8 h-14 px-12 py-4 bg-[#db4444] rounded justify-center items-center flex">
        <div className="text-[#f9f9f9] text-base font-medium font-['Poppins'] leading-normal">View All Products</div>
      </div>
    </div>
  );
}

export default ProductCard;
