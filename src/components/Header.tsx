
import Link from "next/link";

function Header() {
    return (
        <div className="w-full h-[70px] sm:h-[90px] md:h-[80px] flex justify-center items-center sm:border-none border-b-2">
            <div className="w-[90%] sm:w-[80%] h-full flex flex-col sm:flex-row justify-between items-center">
                {/* Left Section */}
                <div className="text-center sm:text-left">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Exclusive</h1>
                </div>
                {/* Right Section */}
                <div className="mt-4 sm:mt-0">
                    <ul className="flex flex-col sm:flex-row gap-y-2 sm:gap-x-4 md:gap-x-10 text-sm sm:text-base font-bold text-black">
                        <li className="hover:text-pink-700">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="hover:text-pink-700">
                            <Link href="/about">About</Link>
                        </li>
                        <li className="hover:text-pink-700">
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;


