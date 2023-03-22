import {createReducer} from '@reduxjs/toolkit';

const initialState={
c:0;

}



export const customReducer= createReducer(initialState,{ 
increment: (state,action)=>{
state.c += 1;
},

incrementByValue: (state,action)=>{
state.c += 1;
state.c = action.payload;
},
decrement: (state,action)=>{
state.c -= 1;
},
decrementByValue: (state,action)=>{
state.c -= 1;
state.c = action.payload;
},

multiply: (state,action)=>{
state.c *= 2;
},
})
