import { VscBellDot } from "react-icons/vsc";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiUserCircleDuotone } from "react-icons/pi";

export const Navbar = () => {
    // text-[#39edcf]
    const Links = [
        {  content : "Dashboard"  , textColor : "border-b-2 border-[#39edcf] " },
        {  content : "Projects" }, 
        { content : "Team" },
        {  content : "Clients" },
        { content : "Time" },
        { content : "Reports" },
    ]

    return (
        <div className="grid grid-cols-[0.5fr_5fr_1fr] bg-[#404991] px-6 py-2 ">
          <div> HOURS </div>

          <div className="px-4 flex flex-row gap-4  justify-center">
              {Links?.map(item => {
                return (
                    <div key = {item?.mainlink} className= {`${item?.textColor}`} >
                     {item?.content}
                    </div>
                )
              })}
          </div>

          <div className="grid grid-cols-[0.3fr_1fr] items-center ">
              <div className="flex justify-center"> <VscBellDot /> </div>
              <div className="grid grid-cols-[0.3fr_0fr] items-center">
                <div> <PiUserCircleDuotone /> </div>   
                <div className="grid grid-cols-[1fr_1fr] items-center">
                    <div> Mario </div> 
                    <div> <RiArrowDropDownLine /> </div>  
                </div>
              </div>
          </div>
        </div>
    )
}