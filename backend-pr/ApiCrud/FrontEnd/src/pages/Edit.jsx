import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SingleUserThunk, UpdateUserThunk } from '../services/Actions/UserActions';

const EditData = () => {
  const [editusers, setEditUsers] = useState({
    name: '',
    email: '',
    age: '',
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { id } = useParams();

  const { user } = useSelector((state) => state.UserReducer);

  useEffect(() => {
    dispatch(SingleUserThunk(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (user) {
      setEditUsers({
        name: user.name || '',
        email: user.email || '',
        age: user.age || '',
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setEditUsers((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(UpdateUserThunk(id, editusers));
    navigate('/viewData');
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Edit User</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-600 mb-1" htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={editusers.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-gray-600 mb-1" htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={editusers.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-gray-600 mb-1" htmlFor="age">Age</label>
          <input type="number" id="age" name="age" value={editusers.age} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="text-center">
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition duration-200">Update</button>
        </div>
      </form>
    </div>
  );
};

export default EditData;
