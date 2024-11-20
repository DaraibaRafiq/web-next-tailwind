
import Image from "next/image";
function Sale() {
    return (
        <main>
            <div className="w-full sm:h-full md:h-[500px] flex justify-center items-center mt-10">
                <div className="w-[92%] h-full">
                    <div>
                        <span className="border-l-8 border-pink-700 text-pink-700 mb-5 font-bold">Todays</span>
                        <h2 className="text-3xl sm:text-4xl font-bold mt-5">Flash Sale</h2>
                    </div>
                    {/* Products */}
                    <div className="flex flex-wrap gap-4 justify-center md:justify-between mt-7">
                        <div className="w-[45%] sm:w-[250px] h-auto bg-pink-300">
                            <Image src={"/images/lp.jpg"} alt={"lipstick"} width={250} height={150} />
                            <div className="flex flex-col p-2">
                                <span className="font-bold text-sm sm:text-base">Nude Pink</span>
                                <span className="font-bold text-sm sm:text-base">PKR 1800</span>
                            </div>
                        </div>
                        <div className="w-[45%] sm:w-[250px] h-auto bg-pink-300">
                            <Image src={"/images/blushon2.jpg"} alt={"blush"} width={250} height={150} />
                            <div className="flex flex-col p-2">
                                <span className="font-bold text-sm sm:text-base">Blushon Glow Kit</span>
                                <span className="font-bold text-sm sm:text-base">PKR 4000</span>
                            </div>
                        </div>
                        <div className="w-[45%] sm:w-[250px] h-auto bg-pink-300">
                            <Image src={"/images/fp2.jpg"} alt={"eyeshade"} width={250} height={150} />
                            <div className="flex flex-col p-2">
                                <span className="font-bold text-sm sm:text-base">Flawless Finish Powder</span>
                                <span className="font-bold text-sm sm:text-base">PKR 2600</span>
                            </div>
                        </div>
                        <div className="w-[45%] sm:w-[250px] h-auto bg-pink-300">
                            <Image src={"/images/eyeliner1.jpg"} alt={"fp"} width={250} height={150} />
                            <div className="flex flex-col p-2">
                                <span className="font-bold text-sm sm:text-base">Bold Stroke Liner</span>
                                <span className="font-bold text-sm sm:text-base">PKR 2200</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-5">
                <button className="py-2 px-5 bg-pink-700 rounded-md text-white">View All Products</button>
            </div>
        </main>
    );
}
export default Sale;
