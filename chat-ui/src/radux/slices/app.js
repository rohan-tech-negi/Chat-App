import { createSlice } from "@reduxjs/toolkit";

import { dispatch } from "../store";
import axios from "axios";


const initialState = {
    sideBar: {
        type: "CONTACT",
        open: false
    },
    users :[],
    friends:[],
    friendRequests:[],
    chat_type: null,
    room_id: null
}


const slice = createSlice({
    name: "app",
    initialState,
    reducers: {
        toggleSideBar: (state, action) => {
            state.sideBar.open = !state.sideBar.open;
        },
        updateSidebarType(state, action){
            state.sideBar.type = action.payload.type;
        },
          updateUsers(state, action) {
      state.users = action.payload.users;
    },
    // updateAllUsers(state, action) {
    //   state.all_users = action.payload.users;
    // },
    updateFriends(state, action) {
      state.friends = action.payload.friends;
    },
    updateFriendRequests(state, action) {
      state.friendRequests = action.payload.requests;
    },
    selectConversation(state, action){
      state.chat_type = "individual";
      state.room_id = action.payload.room_id
    }
    }
})

export default slice.reducer;





export function ToggleSidebar(){
     return async(dispatch, getState) =>{
        dispatch(slice.actions.toggleSideBar());
     }
}



export function UpdateSidebarType(type){
    return async(dispatch, getState)=>{
        dispatch(slice.actions.updateSidebarType({type}));
    }
}



export function FetchUsers() {
  return async (dispatch, getState) => {
    await axios
      .get(
        "/user/get-users",

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        dispatch(slice.actions.updateUsers({ users: response.data.data }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}




export function FetchFriends() {
  return async (dispatch, getState) => {
    await axios
      .get(
        "/user/get-friends",

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        dispatch(slice.actions.updateFriends({ friends: response.data.data }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function FetchFriendRequests() {
  return async (dispatch, getState) => {
    await axios
      .get(
        "/user/get-requests",

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        dispatch(
          slice.actions.updateFriendRequests({ requests: response.data.data })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
}





export const SelectConversation = ({ room_id }) => {
  return async (dispatch, getState) => {
    dispatch(slice.actions.selectConversation({ room_id }));
  };
};

export const FetchCallLogs = () => {
  return async (dispatch, getState) => {
    axios
      .get("/user/get-call-logs", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().auth.token}`,
        },
      })
      .then((response) => {
        console.log(response);
        dispatch(slice.actions.fetchCallLogs({ call_logs: response.data.data }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
