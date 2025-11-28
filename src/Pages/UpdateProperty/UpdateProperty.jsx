import React, { use } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const UpdateProperty = () => {
  const { user } = use(AuthContext);
  const loaderData = useLoaderData();
  // console.log(data)
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      propertyName: e.target.name.value,
      description: e.target.description.value,
      price: e.target.price.value,
      location: e.target.location.value,
      category: e.target.category.value,
      imageUrl: e.target.imageLink.value,
      postedDate: new Date(),
      postedByEmail: e.target.email.value,
      postedByName: e.target.UserName.value,
    };
    fetch(
      `https://real-estate-api-server.vercel.app/all-properties/${data._id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        //  console.log(data)
        toast.success("A property has been updated successfully");
        e.target.reset();
      })
      .catch((err) => {
        // console.log(err)
        toast.error("Error");
      });
  };
  const data = loaderData?.result || {};
  return (
    <>
      <div className="max-w-xl mx-auto my-10 p-6 bg-white rounded-xl shadow-2xl border border-gray-100">
        <h2 className="text-3xl text-center font-extrabold text-gray-900 mb-6  pb-3">
          Update your Property
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Property Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Property Name:
            </label>
            <input
              type="text"
              name="name"
              defaultValue={data.propertyName}
              required
              className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description:
            </label>
            <textarea
              name="description"
              defaultValue={data.description}
              required
              rows="4"
              className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm resize-y"
            />
          </div>

          {/* Category  */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category:
            </label>
            <select
              defaultValue={data.category}
              name="category"
              required
              className="mt-1 block w-full px-3 text-black py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select Category</option>
              <option value="Rent">Rent</option>
              <option value="Sale">Sale</option>
              <option value="Commercial">Commercial</option>
              <option value="Land">Land</option>
            </select>
          </div>

          {/* Price (Number Input) */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Price (USD):
            </label>
            <input
              type="number"
              name="price"
              defaultValue={data.price}
              required
              min="0"
              step="1"
              placeholder="e.g., 550000"
              className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Location (City, Address, or Area):
            </label>
            <input
              type="text"
              name="location"
              defaultValue={data.location}
              required
              className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Image Link  */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image Link (URL):
            </label>
            <input
              type="url"
              name="imageLink"
              defaultValue={data.imageUrl}
              placeholder="e.g., https://example.com/property.jpg"
              className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="pt-2 border-t mt-4 border-gray-200">
            <p className="text-lg font-semibold text-gray-700 mb-2">
              Posted By:
            </p>

            {/* User Name  */}
            <div>
              <label className="block text-sm font-medium text-gray-500">
                User Name:
              </label>
              <input
                type="text"
                value={user.displayName}
                name="UserName"
                readOnly
                className="mt-1 block w-full text-black px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-600 sm:text-sm cursor-not-allowed"
              />
            </div>

            {/* User Email*/}
            <div>
              <label className="block text-sm font-medium text-gray-500">
                User Email:
              </label>
              <input
                type="email"
                name="email"
                value={user.email}
                readOnly
                className="mt-1 block w-full text-black px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-600 sm:text-sm cursor-not-allowed"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          >
            Update
          </button>
        </form>
      </div>
      <Toaster></Toaster>
    </>
  );
};

export default UpdateProperty;
