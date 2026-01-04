import React, { useEffect, useState } from "react";
import "animate.css";
import { useLoaderData, useLocation } from "react-router";
import Card from "../../Components/Card/Card";
import Loading from "../../Components/Loading/Loading";
import ErrorProperty from "../../Components/ErrorProperty/ErrorProperty";
import {
  HiOutlineSearch,
  HiOutlineLocationMarker,
  HiChevronRight,
  HiChevronLeft,
} from "react-icons/hi";
import {
  HiOutlineAdjustmentsHorizontal,
  HiOutlineBanknotes,
  HiOutlineArrowPath,
  HiArrowsUpDown,
} from "react-icons/hi2";

const AllProperties = () => {
  const data = useLoaderData();
  console.log(data);
  const [search, setSearch] = useState("");
  const [locationSearch, setLocationSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [loading, setLoading] = useState(false);
  const [filteredProperty, setFilteredProperty] = useState([]);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

  useEffect(() => {
    if (!data || !data.length) return;
    setLoading(true);

    const timer = setTimeout(() => {
      let results = [...data];

      if (category) {
        results = results.filter((p) => p.category === category);
      }

      if (search.trim()) {
        results = results.filter((p) =>
          p.propertyName.toLowerCase().includes(search.toLowerCase())
        );
      }

      if (locationSearch.trim()) {
        results = results.filter((p) =>
          p.location.toLowerCase().includes(locationSearch.toLowerCase())
        );
      }

      if (maxPrice) {
        results = results.filter((p) => Number(p.price) <= Number(maxPrice));
      }

      if (sortBy === "newest") {
        results.sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate));
      } else if (sortBy === "oldest") {
        results.sort((a, b) => new Date(a.postedDate) - new Date(b.postedDate));
      } else {
        results.sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate));
      }
      setFilteredProperty(results);
      setCurrentPage(1);
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [data, search, locationSearch, maxPrice, category, sortBy]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProperty.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredProperty.length / itemsPerPage);
  const resetFilters = () => {
    setSearch("");
    setLocationSearch("");
    setMaxPrice("");
    setSortBy("default");
  };

  const showNoResult = filteredProperty.length === 0 && !loading;

  return (
    <div className="bg-[#FAFBFF] flex flex-col min-h-screen ml-5 mr-5 pb-20">
      <div className="pt-16 pb-10 bg-white border-b border-gray-100 mb-8">
        <div className=" mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-secondary mb-4 animate__animated animate__fadeInDown tracking-tight">
            Find Your <span className="text-primary">Perfect Nest</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto animate__animated animate__fadeInUp leading-relaxed">
            Discover premium properties tailored to your lifestyle.
          </p>
        </div>
      </div>

      <div className=" mx-auto px-4 w-full">
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mb-10 space-y-4">
          <div className="flex items-center justify-between border-b border-gray-50 pb-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <HiOutlineAdjustmentsHorizontal className="text-primary text-xl" />
              </div>
              <h2 className="font-bold text-xl text-secondary">
                {filteredProperty.length}{" "}
                <span className="text-gray-400 font-medium text-lg">
                  Nests Found
                </span>
              </h2>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-xl border border-gray-100">
              <HiArrowsUpDown className="text-primary" />
              <select
                className="bg-transparent text-sm font-bold text-secondary outline-none cursor-pointer"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="default">Sort By: Default</option>
                <option value="newest">Newest Listed</option>
                <option value="oldest">Oldest Listed</option>
              </select>
            </div>
            {(search || locationSearch || maxPrice || sortBy !== "default") && (
              <button
                onClick={resetFilters}
                className="btn btn-ghost btn-sm text-primary gap-2 hover:bg-primary/5 rounded-lg"
              >
                <HiOutlineArrowPath />
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search by Name */}
            <div className="relative">
              <HiOutlineSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Property Name..."
                className="w-full pl-12 pr-4 py-3 text-black rounded-2xl border border-gray-100 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all bg-gray-50 text-sm"
              />
            </div>

            {/* Search by Location */}
            <div className="relative">
              <HiOutlineLocationMarker className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
              <input
                value={locationSearch}
                onChange={(e) => setLocationSearch(e.target.value)}
                type="text"
                placeholder="Location..."
                className="w-full pl-12 pr-4 py-3 text-black rounded-2xl border border-gray-100 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all bg-gray-50 text-sm"
              />
            </div>
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col justify-center items-center p-20 gap-4">
            <Loading />
            <p className="text-primary font-medium animate-pulse">
              Searching the neighborhood...
            </p>
          </div>
        ) : showNoResult ? (
          <div className="animate__animated animate__zoomIn">
            <ErrorProperty searchTerm={search || locationSearch} />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentItems.map((property) => (
                <Card key={property._id} property={property} />
              ))}
            </div>
            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-16 gap-2">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                  className="btn btn-circle btn-outline border-gray-200 text-secondary hover:bg-primary hover:border-primary transition-all disabled:opacity-30"
                >
                  <HiChevronLeft size={24} />
                </button>

                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`w-12 h-12 rounded-full font-bold transition-all ${
                      currentPage === index + 1
                        ? "bg-primary text-white shadow-lg shadow-primary/30"
                        : "bg-white text-secondary hover:bg-gray-100 border border-gray-100"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                  className="btn btn-circle btn-outline border-gray-200 text-secondary hover:bg-primary hover:border-primary transition-all disabled:opacity-30"
                >
                  <HiChevronRight size={24} />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AllProperties;
