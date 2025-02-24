import { FaCheckCircle } from "react-icons/fa";
import { GoAlert } from "react-icons/go";


const BudgetCards = () => {

    const CardsData = [
        { id : 1, title : "Insurance App" , subtitle : "Verti" ,TotalBudget : "70,000" , Profit : "2500" , Actualhours : "1,100" , soldHours : "100 hours over Budget" , BarPercentage : "100" , barcolor : "bg-red-800" , icon : <GoAlert />  },
        { id : 2, title : "Neo" , subtitle : "Bankia" ,TotalBudget : "70,000" , Profit : "4000" , Actualhours : "1,100" , soldHours : "1000  sold hours " , BarPercentage : "50" , barcolor : "bg-yellow-300" },
        { id : 3, title : "VR Website" , subtitle : "Barca" ,TotalBudget : "70,000" , Profit : "4,000" , Actualhours : "1,100" , soldHours : "2000 sold hours" , BarPercentage : "55" , barcolor : "bg-green-800" },
        { id : 4, title : "VR Website" , subtitle : "Barca" ,TotalBudget : "70,000" , Profit : "4,000" , Actualhours : "1,100" , soldHours : "1100  sold hours" , BarPercentage : "100" , barcolor : "bg-green-800" , icon : <FaCheckCircle />  },
    ]

    return (
        <div className="grid grid-cols-4 gap-4">
            {CardsData?.map(i => {{
                return (
                    <div key = {i?.id} className=" rounded-xl  bg-amber-300 px-4 py-2 m-3">
                        <div>  
                            <div>
                                <div> {i?.title} </div>
                                <div> {i?.subtitle} </div>
                            </div>

                            <div className="w-12 h-[8vh] object-cover">
                                <img  className="rounded-3xl w-full h-full" src = "https://img.freepik.com/free-photo/empty-road-desertic-landscape_414077-90.jpg?semt=ais_hybrid" />
                            </div>
                        </div>

                        <div className="grid grid-cols-[3fr_1fr] gap-4">
                            <div>
                                <div> Total Budget {i?.TotalBudget} € </div>  
                                <div> Profitability {i?.Profit} € </div>  
                            </div>

                            <div className="flex items-center justify-center">
                                {i?.icon}
                            </div>
                        </div>

                        <div className="p-4">
                            <Progressbar  width = {i?.BarPercentage} color = {i?.barcolor} />
                        </div>

                        <div>
                            <div> Actual hours : {i?.Actualhours} </div>
                            <div> {i?.soldHours} </div>
                        </div>
                    </div>
                )
            }})}
        </div>
    )
}


export const Progressbar = ({width,color}) => {
    console.log('width -',width);
    return (
        <div className="w-full h-[3vh] bg-gray-400  rounded-xl">
          <div style = {{ width : `${width}%` }} className = {` ${color} h-full rounded-xl`}>        
          </div>
        </div>
    )
}

export default BudgetCards;