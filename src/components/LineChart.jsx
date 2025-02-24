

import { LineChart ,CartesianGrid ,XAxis  ,YAxis , Line } from 'recharts';

const LineCharts = () => {

    const data = [
        {
          "name": "19 June",
          "uv": 0,
        },
        {
          "name": "20 June",
          "uv": 1000,
        },
        {
          "name": "21 June",
          "uv": 3450,
        },
        {
          "name": "22 June",
          "uv": 3200,
        },
        {
          "name": "23 June",
          "uv": 4100,
        },
        {
          "name": "24 June",
          "uv": 5500,
        },
        {
          "name" : "25 June",
          "uv": 6500,
        },
        {
          
          "uv": 6500,
        }
      ]

    return (
        <>
           <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type = "linear" dataKey="uv" stroke = "#39edcf"  strokeWidth={2} dot = {0} />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey = "name" />
                <YAxis  domain={[0,7000]}
                ticks={[0,1000,2000,3000,4000,5000,6000,7000]}
                />
           </LineChart>
        </>
    )
}

export default LineCharts