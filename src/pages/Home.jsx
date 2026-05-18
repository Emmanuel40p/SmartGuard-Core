import react from "react"
import "@/input.css"
import { Shield } from "lucide-react";
export default function HomePage() {
    return (
        <>
            <nav className="flex flex-row mt-3 ml-3 items-center ">
                <div className=" rounded-[40%] bg-gray-200 mr-2 w-11 h-11 relative p-2 justify-items-center items-center    ">
                    <Shield className="text-secondary  w-8 h-8" /></div>

                <p className="text-2xl font-bold flex md:text-3xl">Smart<span className="text-secondary">Guard</span></p>

                <div className=" hidden  md:bg-green-200 md:w-29 md:py-1 md:rounded-3xl md:flex md:flex-row md:items-center md:ml-auto md:mr-4  ">
                    <div className="w-2 h-2 rounded-full ml-2 mr-2  bg-green-500 "></div>
                    <p className="text-green-900 text-xs ">System Online</p>
                </div>
            </nav>

            <main className="h-auto items-center mt-[35%] flex flex-col justify-self-center lg:mt-[27%] ">
                <div className="bg-gray-200 w-[ 100px]  py-1.5 px-2.5 rounded-full flex justify-center items-center ">
                    <p className="text-secondary text-[10px] font-semibold ">Anambra State Safety Initiative</p>
                </div>
                <h2 className="max-w-[98%] text-[2.5rem] text-center leading-snug font-bold px-4 md:max-w-[80%] text-primary md:text-[3rem] ">Smart Crime & Emergency Detection platform</h2>

            <p className="text-gray-500 max-w-[90%] text-[15px] text-center leading-snug md:max-w-[75%] mt-3 ">Real-time monitoring and rapid emergency response for a safer Anambra State. Citzens and security personnel connected through technology.</p>


            </main>


        </>
    )
}


