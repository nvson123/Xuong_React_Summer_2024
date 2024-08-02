import Guarantee from '../components/Guarantee';
import DeleteIcon from '../assets/delete.svg';

const Cart = () => {
  return (
    <>
      <div className="h-[21px] justify-start items-center gap-3 inline-flex ml-[120px]">
        <div className="opacity-50 text-black text-sm font-normal font-['Poppins'] leading-[21px]">Home</div>
        <div className="w-[13.19px] h-[0px] origin-top-left rotate-[117.05deg] border border-black/50"></div>
        <div className="text-black text-sm font-normal font-['Poppins'] leading-[21px]">Cart</div>
      </div>
      <div className="flex justify-center items-start gap-8 my-8">
        <div className="w-[806px]">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-[#DB4444] text-white font-poppins">
                <th className="p-2 text-left text-base">Product</th>
                <th className="p-2 text-left text-base">Name</th>
                <th className="p-2 text-left text-base">Price</th>
                <th className="p-2 text-left text-base">Quantity</th>
                <th className="p-2 text-left text-base">Subtotal</th>
                <th className="p-2 text-left text-base"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-2">
                  <img
                    className="w-[111.35px] h-[100px]"
                    src="https://via.placeholder.com/111x100"
                    alt="Product"
                  />
                </td>
                <td className="p-2 text-black text-base font-poppins">Product name</td>
                <td className="p-2 text-black text-base font-poppins">300</td>
                <td className="p-2 text-black text-base font-poppins">
                  <div className="inline-flex items-center">
                    <div className="w-[46.32px] h-[30px] bg-[#d9d9d9] rounded-sm border border-[#d9d9d9] flex items-center justify-center">
                      1
                    </div>
                  </div>
                </td>
                <td className="p-2 text-black text-base font-poppins">300</td>
                <td>
                  <button>
                    <img src={DeleteIcon} alt="Delete" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="w-[393px]">
          <div className="bg-[#d9d9d9]/0 border border-[#d9d9d9] p-4 relative">
            <div className="text-black text-[32px] font-bold font-['Inter'] leading-normal tracking-wide mb-4">Cart Totals</div>
            <div className="flex justify-between mb-4">
              <div className="text-black text-base font-normal font-['Poppins']">Subtotal</div>
              <div className="text-black text-base font-normal font-['Poppins']">300</div>
            </div>
            <div className="flex justify-between mb-4">
              <div className="text-black text-2xl font-bold font-['Poppins']">Total</div>
              <div className="text-[#db4444] text-xl font-bold font-['Poppins']">300</div>
            </div>
            <button className="w-full bg-[#db4444] text-[#f9f9f9] text-base font-medium font-['Poppins'] py-2.5 rounded">
              Check out
            </button>
          </div>
        </div>
      </div>
      <Guarantee />
    </>
  );
};

export default Cart;
