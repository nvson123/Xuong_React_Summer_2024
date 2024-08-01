
const ProductSection = () => {
    return (
        <div className="flex items-center justify-between mt-[50px]">
            <div className="h-[108px] flex flex-col ml-[140px] gap-5">
                <div className="flex gap-4">
                    <div className="w-5 h-10 relative">
                        <div className="w-5 h-10 left-0 top-0 absolute bg-[#db4444] rounded" />
                    </div>
                    <div className="text-[#db4444] text-base font-semibold font-['Poppins'] leading-tight">Products</div>
                </div>
                <div className="text-black text-4xl font-semibold font-['Inter'] leading-[48px] tracking-wider">Explore Our Products</div>
            </div>
        </div>
    )
}

export default ProductSection