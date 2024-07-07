import Image from 'next/image';
import React from 'react';
import heroCardImg from '../../public/images/zx2c5zmpirbt8e0j4p4smtb1oa2d.webp'
import heroCardImg2 from '../../public/images/h83kpm7w2eryvtm6klhv59mj1ukf.webp'

const HeroSection = () => {
    return (
        <div>
            <div>
                <h1 className="text-8xl font-bold">Shopify themes— <br />
                    built for commerce</h1>
                <div className='flex justify-between gap-5'>
                    <p className='text-3xl mt-5'>Take your store from launch to scale with themes that make selling easy.</p>
                    <button className='bg-black px-12 py-5 rounded-full text-white text-2xl'>Explore themes</button>
                </div>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 mt-20 gap-10">
                <div>
                    <div className="relative h-[500px] overflow-hidden border border-black rounded-3xl">
                        <Image className='rounded-3xl' src={heroCardImg} ></Image>

                        <div className="absolute right-5 bottom-0 w-[200px] h-[300px] overflow-hidden border border-black rounded-t-3xl">
                            <Image className='rounded-t-3xl h-full' src={heroCardImg2} ></Image>
                        </div>
                    </div>
                    <div className="mt-4 ">
                        <div className="flex justify-between gap-5">
                            <h3 className='text-3xl'>Dawn</h3>
                            <p className='text-xl'>Free</p>
                        </div>
                        <div className="space-x-3 mt-5">
                            <button className='border rounded-full px-4 py-4 bg-[#22457A]'></button>
                            <button className='border rounded-full px-4 py-4 bg-[#DCD5D0]'></button>
                            <button className='border rounded-full px-4 py-4 bg-[#22457A]'></button>
                        </div>
                        <div className="flex gap-10 flex-wrap mt-8">
                            <p className='rounded-full bg-gray-200 px-5 py-2'>Sticky header</p>
                            <p className='rounded-full bg-gray-200 px-5 py-2'>Mega menu</p>
                            <p className='rounded-full bg-gray-200 px-5 py-2'>Color swatches</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative h-[500px] overflow-hidden border border-black rounded-3xl">
                        <Image className='rounded-3xl' src={heroCardImg} ></Image>


                        <div className="absolute right-5 bottom-0 w-[200px] h-[300px] overflow-hidden border border-black rounded-t-3xl">
                            <Image className='rounded-t-3xl h-full' src={heroCardImg2} ></Image>
                        </div>
                    </div>
                    <div className="mt-4 ">
                        <div className="flex justify-between gap-5">
                            <h3 className='text-3xl'>Dawn</h3>
                            <p className='text-xl'>Free</p>
                        </div>
                        <div className="space-x-3 mt-5">
                            <button className='border rounded-full px-4 py-4 bg-[#22457A]'></button>
                            <button className='border rounded-full px-4 py-4 bg-[#DCD5D0]'></button>
                            <button className='border rounded-full px-4 py-4 bg-[#22457A]'></button>
                        </div>
                        <div className="flex gap-10 flex-wrap mt-8">
                            <p className='rounded-full bg-gray-200 px-5 py-2'>Sticky header</p>
                            <p className='rounded-full bg-gray-200 px-5 py-2'>Mega menu</p>
                            <p className='rounded-full bg-gray-200 px-5 py-2'>Color swatches</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;