import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        userName: "Ricardo Cooper",
        userAvatar: "/images/avatar.jpg"
    }
});

export default userSlice;
