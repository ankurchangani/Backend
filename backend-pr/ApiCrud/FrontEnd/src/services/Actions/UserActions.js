import axios from "axios";
const API = "http://localhost:3010"; 

export const AddUserAction = (user) => {
  return {
    type: "ADD_USER",
    payload: user,
  };
};

export const GetUserActions = (users) => {
  return {
    type: "GET_USER",
    payload: users,
  };
};

export const singleUser = (user) => {
  return {
    type: "SINGLE_USER",
    payload: user,
  };
}

export const updateUser = (data) => {
  return {
    type : "UPDATE_USER",
    payload : data
  }
}
export const DeleteUserAction = () => {
  return {
    type: "DELETE_USER",
  };
};

export const AddUserThunk = (data) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${API}/add`, data);
      if (res.status === 200) {
        dispatch(AddUserAction(res.data.data));
        dispatch(GetUserThunk());
      }
    } catch (error) {
      console.log("Add Error:", error);
    }
  };
};

export const GetUserThunk = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${API}/get`);
      if (res.status === 200) {
        dispatch(GetUserActions(res.data.data));
      }
    } catch (error) {
      console.log("Get Error:", error);
    }
  };
};

// sigle user

export const SingleUserThunk = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${API}/${id}`);

      if (res.status === 200) {
        dispatch(singleUser(res.data.data));
      }
    } catch (error) {
      console.log("Get Error:", error);
    }
  }
}

export const UpdateUserThunk = (id , data) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(`${API}/${id}` , data);
      if (res.status === 200) {
        dispatch(updateUser(res.data.data));
      }
    } catch (error) {
      console.log("Get Error:", error);
    }
  }
}
export const DeleteUserThunk = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(`${API}/${id}`);
      if (res.status === 200) {
        dispatch(DeleteUserAction(id));
        dispatch(GetUserThunk());
      }
    } catch (error) {
      console.log("Delete Error:", error);
    }
  };
};