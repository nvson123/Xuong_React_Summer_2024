import React from 'react';
import 'tailwindcss/tailwind.css';
import searchIcon from '../assets/search.png';
import heartIcon from '../assets/heart.png';
import cartIcon from '../assets/cart.png';

const Header: React.FC = () => {
    return (
        <div>
            {/* Top Header */}
            <div className="w-full bg-black h-12 flex items-center justify-center">
                <p className="text-white font-poppins bg-black">
                    Summer Sale For Products And Free Express Delivery - OFF 50% le van xong
                </p>
            </div>

            {/* Navigation Bar */}
            <div className="w-[1170px] h-[38px] flex items-center justify-between mx-auto pt-[70px] ">
                <div className="flex items-center gap-[190px]  ">
                    <span className="font-inter text-2xl font-bold text-black">Exclusive</span>
                </div>

                <div className="flex items-center gap-[48px] w-[370px] ml-[80px]">
                    <a href="#" className="font-poppins text-black text-[16px]">Home</a>
                    <a href="#" className="font-poppins text-black text-[16px]">Contact</a>
                    <a href="#" className="font-poppins text-black text-[16px]">Sign In</a>
                    <a href="#" className="font-poppins text-black text-[16px]">Sign Up</a>
                </div>

                <div className="flex items-center space-x-[16px]">
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            placeholder="What are you looking for ?"
                            className="w-[244px] h-[38px] border bg-gray-200 rounded-md pl-3 pr-10 placeholder-custom"
                        />
                        <img
                            src={searchIcon}
                            alt="Search"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-transparent"
                            width="24"
                            height="24"
                        />
                    </div>
                    <img
                        src={heartIcon}
                        alt="Heart"
                        className="text-black"
                        width="32"
                        height="32"
                    />
                    <img
                        src={cartIcon}
                        alt="Cart"
                        className="text-black"
                        width="32"
                        height="32"
                    />
                </div>
            </div>
            <div className="w-full h-0 border-t border-gray-300 mt-[50px]">

            </div>
        </div>
    );
}

export default Header;
