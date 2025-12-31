import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddUserThunk } from '../../services/Actions/UserActions';
import { useDispatch } from 'react-redux';
const AddData = () => {
    const [users, setUsers] = useState({
      name: '',
      email: '',
      age: '',
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
     const {name , value} = e.target
    setUsers((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(users);
      dispatch(AddUserThunk(users))
      navigate('/viewData')
      setUsers({
        name: '',
        email: '',
        age: '',
      });
    };
  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Add User</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
    
        <div>
          <label className="block text-gray-600 mb-1" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name='name'
            value={users.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>

      
        <div>
          <label className="block text-gray-600 mb-1" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name='email'
            value={users.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

      
        <div>
          <label className="block text-gray-600 mb-1" htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name='age'
            value={users.age}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your age"
          />
        </div>

       
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition duration-200"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddData;
