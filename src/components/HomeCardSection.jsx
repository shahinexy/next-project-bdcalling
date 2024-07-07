import Link from 'next/link';
import React from 'react';
import cardImg from '../../public/images/ryrg1rmpxzxfa94206w0xgnexniw.webp'
import cardImg2 from '../../public/images/ufvkupzj7jvu6vm7gy047gdfa40k.webp'
import Image from 'next/image';

const HomeCardSection = () => {
    return (
        <div className='my-20'>
            <div className="border-y py-20 grid md:grid-cols-2 grid-cols-1 gap-7">
                <h2 className='text-5xl font-bold'>Every theme meets a high standard</h2>
                <div className="space-y-5">
                    <p className='text-xl'><span className='font-semibold'>Packed with built‑in features.</span> Offer discounts, recommend products, capture emails, and <Link className='underline underline-offset-8' href="https://help.shopify.com/manual/online-store/themes">do more for your buyers.</Link></p>
                    <p className='text-xl'><span className='font-semibold'>Packed with built‑in features.</span> Offer discounts, recommend products, capture emails, and <Link className='underline underline-offset-8' href="https://help.shopify.com/manual/online-store/themes">do more for your buyers.</Link></p>
                    <p className='text-xl'><span className='font-semibold'>Packed with built‑in features.</span> Offer discounts, recommend products, capture emails, and <Link className='underline underline-offset-8' href="https://help.shopify.com/manual/online-store/themes">do more for your buyers.</Link></p>
                </div>
            </div>

            {/* row card 4  */}
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mt-20 gap-10'>
                <div >
                    <div className="h-[550px] overflow-hidden border border-black rounded-3xl">
                        <Image className='rounded-3xl' src={cardImg2} ></Image>
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
                    <div className="h-[550px] overflow-hidden border border-black rounded-3xl">
                        <Image className='rounded-3xl' src={cardImg} ></Image>
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
                    <div className="h-[550px] overflow-hidden border border-black rounded-3xl">
                        <Image className='rounded-3xl' src={cardImg2} ></Image>
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
                    <div className="h-[550px] overflow-hidden border border-black rounded-3xl">
                        <Image className='rounded-3xl' src={cardImg} ></Image>
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

             {/* row card 3  */}
            <div className='grid md:grid-cols-3 grid-cols-1 mt-20 gap-10'>
                <div>
                    <div className="h-[550px] overflow-hidden border border-black rounded-3xl">
                        <Image className='rounded-3xl' src={cardImg2} ></Image>
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
                    <div className="h-[550px] overflow-hidden border border-black rounded-3xl">
                        <Image className='rounded-3xl' src={cardImg} ></Image>
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
                    <div className="h-[550px] overflow-hidden border border-black rounded-3xl">
                        <Image className='rounded-3xl' src={cardImg2} ></Image>
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

export default HomeCardSection;