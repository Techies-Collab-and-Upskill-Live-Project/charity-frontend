import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    isLoggedin: false, 
    email: null,
    first_name: null,
    last_name: null,

    



}

const authSlice = createSlice({
    name: 'auth' , 
    initialState, 
    reducers: {
        SET_ACTIVE_USER: (state , action) => {
            const {email , first_name, last_name} = action.payload
            state.isLoggedin = true ;
            state.email = email;
            state.first_name = userName;
            state.last_name = userID;
        },

        REMOVE_ACTIVE_USER: (state, action) => {
            state.isLoggedin = false ;
            state.email = null;
            state.first_name = null;
            state.last_name = null ;

            
            
        },
    },

})

export const {SET_ACTIVE_USER , REMOVE_ACTIVE_USER} = authSlice.actions

export const selectIsLoggedIn = (state) => state.auth.isLoggedin
export const selectEmail = (state) => state.auth.email

export const selectFirstName= (state) => state.auth.first_name

export const selectLastName= (state) => state.auth.last_name


export default authSlice.reducer