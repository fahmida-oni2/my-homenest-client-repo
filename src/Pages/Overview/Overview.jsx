import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { FaHome, FaStar, FaHandHoldingUsd, FaChartLine } from "react-icons/fa";
import { MdTrendingUp } from "react-icons/md";
import Loading from "../../Components/Loading/Loading";

const Overview = () => {
  const [data, setData] = useState({
    stats: [],
    chartData: [],
    properties: [],
  });
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://real-estate-api-server.vercel.app/all-properties"
        );
        const result = await response.json();

        const properties = Array.isArray(result) ? result : result.result || [];

        const totalProperties = properties.length;
        const totalValue = properties.reduce((acc, curr) => {
          const price = parseInt(curr.price.replace(/[$,]/g, "")) || 0;
          return acc + price;
        }, 0);

        const categoryCounts = properties.reduce((acc, curr) => {
          acc[curr.category] = (acc[curr.category] || 0) + 1;
          return acc;
        }, {});

        const chartData = Object.keys(categoryCounts).map((cat) => ({
          name: cat,
          count: categoryCounts[cat],
        }));

        setData({
          stats: [
            {
              id: 1,
              label: "Total Properties",
              value: totalProperties,
              icon: <FaHome />,
              color: "text-primary",
            },
            {
              id: 2,
              label: "Asset Value",
              value: `$${(totalValue / 1000000).toFixed(1)}M`,
              icon: <FaHandHoldingUsd />,
              color: "text-secondary",
            },
            {
              id: 3,
              label: "Verified Listings",
              value: properties.filter((p) => p.status === "Verified").length,
              icon: <FaStar />,
              color: "text-accent",
            },
            {
              id: 4,
              label: "Avg Price",
              value: `$${Math.round(totalValue / totalProperties / 1000)}K`,
              icon: <FaChartLine />,
              color: "text-info",
            },
          ],
          chartData: chartData,
          properties: properties,
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loading />;

  const displayedProperties = showAll
    ? data.properties
    : data.properties.slice(0, 5);

  return (
    <div className="space-y-8 animate__animated animate__fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.stats.map((stat) => (
          <div
            key={stat.id}
            className="stats shadow bg-base-100 border border-base-300"
          >
            <div className="stat">
              <div className={`stat-figure ${stat.color} text-3xl`}>
                {stat.icon}
              </div>
              <div className="stat-title text-sm font-black uppercase tracking-wider">
                {stat.label}
              </div>
              <div className={`stat-value text-2xl font-black ${stat.color}`}>
                {stat.value}
              </div>
              <div className="stat-desc flex items-center gap-1">
                <MdTrendingUp className="text-success" /> Live API Data
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- Charts --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card bg-base-100 shadow-sm border border-base-300 p-6">
          <h2 className="card-title mb-4 text-secondary font-black italic">
            Category Distribution
          </h2>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data.chartData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#570df8" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#570df8" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#e5e7eb"
                />
                <XAxis
                  dataKey="name"
                  fontSize={10}
                  tick={{ fill: "#9ca3af" }}
                />
                <YAxis fontSize={10} tick={{ fill: "#9ca3af" }} />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="count"
                  stroke="#570df8"
                  fillOpacity={1}
                  fill="url(#colorValue)"
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card bg-base-100 shadow-sm border border-base-300 p-6">
          <h2 className="card-title mb-4 text-secondary font-black italic">
            Listings per Category
          </h2>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.chartData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#e5e7eb"
                />
                <XAxis
                  dataKey="name"
                  fontSize={10}
                  tick={{ fill: "#9ca3af" }}
                />
                <YAxis fontSize={10} tick={{ fill: "#9ca3af" }} />
                <Tooltip cursor={{ fill: "transparent" }} />
                <Bar
                  dataKey="count"
                  fill="#f000b8"
                  radius={[4, 4, 0, 0]}
                  barSize={40}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* --- Data Table --- */}
      <div className="card bg-base-100 shadow-sm border border-base-300 overflow-hidden">
        <div className="px-6 py-4 border-b border-base-300 flex justify-between items-center bg-base-200/50">
          <h2 className="font-black text-lg text-secondary uppercase tracking-tighter">
            Inventory Overview
          </h2>

          <button
            onClick={() => setShowAll(!showAll)}
            className={`btn btn-sm font-bold ${
              showAll ? "btn-error btn-outline" : "btn-primary"
            }`}
          >
            {showAll ? "Show Less" : "Manage All"}
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr className="text-secondary font-black uppercase text-xs">
                <th>Property</th>
                <th>Price</th>
                <th>Location</th>
                <th>Status</th>
                <th>Agent</th>
              </tr>
            </thead>
            <tbody>
              {displayedProperties.map((prop) => (
                <tr
                  key={prop._id || prop.propertyName}
                  className="hover animate__animated animate__fadeIn"
                >
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="mask mask-squircle w-10 h-10">
                        <img src={prop.imageUrl} alt={prop.propertyName} />
                      </div>
                      <span className="font-bold text-primary tracking-tight">
                        {prop.propertyName}
                      </span>
                    </div>
                  </td>
                  <td className="font-semibold">{prop.price}</td>
                  <td className="text-xs text-base-content/70">
                    {prop.location}
                  </td>
                  <td>
                    <div
                      className={`badge badge-sm p-3 font-bold italic ${
                        prop.status === "Verified"
                          ? "badge-success text-white"
                          : "badge-ghost"
                      }`}
                    >
                      {prop.status}
                    </div>
                  </td>
                  <td className="text-xs font-medium">{prop.postedByName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 bg-base-100 text-center text-xs text-base-content/50 border-t border-base-300 font-bold">
          Showing {displayedProperties.length} of {data.properties.length}{" "}
          Listings
        </div>
      </div>
    </div>
  );
};

export default Overview;
