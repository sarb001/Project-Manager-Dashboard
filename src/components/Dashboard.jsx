
import { RxDashboard } from "react-icons/rx";
import { FaCheckCircle } from "react-icons/fa";
import { FaRotate } from "react-icons/fa6";
import { GoAlert } from "react-icons/go";
import { FiUsers } from "react-icons/fi";
import LineCharts from "./LineChart";
import Piechart from "./PieChart";
import { BudgetCards } from "./BudgetCards";
import { IoAdd } from "react-icons/io5";
import { PiSortAscendingBold } from "react-icons/pi"
import { CiCalendar } from "react-icons/ci";
import { MdOutlineFileDownload } from "react-icons/md";

export const Dashboard = () => {

    const CardsData = [
        { id : 1, title : "Insurance App" , subtitle : "Verti" ,TotalBudget : "70,000" , Profit : "2500" , Actualhours : "1,100" , soldHours : "100 hours over Budget" , BarPercentage : "100" , barcolor : "bg-red-800" , icon : <GoAlert />  },
        { id : 2, title : "Neo" , subtitle : "Bankia" ,TotalBudget : "70,000" , Profit : "4000" , Actualhours : "1,100" , soldHours : "1000  sold hours " , BarPercentage : "50" , barcolor : "bg-yellow-300" },
        { id : 3, title : "VR Website" , subtitle : "Barca" ,TotalBudget : "70,000" , Profit : "4,000" , Actualhours : "1,100" , soldHours : "2000 sold hours" , BarPercentage : "55" , barcolor : "bg-green-800" },
        { id : 4, title : "VR Website" , subtitle : "Barca" ,TotalBudget : "70,000" , Profit : "4,000" , Actualhours : "1,100" , soldHours : "1100  sold hours" , BarPercentage : "100" , barcolor : "bg-green-800" , icon : <FaCheckCircle />  },
    ]

    const Cards = [
        { icons :  <RxDashboard /> , counts : 5 , maintext : "Total Projects"  },
        { icons :  <FaCheckCircle /> , counts :  1 , maintext : "Completed" },
        { icons :  <FaRotate />, counts : 3 , maintext : "Ongoing"},
        { icons :  <GoAlert className = "text-[#e62e00] font-bold" /> , counts : 1 , maintext : "Delayed" , bgcolor : "bg-[#ff6666]" },
        { icons :  <FiUsers /> , counts : 5 , maintext : "Employees"},
    ]

    const BudgetStatusButtons = [
        { id : 1 , text : "Add New Project" , btnsizes : "grid-cols-[1fr_6fr]" ,bgcolor : "bg-[#2c573f]" , textcolor : "text-white" ,   icon : <IoAdd  />  },
        { id : 2 , text : "Download Report" , btnsizes : "grid-cols-[1fr_6fr]" , icon : <MdOutlineFileDownload /> },
        { id : 3 , text : "dd/mm/yyyy-dd/mm/yyyy" , btnsizes : "grid-cols-[1fr_6fr]",  icon :  <CiCalendar   />},
        { id : 4 , text : "Filter"  , btnsizes : "grid-cols-[1fr_3fr]" , icon : <PiSortAscendingBold />  }
    ]

    //      
    const TeamCards = [
        { id : 1 , name : "Andrea" , level : "UX Junior" , emoji : '😕' , emojidistance : "35px" },
        { id : 2 , name : "Alvaro" , level : "Backend developer" , emoji : '😀' ,emojidistance : "100px" },
        { id : 3 , name : "Juan" , level : "UX Senior"  , emoji : '🙂' ,emojidistance : "70px" },
        { id : 4 , name : "Jose" , level : "Marketing"  , emoji : '😡' ,emojidistance : "10px" },
        { id : 5 , name : "Maria" , level : "UX Junior" , emoji : '🤐' ,emojidistance : "50px" },
    ]


    return (
        <>
         <div className="grid grid-cols-[5fr_1fr] px-8 py-12">
                <div>

                    <div className = "grid grid-cols-5 gap-5">
                        {Cards?.map(i => (
                            <div key = {i?.counts} className = {`rounded-[4px] ${i.bgcolor ? i?.bgcolor : "bg-[#f2f2f2]"} px-4 py-6  my-8`}>
                                 <div className="text-[#4dd2ff] text-2xl"> {i?.icons} </div>
                                 <div className="text-3xl flex justify-center"> {i?.counts} </div>
                                 <div className="text-[16px] flex justify-center mt-4"> {i?.maintext} </div>
                            </div>
                        ))}
                    </div>

                    <div>
                        <LineCharts />
                        <Piechart />
                    </div>
                </div>
            
                <div>
                    <div> Team mood </div>

                    {/* <div className="grid grid-rows-5 gap-4">
                    {TeamCards?.map(i => (
                        <div key = {i?.id} className="grid grid-rows-[2fr_1fr] gap-3 bg-lime-300 px-4 py-2">

                            <div className="grid grid-cols-2 gap-4">  
                                <div> 
                                    <img width={40} height={5} className="rounded-full"   src = "https://png.pngtree.com/png-clipart/20241209/original/pngtree-a-photo-of-confident-handsome-man-headshot-with-black-formal-suit-png-image_17738643.png" alt = "main-img" /> 
                                </div>
                                <div>
                                    <div> {i?.name}  </div>
                                    <div> {i?.level}  </div>
                                </div>
                            </div>

                            <div>
                                 <div className ="absolute w-[180px] overflow-hidden border-[1px] border-gray-600  rounded-xl my-4"></div>
                                 <div style = {{ position:'relative', top : 0 , left : `${i?.emojidistance}`  }}
                                 >   {i?.emoji} 
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>   */}
                </div>

        </div>

        <div className = "bg-[#fafafa]">

                    <div className = "grid grid-cols-[1fr_6fr] gap-4 ">
                        <div className = "text-2xl px-3"> Budget Status </div>

                        <div className = "flex flex-row gap-4">
                            
                            {BudgetStatusButtons?.map(i => {
                                return (
                                    <div key = {i?.id}>
                                        <button className = {` ${i?.bgcolor ? i?.bgcolor : "bg-white"}  ${i?.textcolor ? i?.textcolor : "text-[#2c573f]" } grid ${i?.btnsizes} border-[2px] border-[#2c573f] text-[13px]  px-2 py-1 rounded-[4px] 
                                     gap-1 ` }> 
                                            <div className="flex justify-between items-center ">  {i?.icon}  </div>
                                            <div className="flex justify-end items-center ">  {i?.text} </div>
                                         </button>
                                    </div>
                                )
                            })} 

                        </div>
                    
                    </div>

                <div>
                    <BudgetCards />
                </div>
        </div>
        </>
    )
}