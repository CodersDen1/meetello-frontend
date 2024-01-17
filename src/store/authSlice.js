import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth: false,
  user:null,
  otp:{
    email:'',
    phoneNumber:'',
    hash:'',
  }
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state,action) => {
        const data = action.payload

        state.user=data.data;
        state.isAuth= true;
    },
    setOtp:(state , action)=>{
          const {email,phoneNumber,hash} = action.payload;

          state.otp.email=email;
          state.otp.phoneNumber=phoneNumber;
          state.otp.hash=hash;

    }
   
  },
})

// Action creators are generated for each case reducer function

export const {setAuth,setOtp} =authSlice.actions;

export default authSlice.reducer;