import React from 'react';
import 'tailwindcss/tailwind.css';
import leftArrow from '../assets/leftarrow.png'
import rightArrow from '../assets/rightarrow.png'
import phone from '../assets/phone.svg'
import computer from '../assets/computer.svg'
import watch from '../assets/watch.svg'
import camera from '../assets/camera.svg'
import headphone from '../assets/headphone.svg'
import gaming from '../assets/gaming.svg'
const CategorySection: React.FC = () => {
    return (
        <div className="flex flex-col mt-10">
            <div className="flex items-center justify-between">
                <div className="h-[108px] flex flex-col ml-[140px] gap-5">
                    <div className="flex gap-4">
                        <div className="w-5 h-10 relative">
                            <div className="w-5 h-10 left-0 top-0 absolute bg-[#db4444] rounded" />
                        </div>
                        <div className="text-[#db4444] text-base font-semibold font-['Poppins'] leading-tight">Categories</div>
                    </div>
                    <div className="text-black text-4xl font-semibold font-['Inter'] leading-[48px] tracking-wider">Browse By Category</div>
                </div>
                <div className="flex justify-end pr-[150px] gap-2 mt-6">
                    <div className="w-[46px] h-[46px] relative">
                        <div className="w-[46px] h-[46px] left-0 top-0 absolute bg-neutral-100 rounded-full" />
                        <img src={leftArrow} className="w-6 h-6 left-[11px] top-[11px] absolute" />
                    </div>
                    <div className="w-[46px] h-[46px] relative">
                        <div className="w-[46px] h-[46px] left-0 top-0 absolute bg-neutral-100 rounded-full" />
                        <img src={rightArrow} className="w-6 h-6 left-[11px] top-[11px] absolute" />
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center gap-[30px] mt-10">
                {/* Phone category card */}
                <div className="w-[170px] h-[145px] flex flex-col justify-center items-center gap-4 p-4 rounded border border-black/30 transition-colors duration-300 ease-in-out hover:bg-[#DB4444] group">
                    <div className="w-14 h-14 flex justify-center items-center">
                        <img src={phone} alt="Phone" className="transition-colors duration-300 ease-in-out group-hover:filter group-hover:brightness-0 group-hover:invert" />
                    </div>
                    <div className="text-black text-base font-normal font-['Poppins'] leading-normal transition-colors duration-300 ease-in-out group-hover:text-white">Phones</div>
                </div>

                {/* Computer category card */}
                <div className="w-[170px] h-[145px] flex flex-col justify-center items-center gap-4 p-4 rounded border border-black/30 transition-colors duration-300 ease-in-out hover:bg-[#DB4444] group">
                    <div className="w-14 h-14 flex justify-center items-center">
                        <img src={computer} alt="Computer" className="transition-colors duration-300 ease-in-out group-hover:filter group-hover:brightness-0 group-hover:invert" />
                    </div>
                    <div className="text-black text-base font-normal font-['Poppins'] leading-normal transition-colors duration-300 ease-in-out group-hover:text-white">Computers</div>
                </div>

                {/* SmartWatch category card */}
                <div className="w-[170px] h-[145px] flex flex-col justify-center items-center gap-4 p-4 rounded border border-black/30 transition-colors duration-300 ease-in-out hover:bg-[#DB4444] group">
                    <div className="w-14 h-14 flex justify-center items-center">
                        <img src={watch} alt="SmartWatch" className="transition-colors duration-300 ease-in-out group-hover:filter group-hover:brightness-0 group-hover:invert" />
                    </div>
                    <div className="text-black text-base font-normal font-['Poppins'] leading-normal transition-colors duration-300 ease-in-out group-hover:text-white">SmartWatch</div>
                </div>

                {/* Camera category card */}
                <div className="w-[170px] h-[145px] flex flex-col justify-center items-center gap-4 p-4 rounded border border-black/30 transition-colors duration-300 ease-in-out hover:bg-[#DB4444] group">
                    <div className="w-14 h-14 flex justify-center items-center">
                        <img src={camera} alt="Camera" className="transition-colors duration-300 ease-in-out group-hover:filter group-hover:brightness-0 group-hover:invert" />
                    </div>
                    <div className="text-black text-base font-normal font-['Poppins'] leading-normal transition-colors duration-300 ease-in-out group-hover:text-white">Camera</div>
                </div>

                {/* HeadPhones category card */}
                <div className="w-[170px] h-[145px] flex flex-col justify-center items-center gap-4 p-4 rounded border border-black/30 transition-colors duration-300 ease-in-out hover:bg-[#DB4444] group">
                    <div className="w-14 h-14 flex justify-center items-center">
                        <img src={headphone} alt="HeadPhones" className="transition-colors duration-300 ease-in-out group-hover:filter group-hover:brightness-0 group-hover:invert" />
                    </div>
                    <div className="text-black text-base font-normal font-['Poppins'] leading-normal transition-colors duration-300 ease-in-out group-hover:text-white">HeadPhones</div>
                </div>

                {/* Gaming category card */}
                <div className="w-[170px] h-[145px] flex flex-col justify-center items-center gap-4 p-4 rounded border border-black/30 transition-colors duration-300 ease-in-out hover:bg-[#DB4444] group">
                    <div className="w-14 h-14 flex justify-center items-center">
                        <img src={gaming} alt="Gaming" className="transition-colors duration-300 ease-in-out group-hover:filter group-hover:brightness-0 group-hover:invert" />
                    </div>
                    <div className="text-black text-base font-normal font-['Poppins'] leading-normal transition-colors duration-300 ease-in-out group-hover:text-white">Gaming</div>
                </div>
            </div>


        </div>
    );
};

export default CategorySection;
