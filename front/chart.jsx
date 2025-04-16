import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function CarbonEmissionCharts() {
  return (
    <div className="p-4 space-y-8">
      <h2 className="text-xl font-semibold">Monthly Carbon Emission</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={monthlyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis label={{ value: 'kg CO₂', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Line type="monotone" dataKey="emission" stroke="#82ca9d" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>

      <h2 className="text-xl font-semibold">Yearly Carbon Emission</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={yearlyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis label={{ value: 'kg CO₂', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Line type="monotone" dataKey="emission" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
