import delivery from '../assets/delivery.svg'
import money from '../assets/money.svg'
import service from '../assets/service.svg'

const Guarantee = () => {
  return (
    <div className="flex justify-center items-center h-[161px] gap-[88px] mt-10 mb-5">
      <div className="flex flex-col justify-start items-center gap-6">
        <div className="w-20 h-20 relative">
          <div className="w-20 h-20 left-0 top-0 absolute">
            <div className="w-20 h-20 left-0 top-0 absolute opacity-30 bg-[#2f2e30] rounded-full" />
            <img src={delivery} alt=""  className="w-[58px] h-[58px] left-[11px] top-[11px] absolute bg-black rounded-full" />
          </div>
          <div className="w-10 h-10 left-[20px] top-[20px] absolute" />
        </div>
        <div className="flex flex-col justify-start items-center gap-2">
          <div className="text-black text-xl font-semibold font-['Poppins'] leading-7">FREE AND FAST DELIVERY</div>
          <div className="text-center text-black text-sm font-normal font-['Poppins'] leading-[21px]">Free delivery for all orders over $140</div>
        </div>
      </div>

      <div className="flex flex-col justify-start items-center gap-6">
        <div className="w-20 h-20 relative">
          <div className="w-20 h-20 left-0 top-0 absolute">
            <div className="w-20 h-20 left-0 top-0 absolute opacity-30 bg-[#2f2e30] rounded-full" />
            <img src={service} className="w-[58px] h-[58px] left-[11px] top-[11px] absolute bg-black rounded-full" />
          </div>
          <div className="w-10 h-10 left-[20px] top-[20px] absolute" />
        </div>
        <div className="flex flex-col justify-start items-center gap-2">
          <div className="text-black text-xl font-semibold font-['Poppins'] leading-7">24/7 CUSTOMER SERVICE</div>
          <div className="text-black text-sm font-normal font-['Poppins'] leading-[21px]">Friendly 24/7 customer support</div>
        </div>
      </div>


      <div className="flex flex-col justify-start items-center gap-6">
        <div className="w-20 h-20 relative">
          <div className="w-20 h-20 left-0 top-0 absolute">
            <div className="w-20 h-20 left-0 top-0 absolute opacity-30 bg-[#2f2e30] rounded-full" />
            <img src={money} className="w-[58px] h-[58px] left-[11px] top-[11px] absolute bg-black rounded-full" />
          </div>
          <div className="w-10 h-10 left-[20px] top-[20px] absolute justify-center items-center inline-flex">
            <div className="w-10 h-10 relative" />
          </div>
        </div>
        <div className="flex flex-col justify-start items-center gap-2">
          <div className="text-black text-xl font-semibold font-['Poppins'] leading-7">MONEY BACK GUARANTEE</div>
          <div className="text-black text-sm font-normal font-['Poppins'] leading-[21px]">We return money within 30 days</div>
        </div>
      </div>
    </div>
  );
};

export default Guarantee;
