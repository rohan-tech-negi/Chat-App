import { Avatar, Dialog, DialogContent, Stack, Tab, Tabs, Typography, useTheme } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { FetchFriendRequests, FetchFriends, FetchUsers } from '../../radux/slices/app';
import { FriendElement, FriendRequestElement, UserElement } from '../../components/friends';



const UsersList = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(FetchUsers());
  }, []);

  return (
    <>
      {Array.isArray(users) && users.map((el, idx) => {
        return <UserElement key={el._id} {...el}></UserElement>;
      })}
    </>
  );
};


const FriendsList = () => {
  const dispatch = useDispatch();

  const { friends } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(FetchFriends());
  }, []);

  return (
    <>
      {Array.isArray(friends) && friends.map((el, idx) => {
        return <FriendElement key={el._id} {...el} ></FriendElement>;
      })}
    </>
  );
};



const FriendRequestsList = () => {
  const dispatch = useDispatch();

  const { friendRequests } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(FetchFriendRequests());
  }, []);

  return (
    <>
      {Array.isArray(friendRequests) && friendRequests.map((el, idx) => {
        return <><FriendRequestElement key={el._id} {...el.sender} id={el._id}></FriendRequestElement></>;
      })}
    </>
  );
};

const Friends = ({ open, handleClose }) => {

     const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
    //   TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      sx={{ p: 4 }}
    >

        <Stack p={2} sx={{ width: "100%" }}>
            <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Explore" />
          <Tab label="Friends" />
          <Tab label="Requests" />
        </Tabs>


        </Stack>

        <DialogContent>
        <Stack sx={{ height: "100%" }}>
          <Stack spacing={2.4}>
            {(() => {
              switch (value) {
                case 0: // display all users in this list
                  return <UsersList />;

                case 1: // display friends in this list
                  return <FriendsList />;

                case 2: // display request in this list
                  return <FriendRequestsList/>;

                default:
                  break;
              }
            })()}
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  )
}





export default Friends