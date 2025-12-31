import React, { useEffect , useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetUserThunk, DeleteUserThunk } from "../services/Actions/UserActions";
import { useNavigate } from "react-router-dom";

const ViewData = () => {
  // const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useSelector((state) => state.UserReducer);

  useEffect(() => {
    dispatch(GetUserThunk());
  }, [dispatch]);




  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">User Data</h2>
      <div>
        {/* <input type="text" placeholder="Search by name" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} /> */}
      </div>
      {users.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">No data found.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {users.map((  item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow-md p-6 border hover:shadow-xl transform transition duration-300 hover:scale-105"
            >
              <div className="mb-3">
                <h3 className="text-2xl font-bold text-gray-800">{item.name}</h3>
                <p className="text-lg text-gray-600">{item.email}</p>
                <p className="text-base text-gray-500">Age: {item.age}</p>
              </div>
              <div className="flex justify-between items-center gap-4 mt-4">
                <button
                  className="text-blue-600 hover:text-blue-800 text-2xl transition-transform hover:scale-125"
                  onClick={() => navigate(`/edit/${item._id}`)}
                  title="Edit"
                >
                  ✏️
                </button>
                <button
                  className="text-red-600 hover:text-red-800 text-2xl transition-transform hover:scale-125"
                  onClick={() => dispatch(DeleteUserThunk(item._id))}
                  title="Delete"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewData;
