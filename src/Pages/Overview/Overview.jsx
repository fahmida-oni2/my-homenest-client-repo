import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, LineChart, Line, XAxis, YAxis, 
  CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts';
import { FaHome, FaStar, FaHandHoldingUsd, FaChartLine } from 'react-icons/fa';
import { MdTrendingUp } from 'react-icons/md';

const Overview = () => {
  const [data, setData] = useState({ stats: [], chartData: [], properties: [] });

  useEffect(() => {
    // Simulating backend fetch
    const mockData = {
      stats: [
        { id: 1, label: 'Total Properties', value: '12', icon: <FaHome />, color: 'text-primary' },
        { id: 2, label: 'Total Revenue', value: '$12,450', icon: <FaHandHoldingUsd />, color: 'text-secondary' },
        { id: 3, label: 'Avg Rating', value: '4.8', icon: <FaStar />, color: 'text-accent' },
        { id: 4, label: 'Views', value: '1,204', icon: <FaChartLine />, color: 'text-info' },
      ],
      chartData: [
        { name: 'Jan', value: 400, revenue: 2400 },
        { name: 'Feb', value: 300, revenue: 1398 },
        { name: 'Mar', value: 900, revenue: 9800 },
        { name: 'Apr', value: 600, revenue: 3908 },
        { name: 'May', value: 800, revenue: 4800 },
      ],
      properties: [
        { id: 1, name: 'Ocean View Villa', price: '$2,500', status: 'Published', reviews: 12 },
        { id: 2, name: 'Modern City Apartment', price: '$1,200', status: 'Pending', reviews: 5 },
        { id: 3, name: 'Green Valley Cottage', price: '$850', status: 'Published', reviews: 24 },
        { id: 4, name: 'Downtown Studio', price: '$1,100', status: 'Draft', reviews: 0 },
      ]
    };
    setData(mockData);
  }, []);

  return (
    <div className="space-y-8 animate__animated animate__fadeIn">
      
      {/* --- Stat Cards --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.stats.map((stat) => (
          <div key={stat.id} className="stats shadow bg-base-100 border border-base-300">
            <div className="stat">
              <div className={`stat-figure ${stat.color} text-3xl`}>
                {stat.icon}
              </div>
              <div className="stat-title text-sm font-medium">{stat.label}</div>
              <div className={`stat-value text-2xl ${stat.color}`}>{stat.value}</div>
              <div className="stat-desc flex items-center gap-1">
                <MdTrendingUp className="text-success" /> 21% more than last month
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- Charts --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card bg-base-100 shadow-sm border border-base-300 p-6">
          <h2 className="card-title mb-4 text-secondary">Property Interest</h2>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data.chartData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#570df8" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#570df8" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#570df8" fillOpacity={1} fill="url(#colorValue)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card bg-base-100 shadow-sm border border-base-300 p-6">
          <h2 className="card-title mb-4 text-secondary">Revenue Streams</h2>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip cursor={{fill: 'transparent'}} />
                <Bar dataKey="revenue" fill="#f000b8" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* --- Data Table --- */}
      <div className="card bg-base-100 shadow-sm border border-base-300 overflow-hidden">
        <div className="px-6 py-4 border-b border-base-300 flex justify-between items-center">
          <h2 className="font-bold text-lg text-secondary">Recent Property Listings</h2>
          <button className="btn btn-sm btn-outline btn-primary">See All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr className="text-base-content/70">
                <th>Property</th>
                <th>Monthly Rent</th>
                <th>Status</th>
                <th>Reviews</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.properties.map((prop) => (
                <tr key={prop.id}>
                  <td className="font-bold text-primary">{prop.name}</td>
                  <td>{prop.price}</td>
                  <td>
                    <div className={`badge badge-sm p-3 font-semibold ${
                      prop.status === 'Published' ? 'badge-success text-white' : 
                      prop.status === 'Pending' ? 'badge-warning' : 'badge-ghost'
                    }`}>
                      {prop.status}
                    </div>
                  </td>
                  <td>{prop.reviews} Users</td>
                  <td>
                    <button className="btn btn-ghost btn-xs text-info">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Overview;