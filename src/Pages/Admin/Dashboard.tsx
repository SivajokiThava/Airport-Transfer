import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Filter } from "lucide-react";

const Dashboard = () => {
  const data = [
    { name: "Jan", revenue: 4000, profit: 2400 },
    { name: "Feb", revenue: 3000, profit: 1398 },
    { name: "Mar", revenue: 2000, profit: 9800 },
    { name: "Apr", revenue: 2780, profit: 3908 },
  ];

  const pieData = [
    { name: "Completed", value: 400 },
    { name: "Cancelled", value: 100 },
  ];

  const COLORS = ["#0088FE", "#FF8042"];

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Top Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          "Total Booking",
          "Total Revenue",
          "Total Operators",
          "Total Drivers",
        ].map((item) => (
          <div
            key={item}
            className="bg-white shadow rounded-lg p-4 text-center"
          >
            <h3 className="text-gray-500 text-sm">{item}</h3>
            <p className="text-xl font-semibold">--</p>
          </div>
        ))}
      </div>

      {/* Booking Summary */}
      <div className="bg-white shadow rounded-lg p-4 mb-6">
        <div className="flex justify-between items-center border-b pb-2">
          <h3 className="text-lg font-semibold">Booking Summary</h3>
          <button className="p-2 hover:bg-gray-100 rounded">
            <Filter className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        <div className="grid grid-cols-5 text-center mt-4">
          {[
            "Completed",
            "Cancelled",
            "Revenue",
            "Ops Commission",
            "Profit",
          ].map((item) => (
            <p key={item} className="text-gray-700 font-medium">
              {item}
            </p>
          ))}
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Line Chart */}
        <div className="bg-white shadow rounded-lg p-4">
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
              <XAxis dataKey="name" stroke="#8884d8" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="profit"
                stroke="#82ca9d"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white shadow rounded-lg p-4">
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#8884d8" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#0088FE" />
              <Bar dataKey="profit" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white shadow rounded-lg p-4">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={pieData} dataKey="value" outerRadius={80}>
                {pieData.map((_entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
