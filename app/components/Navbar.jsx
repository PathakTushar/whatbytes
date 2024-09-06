import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md text-lg fixed w-full z-20">
            <div className="w-full xl:w-[80%] mx-auto flex items-center justify-between py-4 px-6 md:px-2 lg:px-6">
                <div className="flex items-center space-x-3 lg:space-x-10">
                    <div className="md:flex text-2xl font-bold text-black">
                        <Link href="/">WhatBytes</Link>
                    </div>
                </div>

                <div className="flex items-center shadow-md rounded-md space-x-2 border-2 px-2 py-1 border-slate-200">
                    <div className="h-8 w-8 rounded-full overflow-hidden border-2 border-gray-300">
                        <Image
                            src="/img_tushar.jpeg"
                            alt="profile"
                            width={32}
                            height={32}
                            className="object-cover"
                        />
                    </div>
                    <div className="font-bold">
                        Tushar
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
