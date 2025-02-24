import { Cell, Pie, PieChart, Tooltip } from "recharts"

 const Piechart = () => {

    const data1 = [
        {
            "name": "Group A",
            "value": 19,
            "color" : "#d12711",
        },
        {
            "name": "Group B",
            "value": 33,
            "color" : "#12fff7"
        },
        {
            "name": "Group C",
            "value": 48,
            "color" : "#311885"
        },
    ];

    const rendercustomizelabel = ({value, cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius}) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
        const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);
        return (
            <text  
            x = {x}
            y = {y}
            fill="white"
            textAnchor="middle"
            dominantBaseline="central"
            className="text-sm font-medium">
                { `${value}` }
            </text>
        )
    }

    return (
        <>
        <PieChart width={730} height={250}>
        <text
                x={365}
                y={125}
                textAnchor="middle"
                dominantBaseline="middle"
                className="font-semibold"
            >
                <tspan x={365} dy="-1em" className="text-gray-500 text-sm">5</tspan>
                <tspan x={365} dy="1.5em" className="text-sm">Total Projects</tspan>
            </text>
            <Pie data={data1} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={50} outerRadius={80}
            labelLine = {false} label = {rendercustomizelabel}
            >
                {data1?.map((entry,index) => (
                    <Cell  key = {`cell-${index}`} fill = {entry?.color} dataKey = {entry?.maintext} />
                ))}
            </Pie>
        </PieChart>
        </>
    )
}

export default Piechart