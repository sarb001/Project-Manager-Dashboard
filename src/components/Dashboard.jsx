import { RxDashboard } from "react-icons/rx";
import { FaCheckCircle } from "react-icons/fa";
import { FaRotate } from "react-icons/fa6";
import { GoAlert } from "react-icons/go";
import { FiUsers } from "react-icons/fi";

export const Dashboard = () => {

    const Cards = [
        { icons :  <RxDashboard /> , counts : 5 , maintext : "Total Projects" },
        { icons :  <FaCheckCircle /> , counts :  1 , maintext : "Completed" },
        { icons :  <FaRotate />, counts : 3 , maintext : "Ongoing"},
        { icons :  <GoAlert /> , counts : 1 , maintext : "Delayed" , bgcolor : "bg-[#9c405b]" },
        { icons :  <FiUsers /> , counts : 5 , maintext : "Employees"},
    ]

    return (
        <>
            <div className="px-12 py-4 grid grid-cols-[5fr_1fr]">

                <div className="grid grid-cols-5 gap-4 ">
                    {Cards?.map(i => {
                        return (
                            <div key = {i?.maintext}>
                                <div className={` ${i?.bgcolor ? i?.bgcolor : "bg-white"} rounded-sm border-1 px-2 py-4`}>
                                    <div className="pl-4 text-xl "> {i?.icons}</div>
                                    <div className="flex items-center justify-center text-3xl  font-bold " > {i?.counts}</div>
                                    <div className="flex  items-center justify-center text-xl " > {i?.maintext}</div>
                                </div>
                            </div>
                        )
                    })}
                </div> 
            
                <div className="grid ">
                    <span> Team mood </span>  
                </div>

            </div>
        </>
    )
}